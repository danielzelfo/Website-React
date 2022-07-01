import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Project from '../../components/Project'
import GlobalScripts from '../../components/GlobalScripts'

export default function Home() {
  return (
    <div>
      <Head>
        <title>FabFlix | Daniel Zelfo</title>
        <meta name="description" content="FabFlix is a web-based e-commerce system." />
        <link rel="icon" href="https://danielzelfo.github.io/img/original/favicon.ico" />
      </Head>
      <Header title="FabFlix" />
      <main>
        <Project name="FabFlix"/>
      </main>
      <Footer />
      <GlobalScripts />
    </div>
  )
}
