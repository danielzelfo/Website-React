import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import styles from './ProjectDetail.module.css'
import { ImageSlideshow } from './ImageSlideshow'
import type { Project } from '../data/projects'

// Legacy portfolio data for slideshow/component content
import portfolioData from '../data/portfolio.json'

interface ReadmeEntry {
  repo: string
  content: string
}

interface PortfolioContentEntry {
  type: string
  data: string | string[] | Array<{ url: string; caption: string }>
}

interface PortfolioProject {
  title: string
  content: PortfolioContentEntry[]
}

const portfolio = portfolioData as Record<string, PortfolioProject>

export function ProjectDetail({ project }: { project: Project }) {
  const legacyData = portfolio[project.id]
  const [readmes, setReadmes] = useState<ReadmeEntry[]>([])

  // Load readmes if the legacy data has them
  useEffect(() => {
    if (!legacyData) return
    const readmeEntries = legacyData.content.filter((e) => e.type === 'readmes')
    if (readmeEntries.length === 0) return

    let cancelled = false
    setReadmes([])

    const repos = readmeEntries.flatMap((e) => e.data as string[])

    Promise.all(
      repos.map((repo) =>
        fetch(`https://raw.githubusercontent.com/danielzelfo/${repo}/master/README.md`)
          .then((res) => {
            if (!res.ok) throw new Error('Not found')
            return res.text()
          })
          .then((text): ReadmeEntry => {
            const fixed = text
              .replaceAll('](/', '](')
              .replace(
                /\]\(([^)]+)\)/g,
                (_match: string, url: string) => {
                  try {
                    const resolved = new URL(url, `https://github.com/danielzelfo/${repo}/blob/master/`).href
                    return `](${resolved})`
                  } catch {
                    return `](${url})`
                  }
                }
              )
            return { repo, content: fixed }
          })
          .catch(() => null)
      )
    ).then((results) => {
      if (cancelled) return
      const valid = results.filter((r): r is ReadmeEntry => r !== null)
      setReadmes(valid)
    })

    return () => { cancelled = true }
  }, [legacyData])

  // Get description from legacy data
  const descriptionEntry = legacyData?.content.find((e) => e.type === 'description')
  const description = descriptionEntry?.data as string | undefined

  // Get slideshow images
  const slideshowEntry = legacyData?.content.find((e) => e.type === 'slideshow')
  const images = (slideshowEntry?.data || []) as Array<{ url: string; caption: string }>

  // Get languages
  const languagesEntry = legacyData?.content.find((e) => e.type === 'languages')
  const languages = (languagesEntry?.data || []) as string[]

  // Get buttons (links to GitHub, CodePen, etc.)
  const buttonsEntry = legacyData?.content.find((e) => e.type === 'buttons')
  const buttons = (buttonsEntry?.data || []) as unknown as Array<{ text: string; url: string }>

  return (
    <article className={styles.detail}>
      <header className={styles.header}>
        <h1 className={styles.title}>{project.title}</h1>
      </header>

      <div className={styles.meta}>
        {languages.length > 0 && (
          <div className={styles.technologies}>
            {languages.map((lang) => (
              <span key={lang} className={styles.tag}>{lang}</span>
            ))}
          </div>
        )}
        {buttons.length > 0 && (
          <div className={styles.links}>
            {buttons.map((btn) => (
              <a
                key={btn.url}
                href={btn.url}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                {btn.text} ↗
              </a>
            ))}
          </div>
        )}
        {languages.length === 0 && project.links.length > 0 && (
          <div className={styles.links}>
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                {link.text} ↗
              </a>
            ))}
          </div>
        )}
      </div>

      {project.summary && (
        <p className={styles.summary}>{project.summary}</p>
      )}

      {description && (
        <div className={styles.description}>
          {description.split('\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      )}

      {images.length > 0 && (
        <ImageSlideshow images={images} alt={project.title} />
      )}

      {readmes.length > 0 && (
        <div className={styles.readmes}>
          {readmes.map((readme) => (
            <div key={readme.repo} className={styles.readme}>
              <div className={styles.readmeHeader}>
                <span>{readme.repo}</span>
                <a
                  href={`https://github.com/danielzelfo/${readme.repo}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub ↗
                </a>
              </div>
              <div className={styles.readmeContent}>
                <ReactMarkdown>{readme.content}</ReactMarkdown>
              </div>
            </div>
          ))}
        </div>
      )}
    </article>
  )
}
