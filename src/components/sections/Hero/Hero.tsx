import { Container } from '../../layout/Container/Container'
import { profile } from '../../../data/profile'
import styles from './Hero.module.css'

export const Hero = () => (
  <section className={styles.hero} id="top">
    <Container className={styles.inner}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Web developer · Varna, Bulgaria</p>
        <p className={styles.intro}>Hi, I&apos;m {profile.name}.</p>
        <h1>I build clear, useful web experiences.</h1>
        <p className={styles.summary}>{profile.shortBio}</p>
        <div className={styles.actions}>
          <a className="button button--primary" href="/projects">View my work</a>
          <a className="button button--secondary" href="/contact">Get in touch <span>↗</span></a>
        </div>
      </div>

      <div className={styles.visual}>
        <p className={styles.availability}><i /> {profile.availability}</p>
        <dl>
          <div><dt>Focus</dt><dd>Accessible interfaces</dd></div>
          <div><dt>Stack</dt><dd>React · TypeScript</dd></div>
          <div><dt>Also</dt><dd>Java · Spring Boot</dd></div>
        </dl>
      </div>
    </Container>
  </section>
)
