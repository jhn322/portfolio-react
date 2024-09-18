import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import Lottie from "react-lottie-player";
import lottieBubble from "../json/lottieBubble.json";
import "../styles/FeaturedProjects.css";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

const ProjectCard = ({
  title,
  description,
  imageUrl,
  tags,
  viewProject,
  codeLink,
  isPersonalProject,
}) => {
  const [cardRef, isVisible] = useIntersectionObserver({
    threshold: 0.2,
    once: true,
  });

  const handleClick = () => {
    window.open(viewProject, "_blank", "noopener,noreferrer");
  };

  const handleCodeClick = (e) => {
    e.stopPropagation();
  };

  return (
    <article
      className={`featuredProjectCard ${isVisible ? "visible" : ""}`}
      ref={cardRef}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`View project: ${title}`}
    >
      <div className="imageContainer">
        {isPersonalProject && (
          <div className="projectLabel">Personal Project</div>
        )}
        <img
          src={imageUrl}
          alt={`Screenshot of ${title}`}
          className="projectImage"
        />
      </div>
      <div className="featuredProjectContent">
        <h3 className="featuredProjectTitle">{title}</h3>
        <p className="featuredProjectDescription">{description}</p>
        <div className="featuredProjectTags">
          {tags.map((tag, index) => (
            <span key={index} className="featuredProjectTag">
              {tag}
            </span>
          ))}
        </div>
        {codeLink && (
          <div className="featuredIconContainer">
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="featuredProjectCodeLink"
              title="View Code"
              onClick={handleCodeClick}
            >
              <FaGithub />
            </a>
            <FaExternalLinkAlt
              className="externalLinkIcon"
              title="External Link"
            />
          </div>
        )}
      </div>
    </article>
  );
};

const FeaturedProjects = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver({
    threshold: 0.5,
    once: true,
  });

  const projects = [
    {
      title: "Holmsund Information",
      description:
        "An informational website designed to highlight the unique destinations Holmsund has to offer. Coded with React and a variety of npm libraries, the site provides an intuitive navigation experience, ensuring that users can easily explore Holmsund. It also features a robust fuzzy search functionality, capable of handling a wide range of queries to deliver accurate results. Additionally, it boasts a large collection of images and text content, all curated to inspire and inform visitors about the local culture and places.",
      imageUrl: project1,
      tags: [
        "React",
        "Router",
        "Fuzzy Search",
        "CSS Modules",
        "API",
        "IntersectionObserver",
        "Google Analytics",
        "Breadcrumb",
        "Dark Mode",
      ],
      viewProject: "https://jhn-holmsund-information.netlify.app/",
      codeLink: "https://github.com/jhn322/holmsund-information",
      isPersonalProject: true,
    },
    {
      title: "Kanban Group Project",
      description:
        "A weeks-long group project leveraging GIT collaboration while coding in React with Redux to develop a highly functional Kanban board for effective planning. This project enables users to create and manage tasks with ease, including features for setting due dates, deadlines, and assigning team members. Also, users can move cards between columns to track progress and organize tasks efficiently. This Kanban board is designed to enhance productivity and streamline project management.",
      imageUrl: project2,
      tags: [
        "React",
        "Redux",
        "CSS Modules",
        "Store",
        "Google Analytics",
        "Custom Hooks",
        "Slice",
      ],
      viewProject: "https://kanban-kollab.netlify.app/",
      codeLink: "https://github.com/jhn322/kanban-group-react",
    },
    {
      title: "The Dashboard",
      description:
        "An aesthetically pleasing dashboard designed to be your go-to landing page for bookmarking and organizing links you want to save for later. This interface provides a quick overview of the weather, so you can stay informed at a glance. Also, it features a convenient note-taking section where you can write down important information or reminders. Your notes are automatically saved and persist across visits. This dashboard combines functionality with a sleek design.",
      imageUrl: project3,
      tags: ["JavaScript", "CSS", "API", "Randomizer", "Google Analytics"],
      viewProject: "https://jhn-dashboard.netlify.app/",
      codeLink: "https://github.com/jhn322/dashboard-frontend",
    },
    {
      title: "Quire",
      description:
        "A digital assistant designed for creating, saving, and editing everyday notes with ease. Whether you need to write down a quick reminder for the next day or develop a detailed chapter for a creative project, Quire is here to support you. Its intuitive interface allows for seamless note-taking and organization, ensuring your ideas and tasks are always at your fingertips.",
      imageUrl: project4,
      tags: [
        "JavaScript",
        "CSS",
        "HTML",
        "Google Analytics",
        "Search",
        "Print",
        "LocalStorage",
      ],
      viewProject: "https://regni.github.io/quire/",
      codeLink: "https://github.com/jhn322/quire",
    },
  ];

  return (
    <section id="projects" className="featuredProjectsWrapper">
      <div className="headlineContainer" ref={headerRef}>
        <header className={`headline ${isHeaderVisible ? "fadeIn" : ""}`}>
          <Lottie
            loop
            animationData={lottieBubble}
            play
            className="lottieBubble2"
          />
          <h2>Featured Projects</h2>
          <p className="main">Take a look at my portfolio</p>
        </header>
      </div>
      <div className="featuredProjectsContainer">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
