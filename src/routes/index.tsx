import { createFileRoute, Link } from '@tanstack/react-router'
import styles from './index.module.css'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.name}>Daniel Zelfo</h1>
        <p className={styles.title}>Software Engineer</p>
        <p className={styles.bio}>
          I build scalable data systems, ML infrastructure, and cloud-native
          platforms. My interests span distributed processing, search and
          information retrieval, networking, operating systems, and systems
          performance.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Focus Areas</h2>
        <ul className={styles.interests}>
          <li>Distributed Data Processing & Batch Systems</li>
          <li>Machine Learning (Training, Scoring, Infrastructure)</li>
          <li>Information Retrieval & Data Pipelines</li>
          <li>Networking</li>
          <li>Operating Systems & Cross-Platform Software</li>
          <li>CI/CD, Build Systems & Container Deployment</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <div className={styles.education}>
          <div className={styles.eduItem}>
            <span className={styles.eduDegree}>BS Computer Science</span>
            <span className={styles.eduSchool}>University of California, Irvine</span>
          </div>
          <div className={styles.eduItem}>
            <span className={styles.eduDegree}>AS Mathematics</span>
            <span className={styles.eduSchool}>Mt. San Antonio College</span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Connect</h2>
        <div className={styles.connect}>
          <a href="https://github.com/danielzelfo" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/daniel-zelfo/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:me@danielzelfo.com">
            Email
          </a>
          <Link to="/work">
            View Work →
          </Link>
        </div>
      </section>
    </div>
  )
}
