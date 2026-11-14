import HomeView from '@/views/HomeView.vue';
import ProjectsView from '@/views/ProjectsView.vue';
import SkillsView from '@/views/SkillsView.vue';
import ContactView from '@/views/ContactView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import ProjectsDetailView from '@/views/ProjectsDetailView.vue';
import AboutView from '@/views/AboutView.vue';
import ProjectsAdminView from '@/views/ProjectsAdminView.vue';
import BlogView from '@/views/BlogView.vue';
import BlogDetailView from '@/views/BlogDetailView.vue';

const localePrefix = '/:locale(en|pl|de|fr)?';

export const routes = [
  {
    path: `${localePrefix}`,
    name: 'home',
    component: HomeView
  },
  {
    path: `${localePrefix}/projects`,
    name: 'projects',
    component: ProjectsView
  },
  {
    path: `${localePrefix}/projects/:id`,
    name: 'project-detail',
    component: ProjectsDetailView
  },
  {
    path: `${localePrefix}/skills`,
    name: 'skills',
    component: SkillsView
  },
  {
    path: `${localePrefix}/about`,
    name: 'about',
    component: AboutView
  },
  {
    path: `${localePrefix}/blog`,
    name: 'blog',
    component: BlogView
  },
  {
    path: `${localePrefix}/blog/:id`,
    name: 'blog-detail',
    component: BlogDetailView
  },
  {
    path: `${localePrefix}/contact`,
    name: 'contact',
    component: ContactView
  },
  {
    path: '/admin/projects',
    name: 'projects-admin',
    component: ProjectsAdminView,
    meta: {
      robots: 'noindex, nofollow'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView,
    meta: {
      robots: 'noindex, follow'
    }
  }
];