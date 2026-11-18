import { profile } from '../../../data/profile'
import { socials } from '../../../data/socials'
import { Container } from '../Container/Container'
import styles from './Footer.module.css'

const currentYear = new Date().getFullYear()

export const Footer = () => (
  <footer className={styles.footer}>
    <Container className={styles.inner}>
      <div className={styles.signoff}>
        <span>Have a project or opportunity?</span>
        <a href={`mailto:${profile.email}`}>Let&apos;s make something useful. ↗</a>
      </div>
      <div>
        {socials.map((social) => (
          <a key={social.label} href={social.url} target={social.url.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
            {social.label}
          </a>
        ))}
      </div>
      <p>Designed &amp; built by {profile.name} <span>•</span> {currentYear}</p>
    </Container>
  </footer>
)
