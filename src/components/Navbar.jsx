import { useState, useEffect } from "react";
import "../styles/Navbar.css";
import jsLogo from "../assets/js.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1200);

  useEffect(() => {
    const handleResize = () => {
      requestAnimationFrame(() => {
        setIsWideScreen(window.innerWidth >= 1200);
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleScroll = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigateHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`navbar ${isWideScreen ? "wideScreen" : ""} ${
        isOpen ? "menuOpen" : ""
      }`}
    >
      <div
        className="logoContainer"
        onClick={navigateHome}
        role="button"
        tabIndex={0}
        aria-label="Go to home"
      >
        <img src={jsLogo} alt="Brand Logo" className="navLogo" />
      </div>
      {!isWideScreen && (
        <div
          className="menuIcon"
          onClick={toggleMenu}
          role="button"
          tabIndex={0}
          aria-label="Toggle menu"
        >
          <svg
            className={`ham hamRotate ham1 ${isOpen ? "active" : ""}`}
            viewBox="0 0 100 100"
            width="70"
            height="70"
          >
            <path
              className="line top"
              d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
            />
            <path className="line middle" d="m 30,50 h 40" />
            <path
              className="line bottom"
              d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
            />
          </svg>
        </div>
      )}
      <ul
        className={`menu ${isOpen ? "open" : "closed"} ${
          isWideScreen ? "wideScreenMenu" : ""
        }`}
      >
        {["Home", "About", "Skills", "Experience", "Projects", "Contact"].map(
          (item) => (
            <li key={item} className="navList">
              <a
                href={`#${item.toLowerCase()}`}
                className="navItem"
                onClick={handleScroll}
                aria-label={`Navigate to ${item}`}
              >
                {item}
              </a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
