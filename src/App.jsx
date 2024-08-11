import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import WorkEducation from "./components/WorkEducation";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <main>
        <About />
        <Experience />
        <WorkEducation />
        <Portfolio />
        <Contact />
        <Footer />
        <ScrollUp />
      </main>
    </div>
  );
}

export default App;
