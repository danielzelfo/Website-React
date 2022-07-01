import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Project from '../../components/Project'
import GlobalScripts from '../../components/GlobalScripts'

export default function Home() {
  return (
    <div>
      <Head>
        <title>oPBoT | Daniel Zelfo</title>
        <meta name="description" content="A discord bot made with Java for discord server moderation and voice channel commands." />
        <link rel="icon" href="https://danielzelfo.github.io/img/original/favicon.ico" />
      </Head>
      <Header title="oPBoT" />
      <main>
        <Project name="opbot"/>
      </main>
      <Footer />
      <GlobalScripts />
    </div>
  )
}
