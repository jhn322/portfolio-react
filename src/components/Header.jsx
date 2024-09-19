import { useState, useEffect } from "react";
import Lottie from "react-lottie-player";
import lottieHeader from "../json/lottieHeader.json";
import "../styles/Header.css";

const Header = () => {
  const phrases = [
    "Web Developer.",
    "Creative Designer.",
    "Media Enthusiast.",
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

  const handleScroll = (event) => {
    event.preventDefault();
    const targetId = "projects";
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header id="home" className="header">
      <div className="content">
        <div className="contentWrapper">
          <div className="textContainer">
            <h3>Hey, my name is</h3>
            <h1 className="name">Johan.</h1>
            <p className="typewriterContainer">
              <span className="typewriter">{displayedText}</span>
            </p>
            <p className="text responsiveText">
              I'm a web developer from Umeå with a passion for creating modern
              web solutions. With increasing experience in coding and a passion
              for problem-solving, I excel at transforming complex challenges
              into reality. I utilize Docker for containerization, which
              enhances scalability of my server processes. Additionally, I enjoy
              photo editing as a creative outlet for various projects.
            </p>
            <div className="headerBtn">
              <a href="#projects" onClick={handleScroll}>
                <button>Explore my Projects!</button>
              </a>
            </div>
          </div>
          <Lottie
            loop
            animationData={lottieHeader}
            play
            className="lottieHeader"
          />
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1724873734">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </header>
  );
};

export default Header;
