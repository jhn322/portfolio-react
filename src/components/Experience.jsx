import { useEffect, useRef } from "react";
import "../styles/Experience.css";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Experience = () => {
  const timelineRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      timelineRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !timelineRefs.current.includes(el)) {
      timelineRefs.current.push(el);
    }
  };

  return (
    <div id="experience" className="experience">
      <div className="me">
        <h2>History</h2>
        <p className="main">My work and education history</p>
      </div>
      <div className="historyContainer">
        <section className="experienceSection">
          <h2 className="sectionTitle">
            <FaBriefcase className="icon" /> Employment
          </h2>
          <div className="timeline">
            {[
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
            ].map((job, index) => (
              <div key={index} className="timelineItem" ref={addToRefs}>
                <h3>{job.title}</h3>
                <p className="company">{job.company}</p>
                <p className="period">{job.period}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="experienceSection">
          <h2 className="sectionTitle">
            <FaGraduationCap className="icon2" /> Education
          </h2>
          <div className="timeline">
            {[
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
            ].map((edu, index) => (
              <div key={index} className="timelineItem" ref={addToRefs}>
                <h3>{edu.title}</h3>
                <p className="institution">{edu.institution}</p>
                <p className="period">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
