import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Project from '../../components/Project'
import GlobalScripts from '../../components/GlobalScripts'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Paint | Daniel Zelfo</title>
        <meta name="description" content="A program written in jQuery to allow the user to paint using any color, erase, and choose the size of the pen." />
        <link rel="icon" href="https://danielzelfo.github.io/img/original/favicon.ico" />
      </Head>
      <Header title="Paint" />
      <main>
        <Project name="paint"/>
      </main>
      <Footer />
      <GlobalScripts />
    </div>
  )
}
