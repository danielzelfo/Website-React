import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Project from '../../components/Project'
import GlobalScripts from '../../components/GlobalScripts'

export default function Home() {
  return (
    <div>
      <Head>
        <title>AstraMonitor / AstraBot | Daniel Zelfo</title>
        <meta name="description" content="Astra is bot that notifies users on discord when a product restocks online." />
        <link rel="icon" href="https://danielzelfo.github.io/img/original/favicon.ico" />
      </Head>
      <Header title="AstraMonitor / AstraBot" />
      <main>
        <Project name="astra"/>
      </main>
      <Footer />
      <GlobalScripts />
    </div>
  )
}
