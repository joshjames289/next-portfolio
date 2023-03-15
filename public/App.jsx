import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import "./styles/App.css";

const App = () => {
  return (
    <div>
      <div className="app">
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route path="/projects" element={<Projects />}></Route>

            <Route path="/publications" element={<Publications />}></Route>

            <Route path="/contact" element={<Contact />}></Route>

            <Route path="/resume" element={<Resume />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
