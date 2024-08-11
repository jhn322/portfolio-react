import { useState, useEffect } from "react";
import HeaderImage from "../assets/header.jpg";
import ScrollDown from "./ScrollDown";
import "../styles/Header.css";

const Header = () => {
  const phrases = [
    "Web Developer",
    "Media Enthusiast",
    "Photo & Video Editing",
    "Linux & Docker Exploring",
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentPhrase = phrases[currentPhraseIndex];

    if (!isDeleting && displayedText === currentPhrase) {
      timer = setTimeout(() => setIsDeleting(true), 5000);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    } else {
      timer = setTimeout(
        () => {
          setDisplayedText((prev) =>
            isDeleting
              ? prev.slice(0, -1)
              : currentPhrase.slice(0, prev.length + 1)
          );
        },
        isDeleting ? 40 : 60
      );
    }

    return () => clearTimeout(timer);
  }, [displayedText, currentPhraseIndex, isDeleting]);

  const parallaxStyle = {
    backgroundImage: `url(${HeaderImage})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <header id="home" className="parallax" style={parallaxStyle}>
      <div className="content">
        <h1 className="name">
          Johan <span>Söderlund</span>
        </h1>
        <p className="typewriterContainer">
          <span className="typewriter">{displayedText}</span>
        </p>
      </div>
      <ScrollDown />
    </header>
  );
};

export default Header;
