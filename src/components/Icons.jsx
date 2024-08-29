import { useState, useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/Icons.css";

const openMailClient = () => {
  window.location.href = "mailto:johan.soderlund96@gmail.com";
};

const Icon = ({ href, ariaLabel, icon: IconComponent, label, subtext }) => {
  const [isHovered, setIsHovered] = useState(false);
  const iconRef = useRef(null);

  const handleMouseMove = (e) => {
    if (iconRef.current) {
      const rect = iconRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      iconRef.current.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (iconRef.current) {
      iconRef.current.style.transform = "translate(0, 0)";
    }
  };

  return (
    <a
      href={href}
      className="icon"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={iconRef}
    >
      <IconComponent size={IconComponent === FaEnvelope ? 24 : 28} />
      {isHovered && (
        <div className="iconLabel">
          <span className="labelText">{label}</span>
          {subtext && <span className="subtext">{subtext}</span>}
        </div>
      )}
    </a>
  );
};

const Icons = () => {
  const iconData = [
    {
      href: "https://github.com/jhn322",
      ariaLabel: "GitHub Profile",
      icon: FaGithub,
      iconLabel: "GitHub",
      subtext: "Explore my code",
    },
    {
      href: "https://www.linkedin.com/in/johan-s%C3%B6derlund-31b9862b7/",
      ariaLabel: "LinkedIn Profile",
      icon: FaLinkedin,
      iconLabel: "LinkedIn",
      subtext: "Connect with me",
    },
    {
      href: "#",
      ariaLabel: "Send Email",
      icon: FaEnvelope,
      iconLabel: "Email",
      subtext: "Get in touch",
      onClick: openMailClient,
    },
  ];

  return (
    <div className="iconContainer">
      <div className="iconWrapper">
        {iconData.map((icon, index) => (
          <Icon key={index} {...icon} />
        ))}
      </div>
    </div>
  );
};

export default Icons;
