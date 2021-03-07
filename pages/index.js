import Head from 'next/head'
import Card from '../components/Card'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Stats from './Stats'

function Home(props) {
  return (
    <div>

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      {props.photos.summary.map((post) => {
        return (
          <div>HELLO
          <h1 style={{ color: 'white' }}>{post.cumulative_cases}</h1>
        </div>
        )
     
    })}
        <Header></Header>
    <Nav></Nav>
    <Stats></Stats>


      </main>

    </div>
  )
}
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://api.opencovid.ca/summary?loc=canada')
  const data = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      photos: data
    },
  }
}

export default Home;