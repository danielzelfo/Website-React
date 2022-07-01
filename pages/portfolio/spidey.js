import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Project from '../../components/Project'
import GlobalScripts from '../../components/GlobalScripts'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Spidey | Daniel Zelfo</title>
        <meta name="description" content="Spidey is a fully functional search engine able to handle hundreds of thousands of documents or web pages." />
        <link rel="icon" href="https://danielzelfo.github.io/img/original/favicon.ico" />
      </Head>
      <Header title="Spidey" />
      <main>
        <Project name="spidey"/>
      </main>
      <Footer />
      <GlobalScripts />
    </div>
  )
}
