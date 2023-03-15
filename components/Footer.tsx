import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "../styles/Footer.module.css";

function Footer() {
    return (
      <footer className={styles.footerContainer}>
        <p>© 2023 Joshua James. All rights reserved</p>
        <div className={styles.iconFooter}>
          <a target="_blank" href="https://www.linkedin.com/in/joshuakjames" className="link-anchor">
            <FaLinkedin size={21} className={styles.icons} />
          </a>
          <a target="_blank" href="https://github.com/joshjames289" className="link-anchor">
          <FaGithub size={21} className={styles.icons} />
          </a>
        </div>
      </footer>
    );
  }
  
  export default Footer;