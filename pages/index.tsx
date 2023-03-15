import React from "react";
import Head from 'next/head'
import styles from "../styles/Home.module.css";
import About from "../components/About";
import Chronos from "../components/Chronos";

function Home() {
  return (
    <>
    <Head>
      <title>Joshua James | Home</title>
      <meta name="home" content="home"/>
    </Head>
    <div className={styles.homeContainer}>
      <About />
      <div className={styles.homeBottom}>
        <Chronos />
      </div>
    </div>
    </>
  );
}

export default Home;