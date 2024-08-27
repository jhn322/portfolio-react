import { useState, useEffect } from "react";
import { RxChevronUp } from "react-icons/rx";
import "../styles/ScrollUp.css";

const ScrollUp = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 0.2 * window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main>
      <article
        className={`scrollUp ${visible ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        <RxChevronUp className="scrollIcon" />
      </article>
    </main>
  );
};

export default ScrollUp;
