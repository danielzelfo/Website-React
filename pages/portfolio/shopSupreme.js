import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Project from '../../components/Project'
import GlobalScripts from '../../components/GlobalScripts'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ShopSupreme | Daniel Zelfo</title>
        <meta name="description" content="ShopSupreme is a chrome extension checkout bot for supremenewyork.com." />
        <link rel="icon" href="https://danielzelfo.github.io/img/original/favicon.ico" />
      </Head>
      <Header title="ShopSupreme" />
      <main>
        <Project name="shopSupreme"/>
      </main>
      <Footer />
      <GlobalScripts />
    </div>
  )
}
