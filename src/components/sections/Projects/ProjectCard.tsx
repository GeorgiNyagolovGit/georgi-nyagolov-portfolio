import type { Project } from '../../../types/Project'
import { isPlaceholderLink } from '../../../utils/helpers'
import styles from './Projects.module.scss'

interface ProjectCardProps { project: Project; index: number }

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const safeLinkProps = (url: string) => isPlaceholderLink(url)
    ? { title: 'Replace this placeholder link in src/data/projects.ts' }
    : { target: '_blank', rel: 'noreferrer' }

  return (
    <article className={`card ${styles.projectCard}`}>
      <div className={`${styles.preview} ${styles[project.accent]}`}>
        <span className={styles.projectNumber}>0{index + 1}</span>
        <div className={styles.mockup}>
          <div className={styles.mockupBar}><i /><i /><i /></div>
          <div className={styles.mockupBody}><b /><span /><span /><span /></div>
        </div>
        {project.featured && <span className={styles.featured}>Featured</span>}
      </div>
      <div className={styles.body}>
        <div className={styles.category}>{project.category}</div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul>{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
        <div className={styles.links}>
          {project.liveUrl && <a href={project.liveUrl} {...safeLinkProps(project.liveUrl)}>Live demo ↗</a>}
          <a href={project.repositoryUrl} {...safeLinkProps(project.repositoryUrl)}>Source code ↗</a>
        </div>
      </div>
    </article>
  )
}
