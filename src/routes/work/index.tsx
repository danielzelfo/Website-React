import { createFileRoute, Link } from '@tanstack/react-router'
import { featuredProjects, archiveProjects } from '../../data/projects'
import styles from './index.module.css'

export const Route = createFileRoute('/work/')({
  component: WorkPage,
})

function WorkPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Work</h1>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Featured</h2>
        <div className={styles.featured}>
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              to="/work/$projectId"
              params={{ projectId: project.id }}
              className={styles.featuredCard}
            >
              {project.image && (
                <div className={styles.cardImage}>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
              )}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardSummary}>{project.summary}</p>
                <div className={styles.cardTech}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.tag}>{tech}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Archive</h2>
        <div className={styles.archive}>
          {archiveProjects.map((project) => (
            <Link
              key={project.id}
              to="/work/$projectId"
              params={{ projectId: project.id }}
              className={styles.archiveRow}
            >
              <span className={styles.archiveTitle}>{project.title}</span>
              <span className={styles.archiveTech}>
                {project.technologies.slice(0, 3).join(', ')}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
