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
          <div className="otherIcons">
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

const OtherProjects = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver({
    threshold: 0.5,
    once: true,
  });

  const projects = [
    {
      title: "Kometa Config",
      description:
        "Kometa is a powerful tool designed to give you complete control over your media libraries. With Kometa, you can take your customization to the next level, with granular control over metadata, collections, overlays, and much more. This is my tailor made config with an endless amount of time spent creating and perfecting every detail.",
      tags: [
        "Python",
        "Docker",
        "YAML",
        "Metadata",
        "API",
        "GIT",
        "Photoshop",
        "Automation",
      ],
      viewProject: "https://kometa.wiki/en/latest/",
      codeLink: "https://github.com/jhn322/kometa-config",
    },
    {
      title: "Kanban Board",
      description:
        "This Kanban board is a versatile app designed to streamline your task management. With a user-friendly interface, it allows you to effortlessly organize tasks into customizable columns. The app supports drag-and-drop functionality, enabling smooth task movement across different stages. Additionally, it features a dynamic theme switcher, task creation and editing options, and real-time updates saved locally.",
      tags: ["React", "API", "Google Analytics", "Theme Switcher", "Context"],
      viewProject: "https://jhn-kanban-react.netlify.app/",
      codeLink: "https://github.com/jhn322/kanban-board-react",
    },
    {
      title: "Media Info",
      description:
        "This JavaScript application is a simple movie search tool that interacts with the OMDb API to fetch and display information about movies, TV shows, or anime based on user input. The application provides a user-friendly interface where users can enter the name of a movie and either click a search button to retrieve the relevant information.",
      tags: ["JavaScript", "CSS", "API", "OMDb"],
      viewProject: "https://jhn-media-info-app.netlify.app/",
      codeLink: "https://github.com/jhn322/media-info-app",
    },
    {
      title: "Mortgage Calculator",
      description:
        "This TypeScript-based application is designed to help you calculate your monthly mortgage payments, total interest, and provide a detailed amortization schedule. The app takes user input for the mortgage amount, interest rate, and loan term, then performs precise calculations using a financial formula to determine your monthly payments.",
      tags: ["TypeScript", "JavaScript", "CSS"],
      viewProject: "https://jhn-labb-typescript.netlify.app/",
      codeLink: "https://github.com/jhn322/labb-typescript-frontend",
    },
    {
      title: "Tic Tac Toe",
      description:
        "This game is a React-based application implemented using TypeScript. It leverages React's state management to track the game board's state, determine the current player, and identify when the game ends with a win, draw, or reset. The game is structured with two main components: Game and Board, each playing a crucial role in the gameplay logic and user interface.",
      tags: ["TypeScript", "React", "Interface", "CSS"],
      viewProject: "https://jhn-labb-typscript-react.netlify.app/",
      codeLink: "https://github.com/jhn322/labb-typescript-react",
    },
    {
      title: "Memory",
      description:
        "This interactive app is built on vanilla JavaScript to challenge your memory skills with a fun and engaging twist—matching pairs of Pokémon images. The game is simple to play but hard to master. As you flip cards to reveal Pokémon, try to remember their positions and match them with as few turns as possible. ",
      tags: ["JavaScript", "CSS", "HTML"],
      viewProject: "https://jhn322.github.io/memory/",
      codeLink: "https://github.com/jhn322/memory",
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
