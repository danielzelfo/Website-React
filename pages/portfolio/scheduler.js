import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Project from '../../components/Project'
import GlobalScripts from '../../components/GlobalScripts'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Employee Scheduler Program | Daniel Zelfo</title>
        <meta name="description" content="A program that allows employers to generate a work schedule for their employees using their availabilities." />
        <link rel="icon" href="https://danielzelfo.github.io/img/original/favicon.ico" />
      </Head>
      <Header title="Employee Scheduler Program" />
      <main>
        <Project name="scheduler"/>
      </main>
      <Footer />
      <GlobalScripts />
    </div>
  )
}
