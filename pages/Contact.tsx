import React from "react";
import Head from 'next/head'
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import styles from "../styles/Contact.module.css";

function Contact() {
  return (
    <>
    <Head>
      <title>Joshua James | Contact</title>
      <meta name="contact" content="contact"/>
    </Head>
    <div className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>Contact</h1>
      <div className={styles.picSocials}>
        <Image src="/prof.png" className={styles.profPic} height={100} width={100} alt="profile pic" />
        <div className={styles.socials}>
          <HiOutlineMail size={25} />
          joshua.k.james6@gmail.com
          <FaLinkedin size={25}/>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/joshuakjames"
            className={styles.linkAnchor}
          >
            https://www.linkedin.com/in/joshuakjames
          </a>
          <FaGithub size={25} />
          <a
            target="_blank"
            href="https://github.com/joshjames289"
            className={styles.linkAnchor}
          >
            https://github.com/joshjames289
          </a>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact;