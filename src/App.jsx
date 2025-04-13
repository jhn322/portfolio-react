// import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
// import Experience from "./components/Experience";
import FeaturedProjects from "./components/FeaturedProjects";
import OtherProjects from "./components/OtherProjects";
import Contact from "./components/Contact";
import ScrollUp from "./components/ScrollUp";
import Icons from "./components/Icons";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <main>
        <About />
        <Skills />
        {/* <Experience /> */}
        <FeaturedProjects />
        <OtherProjects />
        <Contact />
        <ScrollUp />
        <Icons />
      </main>
    </div>
  );
}

export default App;
