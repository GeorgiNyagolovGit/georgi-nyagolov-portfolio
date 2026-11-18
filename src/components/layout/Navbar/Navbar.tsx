import { useEffect, useState } from 'react'
import { useScroll } from '../../../hooks/useScroll'
import { NAV_ITEMS } from '../../../utils/constants'
import { Container } from '../Container/Container'
import styles from './Navbar.module.css'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const hasScrolled = useScroll()

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <header className={`${styles.header} ${hasScrolled ? styles.scrolled : ''}`}>
      <Container className={styles.navbar}>
        <a className={styles.logo} href="/" aria-label="Back to home page">
          <span className={styles.logoText}>Georgi Nyagolov</span>
        </a>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`} aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <a
              className={window.location.pathname === item.href ? styles.current : ''}
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a className={styles.contactLink} href="/contact">Let&apos;s talk <span>↗</span></a>
          <button
            className={`${styles.menuButton} ${isOpen ? styles.active : ''}`}
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span /><span /><span />
          </button>
        </div>
      </Container>
    </header>
  )
}
