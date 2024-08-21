import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/Icons.css";

const openMailClient = () => {
  window.location.href = "mailto:johan.soderlund96@gmail.com";
};

const Icons = () => {
  return (
    <div className="iconContainer">
      <div className="iconWrapper">
        <a
          href="https://github.com/jhn322"
          className="icon icon1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/johan-s%C3%B6derlund-31b9862b7/"
          className="icon icon1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin size={28} />
        </a>
        <div
          className="icon"
          onClick={openMailClient}
          role="button"
          tabIndex={0}
          aria-label="Send Email"
        >
          <FaEnvelope size={24} />
        </div>
      </div>
    </div>
  );
};

export default Icons;
