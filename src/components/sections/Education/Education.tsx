import { Container } from '../../layout/Container/Container'
import styles from './Education.module.scss'

const timeline = [
  {
    period: 'BACKEND ACADEMY',
    title: 'Java & Spring Boot',
    place: 'Sirma Backend Academy',
    description: 'Backend development with Java and Spring Boot, including REST APIs, databases and structured application architecture.',
  },
]

export const Education = () => (
  <section className="section section--alt" id="education">
    <Container>
      <div className="section-heading">
        <span>04 / Journey</span>
        <h2>Learning by building.</h2>
        <p>A snapshot of my education, practical training and continued development.</p>
      </div>
      <div className={styles.timeline}>
        {timeline.map((item, index) => (
          <article key={item.title}>
            <div className={styles.marker}><span>{index + 1}</span></div>
            <time>{item.period}</time>
            <div>
              <h3>{item.title}</h3>
              <h4>{item.place}</h4>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </Container>
  </section>
)
