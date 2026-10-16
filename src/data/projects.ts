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
]
