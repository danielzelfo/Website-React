import type { ReactNode } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import styles from './Layout.module.css'

export function Layout({ children }: { children: ReactNode }) {
  const routerState = useRouterState()
  const currentPath = routerState.location.pathname

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.logo}>
            daniel zelfo
          </Link>
          <div className={styles.links}>
            <Link
              to="/"
              className={currentPath === '/' ? styles.activeLink : styles.link}
            >
              home
            </Link>
            <Link
              to="/work"
              className={currentPath.startsWith('/work') ? styles.activeLink : styles.link}
            >
              work
            </Link>
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Daniel Zelfo</p>
      </footer>
    </div>
  )
}
