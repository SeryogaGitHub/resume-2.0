
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const projects = [
  {
    id: 1,
    title: 'E-commerce',
    year: 2026,
    category: 'E-commerce',
    description: 'Сучасний інтернет-магазин з адаптивним інтерфейсом.',
    technologies: [
      'Vue.js',
      'SCSS',
      'Node.js'
    ],
    image: '/resume-2.0/src/assets/image/section/projects-section/projects-section-1.jpg',
    url: '#'
  },

  {
    id: 2,
    title: 'Corporate Website',
    year: 2026,
    category: 'Corporate',
    description: 'Корпоративний сайт із сучасною структурою та анімаціями.',
    technologies: [
      'JavaScript',
      'SCSS',
      'Vite'
    ],
    image: '/resume-2.0/src/assets/image/section/projects-section/projects-section-2.jpg',
    url: '#'
  },

  {
    id: 3,
    title: 'Web Application',
    year: 2026,
    category: 'Web Application',
    description: 'Інтерактивний вебзастосунок з роботою через API.',
    technologies: [
      'Vue.js',
      'REST API',
      'MySQL'
    ],
    image: '/resume-2.0/src/assets/image/section/projects-section/projects-section-3.jpg',
    url: '#'
  },

  {
    id: 1,
    title: 'E-commerce',
    year: 2026,
    category: 'E-commerce',
    description: 'Сучасний інтернет-магазин з адаптивним інтерфейсом.',
    technologies: [
      'Vue.js',
      'SCSS',
      'Node.js'
    ],
    image: '/resume-2.0/src/assets/image/section/projects-section/projects-section-4.jpg',
    url: '#'
  },

  {
    id: 2,
    title: 'Corporate Website',
    year: 2026,
    category: 'Corporate',
    description: 'Корпоративний сайт із сучасною структурою та анімаціями.',
    technologies: [
      'JavaScript',
      'SCSS',
      'Vite'
    ],
    image: '/resume-2.0/src/assets/image/section/projects-section/projects-section-1.jpg',
    url: '#'
  },

  {
    id: 3,
    title: 'Web Application',
    year: 2026,
    category: 'Web Application',
    description: 'Інтерактивний вебзастосунок з роботою через API.',
    technologies: [
      'Vue.js',
      'REST API',
      'MySQL'
    ],
    image: '/resume-2.0/src/assets/image/section/projects-section/projects-section-2.jpg',
    url: '#'
  }
];

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
