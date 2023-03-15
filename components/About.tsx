import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from 'next/image'
import styles from "../styles/About.module.css";

function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.descripContainer}>
        <h1 className={styles.aboutTitle}>Hi, I'm Joshua James</h1>
        <p>
          Software Engineer and open-source contributor with experience in
          building full-stack applications using React, Node.js/Express.js, SQL,
          and NoSQL databases with an emphasis on module design patterns.
        </p>
      </div>
      <div className={styles.profContainer}>
        <Image src="/prof.png" className={styles.profPic} alt="profile image" width={100} height={100}/>
        <div className={styles.iconContainer}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/joshuakjames"
            className={styles.linkAnchor}
          >
            <FaLinkedin size={40} className="icons" />
          </a>
          <a
            target="_blank"
            href="https://github.com/joshjames289"
            className={styles.linkAnchor}
          >
            <FaGithub size={40} className="icons" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;