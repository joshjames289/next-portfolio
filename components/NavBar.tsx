import React from "react";
import Link from 'next/link';
import styles from "../styles/NavBar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h4>
        <Link className={styles.link} href="/">
          Home
        </Link>
      </h4>
      <h4>
        <Link className={styles.link} href="/Projects">
          Projects
        </Link>
      </h4>
      <h4>
        <Link className={styles.link} href="/Publications">
          Talks + Publications
        </Link>
      </h4>
      <h4>
        <Link className={styles.link} href="/Contact">
          Contact
        </Link>
      </h4>
      <h4>
        <Link className={styles.link} href="/Resume">
          Resume
        </Link>
      </h4>
    </nav>
  );
};

export default Navbar;