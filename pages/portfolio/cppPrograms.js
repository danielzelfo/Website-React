import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Project from '../../components/Project'
import GlobalScripts from '../../components/GlobalScripts'

export default function Home() {
  return (
    <div>
      <Head>
        <title>C++ Programs | Daniel Zelfo</title>
        <meta name="description" content="A collection of C++ programs, including data structures and algorithms." />
        <link rel="icon" href="https://danielzelfo.github.io/img/original/favicon.ico" />
      </Head>
      <Header title="C++ Programs" />
      <main>
        <Project name="cppPrograms"/>
      </main>
      <Footer />
      <GlobalScripts />
    </div>
  )
}
