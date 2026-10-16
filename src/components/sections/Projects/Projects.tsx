import { useState } from 'react'
import { projects } from '../../../data/projects'
import type { ProjectCategory } from '../../../types/Project'
import { Container } from '../../layout/Container/Container'
import { ProjectCard } from './ProjectCard'
import styles from './Projects.module.scss'

type Filter = 'All' | ProjectCategory
const filters: Filter[] = ['All', 'Frontend', 'Full Stack']

export const Projects = () => {
  const [filter, setFilter] = useState<Filter>('All')
  const visibleProjects = filter === 'All' ? projects : projects.filter((project) => project.category === filter)

  return (
    <section className="section" id="projects">
      <Container>
        <div className={styles.header}>
          <div className="section-heading">
            <span>03 / Work</span>
            <h2>Selected projects.</h2>
            <p>Projects where I explored new ideas, solved real problems and sharpened my craft.</p>
          </div>
          <div className={styles.filters} aria-label="Filter projects">
            {filters.map((item) => <button className={filter === item ? styles.active : ''} key={item} onClick={() => setFilter(item)}>{item}</button>)}
          </div>
        </div>
        <div className={styles.grid}>
          {visibleProjects.map((project) => <ProjectCard key={project.title} project={project} index={projects.indexOf(project)} />)}
        </div>
        <p className={styles.note}>More experiments and code on <a href="https://github.com/GeorgiNyagolovGit" target="_blank" rel="noreferrer">GitHub ↗</a></p>
      </Container>
    </section>
  )
}
