import React, { ReactNode } from "react";
import Footer from './Footer';
import NavBar from './NavBar';

interface Props {
  children?: ReactNode
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