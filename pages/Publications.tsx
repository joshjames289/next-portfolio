import React from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from "../styles/Publications.module.css";

function Publications() {
  return (
    <>
    <Head>
      <title>Joshua James | Talks + Publications</title>
      <meta name="publications" content="publications"/>
    </Head>
    <div className={styles.pubContainer}>
      <h1 className={styles.pubTitle}>Talks and Publications</h1>
      <div className={styles.techMedContainer}>
        <div className={styles.techMedCard}>
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7022286388872044544/"
            target="_blank"
            className={styles.techMedPicAnchor}
          >
            <h2 className={styles.techMedTitle}>Tech Talk Series</h2>

            <Image
              src="/tech talk slide 1.png"
              className={styles.techMedPic}
              height={200}
              width={200}
              alt="tech talk image"
            />
            <p className={styles.techMedDescrip}>
              I was invited to speak at the Jeeny and Bractlet Tech Talk Series
              where I educated over sixty software engineers on the topic of
              “Containers and Containerization”.
            </p>
          </a>
        </div>

        <div className={styles.techMedCard}>
          <a
            href="https://medium.com/@jj289_55613/chronos-application-health-monitoring-for-the-modern-era-3b9d93b59ff"
            target="_blank"
            className={styles.techMedPicAnchor}
          >
            <h2 className={styles.techMedTitle}>Medium Article</h2>
            <Image
              src="https://github.com/open-source-labs/Chronos/raw/master/assets/animated_logo.gif"
              //https://github.com/oslabs-beta/RediScope/tree/main/src/components/images
              className={styles.techMedPic}
              height={100}
              width={100}
              alt="chronos gif"
            />

            <p className={styles.techMedDescrip}>
              Published a Medium article on OSLabs’ Chronos product which
              iterated the importance of monitoring application health metrics.
            </p>
          </a>
        </div>
      </div>
    </div>
    </>
  );
}

export default Publications;