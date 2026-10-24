
import express from 'express';
import cors from 'cors';
import { pool } from './config/database.js';
import { projects as initialProjects } from './data/projects.js';

const app = express();
const PORT = 3000;

// Тимчасове сховище в пам'яті
let projects = [...initialProjects];
let nextId = Math.max(0, ...projects.map(project => project.id)) + 1;

app.use(cors());
app.use(express.json());

try {
  const client = await pool.connect();

  console.log('PostgreSQL підключено');

  client.release();
} catch (error) {
  console.error(error.message);
}

app.get('/api/db-check', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW() AS current_time');

    res.json({
      connected: true,
      time: result.rows[0].current_time
    });
  } catch (error) {
    console.error('Помилка PostgreSQL:', error.message);

    res.status(500).json({
      connected: false,
      message: 'Не вдалося підключитися до бази даних'
    });
  }
});

app.get('/', (req, res) => {
  res.json({ message: 'Backend працює!' });
});

// READ: усі проєкти

app.get('/api/projects', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        p.id,
        p.title,
        c.name AS category,
        p.year,
        p.description,
        p.short_description AS "shortDescription",
        p.image,
        p.image_big AS "imageBig",
        p.logo,
        p.url,
        COALESCE(
          ARRAY_AGG(t.name ORDER BY t.name)
            FILTER (WHERE t.name IS NOT NULL),
          ARRAY[]::VARCHAR[]
        ) AS technologies
      FROM projects p
      LEFT JOIN categories c
        ON p.category_id = c.id
      LEFT JOIN project_technologies pt
        ON p.id = pt.project_id
      LEFT JOIN technologies t
        ON pt.technology_id = t.id
      GROUP BY p.id, c.name
      ORDER BY p.id;
    `);

    res.json(result.rows);
  } catch (error) {
    console.error('Помилка отримання проєктів:', error.message);

    res.status(500).json({
      message: 'Не вдалося отримати проєкти'
    });
  }
});


// READ: один проєкт
app.get('/api/projects/:id', async (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({
      message: 'Некоректний ID проєкту'
    });
  }

  try {
    const result = await pool.query(
        `
        SELECT
          p.id,
          p.title,
          c.name AS category,
          p.year,
          p.description,
          p.short_description AS "shortDescription",
          p.image,
          p.image_big AS "imageBig",
          p.logo,
          p.url,
          COALESCE(
            ARRAY_AGG(t.name ORDER BY t.name)
              FILTER (WHERE t.name IS NOT NULL),
            ARRAY[]::VARCHAR[]
          ) AS technologies
        FROM projects p
        LEFT JOIN categories c
          ON p.category_id = c.id
        LEFT JOIN project_technologies pt
          ON p.id = pt.project_id
        LEFT JOIN technologies t
          ON pt.technology_id = t.id
        WHERE p.id = $1
        GROUP BY p.id, c.name;
      `,
        [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: 'Проєкт не знайдено'
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(
        'Помилка отримання проєкту:',
        error.message
    );

    res.status(500).json({
      message: 'Не вдалося отримати проєкт'
    });
  }
});


// CREATE: створити проєкт

app.post('/api/projects', async (req, res) => {
  const {
    title,
    category,
    year,
    description,
    shortDescription,
    image,
    logo,
    url,
    technologies
  } = req.body;

  if (
      typeof title !== 'string' ||
      !title.trim() ||
      typeof category !== 'string' ||
      !category.trim()
  ) {
    return res.status(400).json({
      message: 'Назва та категорія обов’язкові'
    });
  }

  if (
      technologies !== undefined &&
      (
          !Array.isArray(technologies) ||
          !technologies.every(
              item => typeof item === 'string' && item.trim()
          )
      )
  ) {
    return res.status(400).json({
      message: 'Технології мають бути масивом непорожніх рядків'
    });
  }

  const projectYear = year ?? new Date().getFullYear();

  if (
      !Number.isInteger(Number(projectYear)) ||
      Number(projectYear) < 2000 ||
      Number(projectYear) > 2100
  ) {
    return res.status(400).json({
      message: 'Некоректний рік проєкту'
    });
  }

  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    const categoryResult = await client.query(
        `
        SELECT id
        FROM categories
        WHERE name = $1
      `,
        [category.trim()]
    );

    if (categoryResult.rows.length === 0) {
      await client.query('ROLLBACK');

      return res.status(400).json({
        message: 'Такої категорії немає в базі даних'
      });
    }

    const projectResult = await client.query(
        `
        INSERT INTO projects (
          title,
          category_id,
          year,
          description,
          short_description,
          image,
          logo,
          url
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING id
      `,
        [
          title.trim(),
          categoryResult.rows[0].id,
          Number(projectYear),
          description ?? '',
          shortDescription ?? '',
          image ?? '',
          logo ?? '',
          url ?? '#'
        ]
    );

    const projectId = projectResult.rows[0].id;
    const technologyNames = [
      ...new Set(
          (technologies ?? [])
              .map(item => item.trim())
              .filter(Boolean)
      )
    ];

    for (const name of technologyNames) {
      const technologyResult = await client.query(
          `
          INSERT INTO technologies (name)
          VALUES ($1)
          ON CONFLICT (name)
          DO UPDATE SET name = EXCLUDED.name
          RETURNING id
        `,
          [name]
      );

      await client.query(
          `
          INSERT INTO project_technologies (
            project_id,
            technology_id
          )
          VALUES ($1, $2)
          ON CONFLICT DO NOTHING
        `,
          [projectId, technologyResult.rows[0].id]
      );
    }

    await client.query('COMMIT');

    const result = await pool.query(
        `
        SELECT
          p.id,
          p.title,
          c.name AS category,
          p.year,
          p.description,
          p.short_description AS "shortDescription",
          p.image,
          p.image_big AS "imageBig",
          p.logo,
          p.url,
          COALESCE(
            ARRAY_AGG(t.name ORDER BY t.name)
              FILTER (WHERE t.name IS NOT NULL),
            ARRAY[]::VARCHAR[]
          ) AS technologies
        FROM projects p
        LEFT JOIN categories c
          ON p.category_id = c.id
        LEFT JOIN project_technologies pt
          ON p.id = pt.project_id
        LEFT JOIN technologies t
          ON pt.technology_id = t.id
        WHERE p.id = $1
        GROUP BY p.id, c.name
      `,
        [projectId]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    await client.query('ROLLBACK');

    console.error('Помилка створення проєкту:', error.message);

    res.status(500).json({
      message: 'Не вдалося створити проєкт'
    });
  } finally {
    client.release();
  }
});


// UPDATE: оновити проєкт

app.put('/api/projects/:id', async (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({
      message: 'Некоректний ID проєкту'
    });
  }

  const {
    title,
    category,
    year,
    description,
    shortDescription,
    image,
    logo,
    url,
    technologies
  } = req.body;

  if (
      typeof title !== 'string' ||
      !title.trim() ||
      typeof category !== 'string' ||
      !category.trim()
  ) {
    return res.status(400).json({
      message: 'Назва та категорія обов’язкові'
    });
  }

  if (
      technologies !== undefined &&
      (
          !Array.isArray(technologies) ||
          !technologies.every(
              item => typeof item === 'string' && item.trim()
          )
      )
  ) {
    return res.status(400).json({
      message: 'Некоректний список технологій'
    });
  }

  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    const existingResult = await client.query(
        'SELECT * FROM projects WHERE id = $1',
        [id]
    );

    if (existingResult.rows.length === 0) {
      await client.query('ROLLBACK');

      return res.status(404).json({
        message: 'Проєкт не знайдено'
      });
    }

    const existingProject = existingResult.rows[0];

    const projectYear = year ?? existingProject.year;

    if (
        !Number.isInteger(Number(projectYear)) ||
        Number(projectYear) < 2000 ||
        Number(projectYear) > 2100
    ) {
      await client.query('ROLLBACK');

      return res.status(400).json({
        message: 'Некоректний рік проєкту'
      });
    }

    const categoryResult = await client.query(
        'SELECT id FROM categories WHERE name = $1',
        [category.trim()]
    );

    if (categoryResult.rows.length === 0) {
      await client.query('ROLLBACK');

      return res.status(400).json({
        message: 'Такої категорії немає в базі даних'
      });
    }

    await client.query(
        `
        UPDATE projects
        SET
          title = $1,
          category_id = $2,
          year = $3,
          description = $4,
          short_description = $5,
          image = $6,
          logo = $7,
          url = $8
        WHERE id = $9
      `,
        [
          title.trim(),
          categoryResult.rows[0].id,
          Number(projectYear),
          description ?? existingProject.description,
          shortDescription ?? existingProject.short_description,
          image ?? existingProject.image,
          logo ?? existingProject.logo,
          url ?? existingProject.url,
          id
        ]
    );

    if (technologies !== undefined) {
      await client.query(
          'DELETE FROM project_technologies WHERE project_id = $1',
          [id]
      );

      const technologyNames = [
        ...new Set(
            technologies.map(item => item.trim())
        )
      ];

      for (const name of technologyNames) {
        const technologyResult = await client.query(
            `
            INSERT INTO technologies (name)
            VALUES ($1)
            ON CONFLICT (name)
            DO UPDATE SET name = EXCLUDED.name
            RETURNING id
          `,
            [name]
        );

        await client.query(
            `
            INSERT INTO project_technologies (
              project_id,
              technology_id
            )
            VALUES ($1, $2)
            ON CONFLICT DO NOTHING
          `,
            [id, technologyResult.rows[0].id]
        );
      }
    }

    await client.query('COMMIT');

    const result = await pool.query(
        `
        SELECT
          p.id,
          p.title,
          c.name AS category,
          p.year,
          p.description,
          p.short_description AS "shortDescription",
          p.image,
          p.image_big AS "imageBig",
          p.logo,
          p.url,
          COALESCE(
            ARRAY_AGG(t.name ORDER BY t.name)
              FILTER (WHERE t.name IS NOT NULL),
            ARRAY[]::VARCHAR[]
          ) AS technologies
        FROM projects p
        LEFT JOIN categories c
          ON p.category_id = c.id
        LEFT JOIN project_technologies pt
          ON p.id = pt.project_id
        LEFT JOIN technologies t
          ON pt.technology_id = t.id
        WHERE p.id = $1
        GROUP BY p.id, c.name
      `,
        [id]
    );

    res.json(result.rows[0]);
  } catch (error) {
    await client.query('ROLLBACK');

    console.error('Помилка оновлення проєкту:', error.message);

    res.status(500).json({
      message: 'Не вдалося оновити проєкт'
    });
  } finally {
    client.release();
  }
});

// DELETE: видалити проєкт

app.delete('/api/projects/:id', async (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({
      message: 'Некоректний ID проєкту'
    });
  }

  try {
    const result = await pool.query(
        `
        DELETE FROM projects
        WHERE id = $1
        RETURNING id, title
      `,
        [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: 'Проєкт не знайдено'
      });
    }

    res.status(200).json({
      message: 'Проєкт успішно видалено',
      project: result.rows[0]
    });
  } catch (error) {
    console.error('Помилка видалення проєкту:', error.message);

    res.status(500).json({
      message: 'Не вдалося видалити проєкт'
    });
  }
});


app.listen(PORT, () => {
  console.log(`Backend запущено: http://localhost:${PORT}`);
});
