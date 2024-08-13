import { useEffect, useRef } from "react";
import { FaCode } from "react-icons/fa";
import "../styles/Projects.css";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";

const ProjectCard = ({
  title,
  description,
  imageUrl,
  tags,
  viewProject,
  codeLink,
  cardRef,
}) => {
  const handleClick = () => {
    window.open(viewProject, "_blank", "noopener,noreferrer");
  };

  const handleCodeClick = (e) => {
    e.stopPropagation();
  };

  return (
    <article
      className="projectCard"
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
            <FaCode />
          </a>
        )}
      </div>
    </article>
  );
};

const Projects = () => {
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const projects = [
    {
      title: "Holmsund Information",
      description:
        "An informational site with complex navigation & search to read about and view photos of Holmsund.",
      imageUrl: project1,
      tags: ["React Router", "Fuzzy Search", "API"],
      viewProject: "https://jhn-holmsund-information.netlify.app/",
      codeLink: "https://github.com/jhn322/holmsund-information",
    },
    {
      title: "Kanban Group Project",
      description:
        "A collaborative group project utilizing GIT while coding in React with Redux to create a useful kanban board.",
      imageUrl: project2,
      tags: ["React", "Redux", "Google Analytics"],
      viewProject: "https://kanban-kollab.netlify.app/",
      codeLink: "https://github.com/jhn322/kanban-group-react",
    },
    {
      title: "The Dashboard",
      description:
        "A dashboard for bookmarking links, looking up the weather and writing down notes quickly.",
      imageUrl: project3,
      tags: ["JavaScript", "CSS", "API"],
      viewProject: "https://jhn-dashboard.netlify.app/",
      codeLink: "https://github.com/jhn322/dashboard-frontend",
    },
    {
      title: "Kometa Config",
      description:
        "My config for a powerful Python tool designed to give you complete control over your media libraries.",
      imageUrl: project4,
      tags: ["Python", "Docker", "YAML"],
      viewProject: "https://kometa.wiki/en/latest/",
      codeLink: "https://github.com/jhn322/kometa-config",
    },
  ];

  return (
    <section id="projects" className="projectsWrapper">
      <div className="meExperience">
        <header className="me">
          <h2>Projects</h2>
          <p className="main">Take a look at my portfolio</p>
        </header>
      </div>
      <div className="projectsContainer">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            cardRef={(el) => (projectRefs.current[index] = el)}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
