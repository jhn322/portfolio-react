import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        &copy; Coppyright {currentYear}. All rights reserved.
      </p>
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
};

export default Footer;
