
import express from 'express';
import cors from 'cors';
import { projects } from './data/projects.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

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

app.listen(PORT, () => {
  console.log(`API запущено: http://localhost:${PORT}`);
});
