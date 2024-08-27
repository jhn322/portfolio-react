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
    </footer>
  );
};

export default Footer;
