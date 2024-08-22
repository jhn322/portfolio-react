import { useState, useEffect } from "react";
import HeaderImage from "../assets/header.jpg";
import ScrollDown from "./ScrollDown";
import Lottie from "react-lottie-player";
import headerAnimation from "../json/headerAnimation.json";
import "../styles/Header.css";

const Header = () => {
  const phrases = [
    "Web Developer.",
    "Media Enthusiast.",
    "Photo & Video Editing.",
    "Linux & Docker Deployment.",
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

  const handleScroll = (event) => {
    event.preventDefault();
    const targetId = "projects";
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header id="home" className="parallax" style={parallaxStyle}>
      <div className="content">
        <div className="textContainer">
          <h1 className="name">
            Johan <span>Söderlund</span>
          </h1>
          <p className="typewriterContainer">
            <span className="typewriter">{displayedText}</span>
          </p>
          <p className="text">
            I'm a web developer from Umeå with a passion for creating modern web
            solutions. With increasing experience in coding and a talent for
            problem-solving, I excel at transforming complex challenges into
            reality.
          </p>
          <div className="headerBtn">
            <a href="#projects" onClick={handleScroll}>
              <button>Explore my Projects!</button>
            </a>
          </div>
        </div>
        <Lottie
          loop
          animationData={headerAnimation}
          play
          className="lottieAnimation"
        />
      </div>
      <ScrollDown />
    </header>
  );
};

export default Header;
