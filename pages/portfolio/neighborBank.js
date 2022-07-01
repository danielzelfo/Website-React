import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Project from '../../components/Project'
import GlobalScripts from '../../components/GlobalScripts'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Friendly Neighborhood Bank | Daniel Zelfo</title>
        <meta name="description" content="A banking application made with Java." />
        <link rel="icon" href="https://danielzelfo.github.io/img/original/favicon.ico" />
      </Head>
      <Header title="Friendly Neighborhood Bank" />
      <main>
        <Project name="neighborBank"/>
      </main>
      <Footer />
      <GlobalScripts />
    </div>
  )
}
