import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Project from '../../components/Project'
import GlobalScripts from '../../components/GlobalScripts'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dynamite | Daniel Zelfo</title>
        <meta name="description" content="Dynamite is a tool for creating interactive webpages for learning any subject." />
        <link rel="icon" href="https://danielzelfo.github.io/img/original/favicon.ico" />
      </Head>
      <Header title="Dynamite" />
      <main>
        <Project name="dynamite"/>
      </main>
      <Footer />
      <GlobalScripts />
    </div>
  )
}
