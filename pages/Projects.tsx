import React from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from "../styles/Projects.module.css";

function Projects() {
  return (
    <>
    <Head>
      <title>Joshua James | Projects</title>
      <meta name="projects" content="projects"/>
    </Head>
    <div className={styles.projectsContainer}>
      <h1 className={styles.projectsTitle}>Projects</h1>
      <div className={styles.projectContainer}>
        <div className={styles.projectCard}>
          <a
            href="https://github.com/open-source-labs/Chronos"
            target="_blank"
            className={styles.projectAnchor}
          >
            <h2 className={styles.projectTitle}>Chronos</h2>
            <Image
              src="https://github.com/open-source-labs/Chronos/tree/master/assets/animated_logo.gif"
              height={100}
              width={100}
              alt="chronos gif"
              className={styles.projectPic}
            />
            <p className={styles.projectDescrip}>
              Chronos is a free, open-source developer tool that monitors health
              and communications data from servers, Kubernetes clusters,
              microservices, Kafka clusters, and containers.
            </p>
          </a>
        </div>

        <div className={styles.projectCard}>
          <a
            href="https://github.com/joshjames289/Jobify"
            target="_blank"
            className={styles.projectAnchor}
          >
            <h2 className={styles.projectTitle}>Jobify</h2>
            <Image
              src="/jobify.png"
              height={200}
              width={200}
              alt="jobify image"
              className={styles.projectPic}
            />
            <p className={styles.projectDescrip}>
              Open Source Interview Organization Tool for Software Engineers
            </p>
          </a>
        </div>

        <div className={styles.projectCard}>
          <a
            href="https://github.com/open-source-labs/Chronos"
            target="_blank"
            className={styles.projectAnchor}
          >
            <h2 className={styles.projectTitle}>Crisp Garments</h2>
            <Image
              src="/crisp-garmets.png"
              className={styles.projectPic}
              height={200}
              width={200}
              alt="crisp garments image"
            />
            <p className={styles.projectDescrip}>
              Open Source Specialized E-Commerce Store.
            </p>
          </a>
        </div>
      </div>
    </div>
    </>
  );
}

export default Projects;