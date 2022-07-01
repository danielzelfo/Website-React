import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Project from '../../components/Project'
import GlobalScripts from '../../components/GlobalScripts'

export default function Home() {
  return (
    <div>
      <Head>
        <title>To-do List | Daniel Zelfo</title>
        <meta name="description" content="A todo list made using CSS and jQuery." />
        <link rel="icon" href="https://danielzelfo.github.io/img/original/favicon.ico" />
      </Head>
      <Header title="To-do List" />
      <main>
        <Project name="todoList"/>
      </main>
      <Footer />
      <GlobalScripts />
    </div>
  )
}
