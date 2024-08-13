import { useState, useEffect, useRef } from "react";
import "../styles/Experience.css";

const getCurrentDate = () => {
  const now = new Date();
  return { year: now.getFullYear(), month: now.getMonth() + 1 };
};

const experiences = [
  { skill: "React", startYear: 2024, startMonth: 3 },
  { skill: "GIT", startYear: 2023, startMonth: 10 },
  { skill: "TypeScript", startYear: 2023, startMonth: 12 },
  { skill: "Javascript", startYear: 2023, startMonth: 9 },
  { skill: "HTML & CSS", startYear: 2023, startMonth: 9 },
  { skill: "Node.JS", startYear: 2024, startMonth: 5 },
  { skill: "Docker", startYear: 2020, startMonth: 1 },
  { skill: "Photoshop", startYear: 2011, startMonth: 3 },
  { skill: "Linux", startYear: 2018, startMonth: 3 },
  { skill: "Kometa", startYear: 2021, startMonth: 1 },
  { skill: "Sony Vegas", startYear: 2011, startMonth: 3 },
];

const Experience = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);
  const [currentDate, setCurrentDate] = useState(getCurrentDate());

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

    const dateInterval = setInterval(() => {
      setCurrentDate(getCurrentDate());
    }, 60000);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      clearInterval(dateInterval);
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

  const calculateYearsOfExperience = (startYear, startMonth) => {
    const { year: currentYear, month: currentMonth } = currentDate;
    let years = currentYear - startYear;
    let months = currentMonth - startMonth;

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    return { years, months };
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

  const updatedExperiences = experiences.map((exp) => {
    const { years } = calculateYearsOfExperience(exp.startYear, exp.startMonth);
    return {
      ...exp,
      years,
      percentage: calculatePercentage(years, exp.skill),
    };
  });

  return (
    <div id="experience" className="experienceContainer" ref={sectionRef}>
      <div className="me">
        <h2>Experience</h2>
        <p className="main">My developer & software skills</p>
      </div>
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
