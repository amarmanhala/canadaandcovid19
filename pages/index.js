import React, { useState, createContext } from "react";
import Head from "next/head";
import Card from "../components/Card";
import Header from "../components/Header";
import Stats from "./Stats";
//import { MyContext } from "../src/state";
//import { MyProvider } from "../src/state";

//First we will make a new context
//const MyContext = React.createContext();
const MyContext = createContext();

function MyProvider(props) {
  const [cases, setCases] = useState(props.photos);
  return (
    <MyContext.Provider value={{ cases }}>{props.children}</MyContext.Provider>
  );
}
function Home(props) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MyProvider>
        <main>
          <MyContext.Consumer>
            {(context) => (
           <>
              <p style={{ color: "white" }}>I'm {context.cases}</p>
              <button>Update</button>
           </>
            )}
          </MyContext.Consumer>
          {props.photos.summary.map((post) => {
            return (
              <div>
                <h1 style={{ color: "white" }}>{post.cumulative_cases}</h1>
              </div>
            );
          })}
          <Header></Header>
          <Stats></Stats>
        </main>
      </MyProvider>
    </div>
  );
}
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://api.opencovid.ca/summary?loc=canada");
  const data = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      photos: data,
    },
  };
}

export default Home;
