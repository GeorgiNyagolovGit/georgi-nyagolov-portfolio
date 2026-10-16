import { useState, type FormEvent } from 'react'
import { profile } from '../../../data/profile'
import { socials } from '../../../data/socials'
import { Container } from '../../layout/Container/Container'
import styles from './Contact.module.scss'

const icons = { github: 'GH', linkedin: 'in', email: '@' }

export const Contact = () => {
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formElement = event.currentTarget
    const form = new FormData(formElement)

    setIsSubmitting(true)
    setStatus('Sending your message...')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: form,
      })

      if (!response.ok) {
        throw new Error('The message could not be sent.')
      }

      formElement.reset()
      setStatus('Thank you! Your message was sent successfully.')
    } catch {
      setStatus('Something went wrong. Please email me directly instead.')
    } finally {
      setIsSubmitting(false)
    }
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
              <input className={styles.honeypot} name="_honey" type="text" tabIndex={-1} autoComplete="off" />
              <input name="_subject" type="hidden" value="New message from your portfolio" />
              <input name="_template" type="hidden" value="table" />
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
              <button className="button button--primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send message'} <span>↗</span>
              </button>
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
