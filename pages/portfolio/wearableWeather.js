import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Project from '../../components/Project'
import GlobalScripts from '../../components/GlobalScripts'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wearable Weather | Daniel Zelfo</title>
        <meta name="description" content="Wearable Weather is a project that allows a IoT gadget to send data to a Flask REST API to update the frontend on a website." />
        <link rel="icon" href="https://danielzelfo.github.io/img/original/favicon.ico" />
      </Head>
      <Header title="Wearable Weather" />
      <main>
        <Project name="wearableWeather"/>
      </main>
      <Footer />
      <GlobalScripts />
    </div>
  )
}
