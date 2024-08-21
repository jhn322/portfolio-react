import React from "react";
import { FaGithub, FaFolder, FaExternalLinkAlt } from "react-icons/fa";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import "../styles/OtherProjects.css";

const ProjectCard = ({ title, description, tags, viewProject, codeLink }) => {
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
      className={`projectCard ${isVisible ? "visible" : ""}`}
      ref={cardRef}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`View project: ${title}`}
    >
      <div className="projectIcons">
        <FaFolder className="folderIcon" />
        <FaExternalLinkAlt className="externalLinkIcon" />
      </div>
      <div className="projectContent">
        <h3 className="projectTitle">{title}</h3>
        <p className="projectDescription">{description}</p>
        <div className="projectTags">
          {tags.map((tag, index) => (
            <span key={index} className="projectTag">
              {tag}
            </span>
          ))}
        </div>
        {codeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="projectCodeLink"
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

const OtherProjects = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver({
    threshold: 0.5,
    once: true,
  });

  const projects = [
    {
      title: "Holmsund Information",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet consectetur eveniet minima fugiat debitis voluptates ex. Temporibus dolore deserunt modi! Officia sapiente tempora accusantium culpa harum, ea veniam laboriosam.",
      tags: ["React Router", "Fuzzy Search", "API"],
      viewProject: "https://jhn-holmsund-information.netlify.app/",
      codeLink: "https://github.com/jhn322/holmsund-information",
    },
    {
      title: "Kanban Group Project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet consectetur eveniet minima fugiat debitis voluptates ex. Temporibus dolore deserunt modi! Officia sapiente tempora accusantium culpa harum, ea veniam laboriosam.",
      tags: ["React", "Redux", "Google Analytics"],
      viewProject: "https://kanban-kollab.netlify.app/",
      codeLink: "https://github.com/jhn322/kanban-group-react",
    },
    {
      title: "The Dashboard",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet consectetur eveniet minima fugiat debitis voluptates ex. Temporibus dolore deserunt modi! Officia sapiente tempora accusantium culpa harum, ea veniam laboriosam.",
      tags: ["JavaScript", "CSS", "API"],
      viewProject: "https://jhn-dashboard.netlify.app/",
      codeLink: "https://github.com/jhn322/dashboard-frontend",
    },
    {
      title: "Kometa Config",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet consectetur eveniet minima fugiat debitis voluptates ex. Temporibus dolore deserunt modi! Officia sapiente tempora accusantium culpa harum, ea veniam laboriosam.",
      tags: ["Python", "Docker", "YAML"],
      viewProject: "https://kometa.wiki/en/latest/",
      codeLink: "https://github.com/jhn322/kometa-config",
    },
  ];

  return (
    <section id="projects" className="projectsWrapper">
      <div className="headlineContainer" ref={headerRef}>
        <header className={`headline ${isHeaderVisible ? "fadeIn" : ""}`}>
          <h2>Other Projects</h2>
          <p className="main">More noteworthy projects to check out</p>
        </header>
      </div>
      <div className="projectsContainer">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default OtherProjects;
