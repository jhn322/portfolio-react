import React from "react";
import "../styles/Experience.css";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const TimelineItem = ({ title, company, institution, period }) => {
  const [itemRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    once: true,
  });

  return (
    <article
      className={`timelineItem ${isVisible ? "animate" : ""}`}
      ref={itemRef}
      role="listitem"
    >
      <h3>{title}</h3>
      {company && <p className="company">{company}</p>}
      {institution && <p className="institution">{institution}</p>}
      <p className="period">{period}</p>
    </article>
  );
};

const Experience = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver({
    threshold: 0.1,
    once: true,
  });

  const employment = [
    {
      title: "Lokalvårdare Vikarie",
      company: "Umeå Städservice",
      period: "2015 - Present",
    },
    {
      title: "Medarbetare Mjölkbehandlingsavdelning",
      company: "Norrmejerier",
      period: "2023",
    },
    {
      title: "Vaktmästare",
      company: "Sandviks Idrottsplan",
      period: "2014",
    },
    {
      title: "Butiksmedarbetare",
      company: "Coop Konsum Holmsund",
      period: "2013",
    },
  ];

  const education = [
    {
      title: "Fullstack JavaScript Extended",
      institution: "Chas Academy",
      period: "2023 - 2025",
    },
    {
      title: "Dator- och Kommunikationsteknik",
      institution: "Viva Vägledning Vuxenutbildning",
      period: "2016 - 2018",
    },
    {
      title: "El- och Energiprogrammet",
      institution: "Dragonskolan",
      period: "2014 - 2015",
    },
  ];

  return (
    <section id="experience" className="experience">
      <div ref={headerRef}>
        <header className={`headline ${isHeaderVisible ? "fadeIn" : ""}`}>
          <h2>Experience</h2>
          <p className="main">My work and education history</p>
        </header>
      </div>
      <div className="historyContainer">
        <section className="experienceSection">
          <h2 className="sectionTitle">
            <FaBriefcase className="employIcon" aria-hidden="true" /> Employment
          </h2>
          <div className="timeline">
            {employment.map((job, index) => (
              <TimelineItem
                key={index}
                title={job.title}
                company={job.company}
                period={job.period}
              />
            ))}
          </div>
        </section>
        <section className="experienceSection">
          <h2 className="sectionTitle">
            <FaGraduationCap className="schoolIcon" aria-hidden="true" />{" "}
            Education
          </h2>
          <div className="timeline">
            {education.map((edu, index) => (
              <TimelineItem
                key={index}
                title={edu.title}
                institution={edu.institution}
                period={edu.period}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Experience;
