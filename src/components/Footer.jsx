import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        &copy; Copyright {currentYear}. All rights reserved.
      </p>
      <div style={styles.iconContainer}>
        <a
          href="https://github.com/jhn322"
          style={styles.icon}
          target="_blank"
          rel="noopener noreferrer"
          onMouseOver={(e) =>
            (e.currentTarget.style.color = "var(--accent-color)")
          }
          onMouseOut={(e) => (e.currentTarget.style.color = "#f0f0f0")}
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/johan-s%C3%B6derlund-31b9862b7/"
          style={styles.icon}
          target="_blank"
          rel="noopener noreferrer"
          onMouseOver={(e) =>
            (e.currentTarget.style.color = "var(--accent-color)")
          }
          onMouseOut={(e) => (e.currentTarget.style.color = "#f0f0f0")}
        >
          <FaLinkedin size={28} />
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#300404",
    color: "#f0f0f0",
    textAlign: "center",
    padding: "3rem 0",
    width: "100%",
  },
  text: {
    margin: "0",
  },
  iconContainer: {
    marginTop: "1rem",
  },
  icon: {
    margin: "0 1rem",
    color: "#f0f0f0",
    textDecoration: "none",
    transition: "color 0.3s ease",
  },
};

export default Footer;
