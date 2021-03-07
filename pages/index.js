import Head from 'next/head'
import Card from '../components/Card'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Stats from '../components/Stats'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header></Header>
    <Nav></Nav>
    <Stats></Stats>


      </main>

    </div>
  )
}
