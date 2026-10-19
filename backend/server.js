
import express from 'express';
import cors from 'cors';
import { projects as initialProjects } from './data/projects.js';

const app = express();
const PORT = 3000;

// Тимчасове сховище в пам'яті
let projects = [...initialProjects];
let nextId = Math.max(0, ...projects.map(project => project.id)) + 1;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Backend працює!' });
});

// READ: усі проєкти
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// READ: один проєкт
app.get('/api/projects/:id', (req, res) => {
  const project = projects.find(item => {
    return item.id === Number(req.params.id);
  });

  if (!project) {
    return res.status(404).json({
      message: 'Проєкт не знайдено'
    });
  }

  res.json(project);
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
