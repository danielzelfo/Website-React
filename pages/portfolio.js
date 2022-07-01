import Head from 'next/head'
import styles from '../styles/Portfolio.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Cell from '../components/Cell'
import GlobalScripts from '../components/GlobalScripts'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio | Daniel Zelfo</title>
        <meta name="description" content="Daniel Zelfo" />
        <link rel="icon" href="https://danielzelfo.github.io/img/original/favicon.ico" />
      </Head>
      <Header title="My Portfolio" />
      <main className={styles.main}>
        <div className="section">
          <div className="row">
            <Cell name="FabFlix" />
            <Cell name="spidey" />
            <Cell name="astra" />
            <Cell name="mipsSudoku" />
          </div>
          <div className="row">
            <Cell name="cppPrograms" />
            <Cell name="auctionServer" />
            <Cell name="sortingAnimations" />
            <Cell name="dynamite" />
          </div>
          <div className="row">
            <Cell name="shopSupreme" />
            <Cell name="todoList" />
            <Cell name="mountieBot" />
            <Cell name="wearableWeather" />
          </div>
          <div className="row">
            <Cell name="scheduler" />
            <Cell name="neighborBank" />
            <Cell name="opbot" />
            <Cell name="encrytion" />
          </div>
          <div className="row">
            <Cell name="paint" />
            <Cell dummy />
            <Cell dummy />
            <Cell dummy />
          </div>
        </div>
      </main>
      <Footer />
      <GlobalScripts />
    </div>
  )
}
