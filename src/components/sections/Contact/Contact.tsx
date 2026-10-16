import { useState, type FormEvent } from 'react'
import { profile } from '../../../data/profile'
import { socials } from '../../../data/socials'
import { Container } from '../../layout/Container/Container'
import styles from './Contact.module.scss'

const icons = { github: 'GH', linkedin: 'in', email: '@' }

export const Contact = () => {
  const [status, setStatus] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? '')
    const email = String(form.get('email') ?? '')
    const subject = String(form.get('subject') ?? '')
    const message = String(form.get('message') ?? '')
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`

    setStatus('Your email app is opening with the message ready to send.')
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className={`section ${styles.contact}`} id="contact">
      <Container>
        <div className={styles.box}>
          <div className="section-heading section-heading--centered">
            <span>05 / Contact</span>
            <h2>Let’s build something great together.</h2>
            <p>I’m currently looking for my first professional opportunity. Send me a message and I’ll get back to you as soon as possible.</p>
          </div>

          <div className={styles.content}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.fieldRow}>
                <label>
                  <span>Name</span>
                  <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
                </label>
                <label>
                  <span>Email</span>
                  <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
                </label>
              </div>
              <label>
                <span>Subject</span>
                <input name="subject" type="text" placeholder="What would you like to discuss?" required />
              </label>
              <label>
                <span>Message</span>
                <textarea name="message" rows={6} placeholder="Tell me a little about your idea or opportunity..." required />
              </label>
              <button className="button button--primary" type="submit">Send message <span>↗</span></button>
              <p className={styles.status} aria-live="polite">{status}</p>
            </form>

            <aside className={styles.details}>
              <span>Prefer email?</span>
              <a className={styles.email} href={`mailto:${profile.email}`}>{profile.email}</a>
              <div className={styles.socials}>
                {socials.filter((social) => social.icon !== 'email').map((social) => (
                  <a key={social.label} href={social.url} target="_blank" rel="noreferrer" aria-label={social.label}>
                    <span>{icons[social.icon]}</span>{social.label}
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  )
}
