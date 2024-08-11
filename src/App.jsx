import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import ScrollUp from "./components/ScrollUp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <main>
        <Home />
        <About />
        <Experience />
        <Education />
        <Portfolio />
        <Contact />
        <ScrollUp />
      </main>
    </div>
  );
}

export default App;
