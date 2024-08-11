import { useState, useEffect, useRef } from "react";
import "../styles/Experience.css";

const getCurrentYear = () => new Date().getFullYear();

const experiences = [
  { skill: "Sony Vegas", startYear: 2011 },
  { skill: "Photoshop", startYear: 2011 },
  { skill: "Linux", startYear: 2018 },
  { skill: "Docker", startYear: 2020 },
  { skill: "Kometa", startYear: 2021 },
  { skill: "HTML & CSS", startYear: 2023 },
  { skill: "GIT", startYear: 2023 },
  { skill: "Javascript", startYear: 2023 },
  { skill: "TypeScript", startYear: 2023 },
  { skill: "React", startYear: 2024 },
  { skill: "Node.JS", startYear: 2024 },
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

  const calculatePercentage = (index, skill) => {
    if (index >= 3) {
      return 85 - (index - 3);
    }

    const years = currentYear - experiences[index].startYear;
    const maxYears = Math.max(
      ...experiences.slice(0, 3).map((exp) => currentYear - exp.startYear)
    );
    return Math.round(80 + (years / maxYears) * 19);
  };

  const updatedExperiences = experiences.map((exp, index) => ({
    ...exp,
    years: currentYear - exp.startYear,
    percentage: calculatePercentage(index, exp.skill),
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
