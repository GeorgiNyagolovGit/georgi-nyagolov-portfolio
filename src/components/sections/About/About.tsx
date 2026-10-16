import { profile } from '../../../data/profile'
import { Container } from '../../layout/Container/Container'
import styles from './About.module.scss'

const facts = [
  ['01', 'Quality over shortcuts'],
  ['02', 'Curiosity every day'],
  ['03', 'Team-first mindset'],
]

export const About = () => (
  <section className="section" id="about">
    <Container>
      <div className="section-heading">
        <span>01 / About</span>
        <h2>A developer who cares about the details.</h2>
      </div>
      <div className={styles.grid}>
        <div className={styles.portrait}>
          <div className={styles.avatar}>GN</div>
          <span className={styles.label}>Based in Bulgaria<br />Working worldwide</span>
        </div>
        <div className={styles.content}>
          {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className={styles.facts}>
            {facts.map(([number, text]) => (
              <div key={number}><span>{number}</span><strong>{text}</strong></div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  </section>
)
