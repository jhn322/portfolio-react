import React from "react";
import { FaGithub } from "react-icons/fa";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
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
      <img
        src={imageUrl}
        alt={`Screenshot of ${title}`}
        className="projectImage"
      />
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
        "An informational website specifically made to highlight what Holmsund has to offer. Built with React and several libraries, it offers an easy comprehensive navigation, an accurate search query to handle every request and a wealth of images and text to inspire you.",
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
    },
    {
      title: "Kanban Group Project",
      description:
        "A weeks long collaborative group project utilizing GIT while coding in React with Redux to create a useful kanban board for planning. The user can create tasks, insert due date, deadline, assign memebers and move cards between columns.",
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
        "An aesthetically pleasing dashboard meant to be your landing page for bookmarking links you wanna save for later. A quick overview of the weather at a glance, and writing down notes quickly that will be saved every time you visit the site.",
      imageUrl: project3,
      tags: ["JavaScript", "CSS", "API", "Randomizer", "Google Analytics"],
      viewProject: "https://jhn-dashboard.netlify.app/",
      codeLink: "https://github.com/jhn322/dashboard-frontend",
    },
    {
      title: "Quire",
      description:
        "A digital assistant for creating, saving, and editing everyday notes. Whether one intends to leave a small reminder for the next day, or create a chapter for a sketch, Quire is here to help you.",
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
