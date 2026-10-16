import { skillGroups } from '../../../data/skills'
import { Container } from '../../layout/Container/Container'
import styles from './Skills.module.scss'

export const Skills = () => (
  <section className="section section--alt" id="skills">
    <Container>
      <div className="section-heading">
        <span>02 / Skills</span>
        <h2>The tools I use to bring ideas to life.</h2>
        <p>A practical toolkit built through hands-on projects and constant iteration.</p>
      </div>
      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <article key={group.title} className={`card ${styles.skillCard}`}>
            <div className={styles.cardHeading}><span>{group.icon}</span><h3>{group.title}</h3></div>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill.name}>
                  <h4>{skill.name}</h4>
                  <p>{skill.description}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Container>
  </section>
)
