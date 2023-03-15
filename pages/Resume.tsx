import React, { useState } from "react";
import Head from 'next/head'
import styles from "../styles/Resume.module.css";
import { Document, Page } from 'react-pdf';

// function Resume() {
//   return (
//     <Document file={"/JoshuaJamesResume.pdf"}>
//       <Page
//         // pageNumber={1}
//    //   width={width}
//       />
//     </Document>
//     );
// };

// export default Resume;

// export default function Resume() {
//     const [numPages, setNumPages] = useState(null);
//     const [pageNumber, setPageNumber] = useState(1);
  
//     function onDocumentLoadSuccess({ numPages }) {
//       setNumPages(numPages);
//     }
  
//     return (
//       <div>
//         <Document file="/JoshuaJamesResume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
//           <Page pageNumber={pageNumber} />
//         </Document>
//         <p>
//           Page {pageNumber} of {numPages}
//         </p>
//       </div>
//     );
//   }


// function Resume() {
//   return (
//     <div className="resume-container">
//       <h1 className="resume-title">Resume</h1>
//       {/* <object
//         className="resume-pdf"
//         data="../styles/imgs/Joshua James Resume.pdf"
//         type="application/pdf"
//       >
//         <div>No online PDF viewer installed</div>
//       </object> */}
//       <Document file={myResume}>
//         <Page pageIndex={0}/>
//       </Document>
//     </div>
//   );
// }

// export default Resume;

function Resume() {
  return (
    <>
      <Head>
        <title>Joshua James | Resume</title>
        <meta name="resume" content="resume"/>
      </Head>
      <div className={styles.resumeContainer}>
        <h1 className={styles.resumeTitle}>Resume</h1>
         <iframe
          className={styles.resumePdf}
          src="/Joshua James Resume.pdf"
          >
          </iframe>
      </div>
    </>
  );
}

export default Resume;