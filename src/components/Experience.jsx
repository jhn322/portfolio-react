import { useState, useEffect, useRef } from "react";
import "../styles/Experience.css";

const getCurrentYear = () => new Date().getFullYear();

const experiences = [
  { skill: "React", startYear: 2024 },
  { skill: "GIT", startYear: 2023 },
  { skill: "TypeScript", startYear: 2023 },
  { skill: "Javascript", startYear: 2023 },
  { skill: "HTML & CSS", startYear: 2023 },
  { skill: "Node.JS", startYear: 2024 },
  { skill: "Docker", startYear: 2020 },
  { skill: "Photoshop", startYear: 2011 },
  { skill: "Linux", startYear: 2018 },
  { skill: "Kometa", startYear: 2021 },
  { skill: "Sony Vegas", startYear: 2011 },
];

const Experience = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);
  const [currentYear, setCurrentYear] = useState(getCurrentYear());

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const yearInterval = setInterval(() => {
      setCurrentYear(getCurrentYear());
    }, 60000);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      clearInterval(yearInterval);
    };
  }, []);

  const skillPriority = {
    "HTML & CSS": 4,
    GIT: 3,
    Javascript: 2,
    TypeScript: 1,
    React: 1,
    "Node.JS": 0,
  };

  const calculatePercentage = (yearsOfExperience, skill) => {
    const maxExperience = 13;
    const minExperience = 0;

    const baseExperienceFactor = skill in skillPriority ? 75 : 80;

    let percentage = Math.round(
      baseExperienceFactor +
        ((yearsOfExperience - minExperience) /
          (maxExperience - minExperience)) *
          19
    );

    if (skill in skillPriority) {
      percentage += skillPriority[skill];
    }

    if (skill === "Node.JS") {
      percentage -= 1;
    }

    return Math.min(percentage, 99);
  };

  const updatedExperiences = experiences.map((exp) => ({
    ...exp,
    years: currentYear - exp.startYear,
    percentage: calculatePercentage(currentYear - exp.startYear, exp.skill),
  }));

  return (
    <div id="experience" className="experienceContainer" ref={sectionRef}>
      <h2 className="title">Experience</h2>
      {updatedExperiences.map((exp, index) => (
        <div key={exp.skill} className="skillItem">
          <div className="skillInfo">
            <span className="skillName">{exp.skill}</span>
            <span className="skillYears">
              {exp.years}+ {exp.years === 1 ? "year" : "years"} of experience
            </span>
          </div>
          <div className="skillBarContainer">
            <div
              className="skillBar"
              style={{
                width: animate ? `${exp.percentage}%` : "0%",
                transitionDelay: `${index * 0.1}s`,
              }}
            ></div>
            <span className="skillPercentage">
              {animate ? exp.percentage : 0}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
