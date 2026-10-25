import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import ProjectsView from '@/views/ProjectsView.vue';
import SkillsView from '@/views/SkillsView.vue';
import ExperienceView from '@/views/ExperienceView.vue';
import ContactView from '@/views/ContactView.vue';
import NotFoundView from "@/views/NotFoundView.vue";
import ProjectsDetailView from "@/views/ProjectsDetailView.vue";
import AboutView from "@/views/AboutView.vue";
import ProjectsAdminView from "@/views/ProjectsAdminView.vue";
import BlogView from "@/views/BlogView.vue";
import BlogDetailView from "@/views/BlogDetailView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
  {
    path: '/projects/:id',
    name: 'project-detail',
    component: ProjectsDetailView
  },
  {
    path: '/skills',
    name: 'skills',
    component: SkillsView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/blog/:id',
    name: 'blog-detail',
    component: BlogDetailView
  },
  {
    path: '/experience',
    name: 'experience',
    component: ExperienceView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView
  },
  {
    path: '/admin/projects',
    name: 'projects-admin',
    component: ProjectsAdminView
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;