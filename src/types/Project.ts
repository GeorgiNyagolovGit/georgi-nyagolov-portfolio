export type ProjectCategory = 'Frontend' | 'Backend' | 'Full Stack'

export interface Project {
  title: string
  description: string
  category: ProjectCategory
  technologies: string[]
  liveUrl?: string
  repositoryUrl: string
  accent: 'emerald' | 'violet' | 'orange'
  featured?: boolean
}
