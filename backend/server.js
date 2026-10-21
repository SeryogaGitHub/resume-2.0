
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
app.post('/api/projects', (req, res) => {
  const { title, category, year, description, technologies } = req.body;

  if (!title || !category) {
    return res.status(400).json({
      message: 'Назва та категорія обов’язкові'
    });
  }

  const newProject = {
    id: nextId++,
    title,
    category,
    year: year ?? new Date().getFullYear(),
    description: description ?? '',
    shortDescription: req.body.shortDescription ?? '',
    image: req.body.image ?? '',
    logo: req.body.logo ?? '',
    url: req.body.url ?? '#',
    technologies: Array.isArray(technologies) ? technologies : []
  };

  projects.push(newProject);

  res.status(201).json(newProject);
});

// UPDATE: оновити проєкт
app.put('/api/projects/:id', (req, res) => {
  const id = Number(req.params.id);

  const index = projects.findIndex(project => {
    return project.id === id;
  });

  if (index === -1) {
    return res.status(404).json({
      message: 'Проєкт не знайдено'
    });
  }

  const { id: ignoredId, ...updates } = req.body;

  projects[index] = {
    ...projects[index],
    ...updates,
    id
  };

  res.json(projects[index]);
});

// DELETE: видалити проєкт
app.delete('/api/projects/:id', (req, res) => {
  const id = Number(req.params.id);

  const index = projects.findIndex(project => {
    return project.id === id;
  });

  if (index === -1) {
    return res.status(404).json({
      message: 'Проєкт не знайдено'
    });
  }

  projects.splice(index, 1);

  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Backend запущено: http://localhost:${PORT}`);
});
