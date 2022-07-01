import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Project from '../../components/Project'
import GlobalScripts from '../../components/GlobalScripts'

export default function Home() {
  return (
    <div>
      <Head>
        <title>MIPS Assembly Sudoku | Daniel Zelfo</title>
        <meta name="description" content="Sudoku game written in MIPS assembly language." />
        <link rel="icon" href="https://danielzelfo.github.io/img/original/favicon.ico" />
      </Head>
      <Header title="MIPS Assembly Sudoku" />
      <main>
        <Project name="mipsSudoku"/>
      </main>
      <Footer />
      <GlobalScripts />
    </div>
  )
}
