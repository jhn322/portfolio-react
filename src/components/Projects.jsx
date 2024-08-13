import React from "react";
import "../styles/Projects.css";
import ecommerceImg from "../assets/ecommerce.jpg";
import weatherImg from "../assets/weather.jpg";
import taskManagerImg from "../assets/taskmanager.jpg";
import fitnessImg from "../assets/fitness.jpg";

const ProjectCard = ({ title, description, imageUrl, tags }) => (
  <div className="projectCard">
    <img src={imageUrl} alt={title} className="projectImage" />
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
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A fully responsive online store with cart functionality.",
      imageUrl: ecommerceImg,
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Weather App",
      description: "Real-time weather forecasts for any location.",
      imageUrl: weatherImg,
      tags: ["React", "OpenWeatherAPI", "CSS"],
    },
    {
      title: "Task Management System",
      description:
        "Organize and track projects with team collaboration features.",
      imageUrl: taskManagerImg,
      tags: ["Vue.js", "Firebase", "Vuex"],
    },
    {
      title: "Fitness Tracker",
      description: "Monitor workouts and track progress towards fitness goals.",
      imageUrl: fitnessImg,
      tags: ["React Native", "GraphQL", "HealthKit"],
    },
  ];

  return (
    <div className="projectsContainer">
      <div className="me">
        <h2>Projects</h2>
        <p className="main">Take a look at my portfolio</p>
      </div>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
