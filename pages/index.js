import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Cell from '../components/Cell'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daniel Zelfo</title>
        <meta name="description" content="Daniel Zelfo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Daniel Zelfo" />
      <main className={styles.main}>
        <div className={`section ${styles.aboutme}`}>
          <div>
            <h2>Software Engineer</h2>
            <p>Connect with me</p>
            <div className={styles.socialMediaBlock}>
              <a href="https://www.linkedin.com/in/daniel-zelfo/" target="_blank" rel="noreferrer"><img alt="LinkedIn Logo" src="https://danielzelfo.github.io/img/original/linkedin.svg" /></a>
              <a id="githubLink" href="https://github.com/danielzelfo" target="_blank" rel="noreferrer"><img alt="GitHub Logo" src="https://danielzelfo.github.io/img/original/github.svg" /></a>
            </div>
            <a href="mailto:me@danielzelfo.com?Subject=Website%20Contact%20Email" >me@danielzelfo.com</a>
          </div>
          <div>
            <div>
              <h2>Interests</h2>
              <ol>
                <li><p>Full Stack Web Development</p></li>
                <li><p>Information Retreival / Web Crawlers</p></li>
                <li><p>Machine Learning / Data Mining</p></li>
                <li><p>Operating Systems</p></li>
                <li><p>Computer Networks</p></li>
              </ol>
            </div>
            <div className={styles.education}>
              <h2>Education</h2>
              <ol>
                <li><p><span>BS in Computer Science — Algorithms, 2022</span><span>University of California, Irvine</span></p></li>
                <li><p><span>AS in Mathematics, 2020</span><span>Mt. San Antonio College</span></p></li>
              </ol>
            </div>
          </div>
        </div>
        <div className="section" style={{textAlign: "center"}}>
          <h1>My Portfolio</h1>

          <div className="row">
            <Cell name="FabFlix" />
            <Cell name="spidey" />
            <Cell name="astra" />
            <Cell name="mipsSudoku" />
          </div>

          <Link href="portfolio"><div className="btn black more" style={{ marginTop: "20px", textAlign: "center" }}><span>Show More</span></div></Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
