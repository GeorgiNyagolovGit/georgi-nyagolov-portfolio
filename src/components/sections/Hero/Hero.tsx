import { Container } from '../../layout/Container/Container'
import { profile } from '../../../data/profile'
import styles from './Hero.module.scss'

export const Hero = () => (
  <section className={styles.hero} id="top">
    <Container className={styles.inner}>
      <div className={styles.content}>
        <div className={styles.availability}><i /> {profile.availability}</div>
        <p className={styles.intro}>Hi, I&apos;m {profile.name}</p>
        <h1>I turn ideas into <span>clean digital experiences.</span></h1>
        <p className={styles.summary}>{profile.shortBio}</p>
        <div className={styles.actions}>
          <a className="button button--primary" href="/projects">View my work <span>→</span></a>
          <a className="button button--secondary" href="/contact">Let&apos;s talk</a>
        </div>
        <div className={styles.meta}>
          <span>⌖ {profile.location}</span>
          <span>React · TypeScript · SCSS</span>
        </div>
      </div>

      <div className={styles.visual} aria-hidden="true">
        <div className={styles.index}>GN / 01</div>
        <div className={styles.orbit}><span /></div>
        <div className={styles.codeCard}>
          <div className={styles.dots}><i /><i /><i /><small>profile.ts</small></div>
          <pre><code><em>const</em> georgi = {'{'}{`\n`}  frontend: <b>'React'</b>,{`\n`}  backend: <b>'Spring'</b>,{`\n`}  mindset: <strong>'build → learn'</strong>{`\n`}{'}'}</code></pre>
        </div>
        <div className={styles.badge}><b>02</b><span>Full-stack<br />perspective</span></div>
      </div>
    </Container>
    <a className={styles.scroll} href="/about" aria-label="Open the about page"><span /> Explore</a>
  </section>
)
