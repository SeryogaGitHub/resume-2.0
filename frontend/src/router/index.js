import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import ProjectsView from '@/views/ProjectsView.vue';
import SkillsView from '@/views/SkillsView.vue';
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
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/admin/projects',
    name: 'projects-admin',
    component: ProjectsAdminView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, left: 0 };
  }
});

router.afterEach((to) => {
  const robots = to.meta.robots || 'index, follow';

  let metaRobots = document.querySelector(
      'meta[name="robots"]'
  );

  if (!metaRobots) {
    metaRobots = document.createElement('meta');
    metaRobots.setAttribute('name', 'robots');

    document.head.appendChild(metaRobots);
  }

  metaRobots.setAttribute('content', robots);
});

export default router;