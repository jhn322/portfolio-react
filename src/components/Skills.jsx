import { useState, useEffect, useRef } from "react";
import "../styles/Skills.css";

const getCurrentDate = () => {
  const now = new Date();
  return { year: now.getFullYear(), month: now.getMonth() + 1 };
};

const skills = [
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

const Skills = () => {
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

  const updatedExperiences = skills.map((exp) => {
    const { years } = calculateYearsOfExperience(exp.startYear, exp.startMonth);
    return {
      ...exp,
      years,
      percentage: calculatePercentage(years, exp.skill),
    };
  });

  return (
    <section id="skills" className="skillsContainer" ref={sectionRef}>
      <div className="meExperience">
        <div className="me">
          <h2>Skills</h2>
          <p className="main">My developer & software skills</p>
        </div>
      </div>
      <div className="innerContainer">
        <article className="infoContainer">
          <h3 className="infoHeadline">Some about my abilites</h3>
          <p className="info">
            With a new-found passion in both front-end and back-end development,
            I am looking to improve my skills across a diverse range of
            technologies and tools. My growing knowledge in{" "}
            <strong>React</strong> allows me to build dynamic and responsive
            user interfaces, while my proficiency in TypeScript and{" "}
            <strong>JavaScript</strong> also benefits. My journey in software
            development is complemented by a hobby interest with{" "}
            <strong>Dockers</strong> seamless containerization and deployment. I
            am adept at <strong>GIT</strong>, ensuring collaboration and code
            management. My understanding of back-end enhances my ability to work
            on server-side applications, providing a full-stack development
            perspective. <br /> <br /> Beyond programming, I like to be creative
            with tools like <strong>Photoshop</strong> for designing visuals or{" "}
            <strong>Sony Vegas</strong> for video editing. My knowledge of{" "}
            <strong>Linux</strong> systems speaks for my ability to navigate and
            manage various operating systems effectively. Over the years, I am
            continuously looking to improve my skills and embraced new
            technologies, striving to deliver high-quality and innovative
            solutions in every project I undertake.
          </p>
        </article>
        <div className="skillItemsWrapper">
          {updatedExperiences.map((exp, index) => (
            <div key={exp.skill} className="skillItem">
              <div className="skillInfo">
                <span className="skillName">{exp.skill}</span>
                <span className="skillYears">
                  {exp.years}+ {exp.years === 1 ? "year" : "years"} of
                  experience
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
      </div>
    </section>
  );
};

export default Skills;
