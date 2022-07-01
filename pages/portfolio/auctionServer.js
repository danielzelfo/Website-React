import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Project from '../../components/Project'
import GlobalScripts from '../../components/GlobalScripts'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Auction Server | Daniel Zelfo</title>
        <meta name="description" content="An auction server written in C using sockets and the POSIX thread library." />
        <link rel="icon" href="https://danielzelfo.github.io/img/original/favicon.ico" />
      </Head>
      <Header title="Auction Server" />
      <main>
        <Project name="auctionServer"/>
      </main>
      <Footer />
      <GlobalScripts />
    </div>
  )
}
