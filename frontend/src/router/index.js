import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import PortfolioView from '@/views/PortfolioView.vue';
import SkillsView from '@/views/SkillsView.vue';
import ExperienceView from '@/views/ExperienceView.vue';
import ContactView from '@/views/ContactView.vue';
import NotFoundView from "@/views/NotFoundView.vue";
import ProjectDetailView from "@/views/ProjectDetailView.vue";
import AboutView from "@/views/AboutView.vue";
import ProjectsAdminView from "@/views/ProjectsAdminView.vue";
import BlogView from "@/views/BlogView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioView
  },
  {
    path: '/portfolio/:id',
    name: 'project-detail',
    component: ProjectDetailView
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