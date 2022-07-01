import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Project from '../../components/Project'
import GlobalScripts from '../../components/GlobalScripts'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Encryption Using Matrices | Daniel Zelfo</title>
        <meta name="description" content="A program written in jQuery to encrypt messages using a random 2x2 matrix." />
        <link rel="icon" href="https://danielzelfo.github.io/img/original/favicon.ico" />
      </Head>
      <Header title="Encryption Using Matrices" />
      <main>
        <Project name="encrytion"/>
      </main>
      <Footer />
      <GlobalScripts />
    </div>
  )
}
