import Footer from './Footer';
import NavBar from './NavBar';

export default function Layout({ children }) {
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