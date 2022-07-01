import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Project from '../../components/Project'
import GlobalScripts from '../../components/GlobalScripts'

export default function Home() {
  return (
    <div>
      <Head>
        <title>MountieBot | Daniel Zelfo</title>
        <meta name="description" content="A discord bot for automating various tasks made with Python and a MySQL server." />
        <link rel="icon" href="https://danielzelfo.github.io/img/original/favicon.ico" />
      </Head>
      <Header title="MountieBot" />
      <main>
        <Project name="mountieBot"/>
      </main>
      <Footer />
      <GlobalScripts />
    </div>
  )
}
