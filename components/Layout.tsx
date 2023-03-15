import React, { ReactNode } from "react";
import Footer from './Footer';
import NavBar from './NavBar';

interface Props {
  children?: ReactNode
  // any props that come into the component
}

export default function Layout ({ children }: Props) {
  return (
    <>
      <main>
        <NavBar />
        {children}
      </main>
      <Footer />
    </>
  );
}