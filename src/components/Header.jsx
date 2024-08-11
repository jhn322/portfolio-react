import React from "react";
import HeaderImage from "../assets/header.jpg";
import ScrollDown from "./ScrollDown"; // Import the ScrollDown component
import "../styles/Header.css";

const Header = () => {
  const parallaxStyle = {
    backgroundImage: `url(${HeaderImage})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <header className="parallax" style={parallaxStyle}>
      <div className="content">
        <h1>Johan Söderlund</h1>
        <p>Web developer</p>
      </div>
      <ScrollDown />
    </header>
  );
};

export default Header;
