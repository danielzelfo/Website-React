import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Project from '../../components/Project'
import GlobalScripts from '../../components/GlobalScripts'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sorting Animations | Daniel Zelfo</title>
        <meta name="description" content="A JavaFX program that can be used to visualize sorting animations." />
        <link rel="icon" href="https://danielzelfo.github.io/img/original/favicon.ico" />
      </Head>
      <Header title="Sorting Animations" />
      <main>
        <Project name="sortingAnimations"/>
      </main>
      <Footer />
      <GlobalScripts />
    </div>
  )
}
