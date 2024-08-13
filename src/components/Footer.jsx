import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footerText">
        &copy; Copyright {currentYear}. All rights reserved.
      </p>
      <div className="iconContainer">
        <a
          href="https://github.com/jhn322"
          className="icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/johan-s%C3%B6derlund-31b9862b7/"
          className="icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin size={28} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
