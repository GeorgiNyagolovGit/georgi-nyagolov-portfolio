import type { Project } from '../types/Project'

export const projects: Project[] = [
  {
    title: 'TaskFlow',
    description:
      'A focused task manager with drag-and-drop boards, smart filters and persistent local data. Built around a scalable component architecture.',
    category: 'Frontend',
    technologies: ['React', 'TypeScript', 'SCSS', 'Vite'],
    liveUrl: '#',
    repositoryUrl: '#',
    accent: 'emerald',
    featured: true,
  },
  {
    title: 'MovieScope',
    description:
      'Movie discovery app with search, genre filters, detail pages and a personal watchlist powered by a public REST API.',
    category: 'Frontend',
    technologies: ['React', 'REST API', 'CSS Modules'],
    liveUrl: '#',
    repositoryUrl: '#',
    accent: 'violet',
    featured: true,
  },
  {
    title: 'Spendly',
    description:
      'Personal finance dashboard for tracking expenses, budgets and monthly trends with clear data visualizations.',
    category: 'Full Stack',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: '#',
    repositoryUrl: '#',
    accent: 'orange',
  },
]
