import Head from 'next/head'
import styles from '../styles/Portfolio.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Cell from '../components/Cell'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daniel Zelfo | Portfolio</title>
        <meta name="description" content="Daniel Zelfo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Daniel Zelfo" />
      <main className={styles.main}>
        <div class="section">
          <div class="row">
            <Cell name="FabFlix" />
            <Cell name="spidey" />
            <Cell name="astra" />
            <Cell name="mipsSudoku" />
          </div>
          <div class="row">
            <Cell name="cppPrograms" />
            <Cell name="auctionServer" />
            <Cell name="sortingAnimations" />
            <Cell name="dynamite" />
          </div>
          <div class="row">
            <Cell name="shopSupreme" />
            <Cell name="todoList" />
            <Cell name="mountieBot" />
            <Cell name="wearableWeather" />
          </div>
          <div class="row">
            <Cell name="scheduler" />
            <Cell name="neighborBank" />
            <Cell name="opbot" />
            <Cell name="encrytion" />
          </div>
          <div class="row">
            <Cell name="paint" />
            <Cell dummy />
            <Cell dummy />
            <Cell dummy />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
