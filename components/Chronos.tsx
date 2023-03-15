import React from "react";
import { FaGithub, FaMedium } from "react-icons/fa";
import Image from "next/image";
import styles from "../styles/Chronos.module.css";

function Chronos() {
  return (
    <div className={styles.chronosContainer}>
      <div className={styles.contributionContainer}>
        <h1 className={styles.contributionTitle}>Recent Contributions</h1>
        <p className={styles.contributionDescrip}>
          I was given the opportunity to work for the tech accelerator,
          OSLabs, where I collaborated with a team of creative engineers. We
          upgraded the codebase of an application health monitoring product
          called Chronos. Chronos is a free, open-source developer tool that
          monitors health and communications data from servers, Kubernetes
          clusters, microservices, Kafka clusters, and containers. During that
          time, my contributions included -
        </p>
        <ul>
          <li className={styles.chronosBullet}>
            Migrated codebase to TypeScript to identify pre-compilation errors
            which would enhance future development experiences by reducing error
            logs and creating optimal productivity and efficiency
          </li>
          <li className={styles.chronosBullet}>
            Fetched metadata on Kubernetes clusters through Prometheus which
            expanded Chronos’ monitoring capabilities beyond microservices,
            Kafka, and Docker, while maintaining querying efficiency.
          </li>
          <li className={styles.chronosBullet}>
            Utilized Jest and React Testing Library to seamlessly release new
            features with Test-Driven-Development, reducing errors for a better
            quality of the final product.
          </li>
          <li className={styles.chronosBullet}>
            Employed Node.js package manager to audit months of unhandled
            technical debt by auditing all dependencies, and removing or
            updating packages, resulting in a substantially lighter application
            with faster compilation and hot-module-reloading.
          </li>
          <li className={styles.chronosBullet}>
            Updated Chronos’ Electron application using Node Package Manager in
            order for the product to have compatibility with any processor
            option, including ARM-64 Apple “M” architecture which it did not
            have the ability previously.
          </li>
        </ul>
      </div>

      <div className={styles.checkContainer}>
        {/* <h3 className="check-title">Check out Chronos!</h3> */}
          <a
            href="https://chronoslany.com"
            target="_blank"
            className={styles.checkItem}
          >
              <Image src="/chronos-icon.svg" alt="chronos logo" height={40} width={40} />
              Chronos Website
            </a>
            <a
              href="https://github.com/open-source-labs/Chronos"
              target="_blank"
              className={styles.checkItem}
            >
              <FaGithub size={50} />
              GitHub
            </a>
            <a
              href="https://medium.com/@jj289_55613/chronos-application-health-monitoring-for-the-modern-era-3b9d93b59ff"
              target="_blank"
              className={styles.checkItem}
            >
                <FaMedium size={50} />
              Medium Article
            </a>
      </div>
    </div>
  );
}

export default Chronos;