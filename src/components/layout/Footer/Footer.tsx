import { profile } from '../../../data/profile'
import { socials } from '../../../data/socials'
import { Container } from '../Container/Container'
import styles from './Footer.module.scss'

const currentYear = new Date().getFullYear()

export const Footer = () => (
  <footer className={styles.footer}>
    <Container className={styles.inner}>
      <p>Designed &amp; built by {profile.name} <span>•</span> {currentYear}</p>
      <div>
        {socials.map((social) => (
          <a key={social.label} href={social.url} target={social.url.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
            {social.label}
          </a>
        ))}
      </div>
    </Container>
  </footer>
)
