import { useState, useEffect } from "react";
import { RxDoubleArrowDown } from "react-icons/rx";
import "../styles/ScrollDown.css";

const ScrollDown = () => {
  const [jumpAnimation, setJumpAnimation] = useState(false);

  useEffect(() => {
    const jumpInterval = setInterval(() => {
      setJumpAnimation(true);
      setTimeout(() => setJumpAnimation(false), 500);
    }, 2500);

    return () => clearInterval(jumpInterval);
  }, []);

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`scrollDown ${jumpAnimation ? "jump" : ""}`}
      onClick={scrollDown}
    >
      <RxDoubleArrowDown className="scrollIcon" />
    </div>
  );
};

export default ScrollDown;
