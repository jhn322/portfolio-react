import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import WorkEducation from "./components/WorkEducation";
import Projects from "./components/Projects";
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
        <Projects />
        <Contact />
        <Footer />
        <ScrollUp />
      </main>
    </div>
  );
}

export default App;
