import type { Project } from '../types/Project'

export const projects: Project[] = [
  {
    title: 'E-Commerce Backend API',
    description:
      'A deployment-ready REST API for an online store with JWT authentication, product catalog, shopping carts, order management, mock payments and role-based administration.',
    category: 'Backend',
    technologies: ['Java 17', 'Spring Boot', 'PostgreSQL', 'Gradle', 'Docker'],
    repositoryUrl: 'https://github.com/GeorgiNyagolovGit/ecommerce-backend',
    accent: 'emerald',
    featured: true,
  },
  {
    title: 'Marketplace Frontend',
    description:
      'A responsive e-commerce storefront with product discovery, authentication, persistent cart, checkout, order history and a dedicated admin workspace.',
    category: 'Frontend',
    technologies: ['Angular 19', 'TypeScript', 'RxJS', 'SCSS'],
    repositoryUrl: 'https://github.com/GeorgiNyagolovGit/marketplace-frontend',
    accent: 'violet',
    featured: true,
  },
  {
    title: 'Job Board Platform',
    description:
      'A full-stack job marketplace where candidates can discover roles, save favourites and apply, while employers manage companies, job listings and applications. Includes role-based administration and Google authentication.',
    category: 'Full Stack',
    technologies: ['Laravel 13', 'PHP 8.3', 'Vue 3', 'Inertia.js', 'MySQL'],
    repositoryUrl: 'https://github.com/GeorgiNyagolovGit/job-app-laravel-react',
    accent: 'orange',
    featured: true,
  },
]
