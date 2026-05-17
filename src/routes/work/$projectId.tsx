import { createFileRoute, Link } from '@tanstack/react-router'
import { featuredProjects, archiveProjects } from '../../data/projects'
import { ProjectDetail } from '../../components/ProjectDetail'
import styles from './$projectId.module.css'

export const Route = createFileRoute('/work/$projectId')({
  component: ProjectPage,
})

function ProjectPage() {
  const { projectId } = Route.useParams()
  const allProjects = [...featuredProjects, ...archiveProjects]
  const project = allProjects.find((p) => p.id === projectId)

  if (!project) {
    return (
      <div className={styles.notFound}>
        <p>Project not found.</p>
        <Link to="/work">← Back to work</Link>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <Link to="/work" className={styles.back}>← Back</Link>
      <ProjectDetail project={project} />
    </div>
  )
}
