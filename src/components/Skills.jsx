import { useState, useEffect } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { FaFire } from "react-icons/fa";
import "../styles/Skills.css";

const getCurrentDate = () => {
  const now = new Date();
  return { year: now.getFullYear(), month: now.getMonth() + 1 };
};

const skills = [
  { skill: "React", startYear: 2024, startMonth: 3 },
  { skill: "Next.js", startYear: 2024, startMonth: 9 },
  { skill: "GIT", startYear: 2023, startMonth: 10 },
  { skill: "TypeScript", startYear: 2023, startMonth: 12 },
  { skill: "JavaScript", startYear: 2023, startMonth: 9 },
  { skill: "HTML & CSS", startYear: 2023, startMonth: 9 },
  { skill: "Node.JS", startYear: 2024, startMonth: 5 },
  { skill: "Express", startYear: 2024, startMonth: 5 },
  { skill: "TailWindCSS", startYear: 2024, startMonth: 7 },
  { skill: "Vue.js", startYear: 2024, startMonth: 11 },
  { skill: "Docker", startYear: 2020, startMonth: 1 },
  { skill: "Photoshop", startYear: 2011, startMonth: 3 },
  { skill: "Figma", startYear: 2024, startMonth: 3 },
  { skill: "Linux", startYear: 2018, startMonth: 3 },
  { skill: "Kometa", startYear: 2021, startMonth: 1 },
  { skill: "Sony Vegas", startYear: 2011, startMonth: 3 },
];

const technologiesList1 = [
  { name: "HTML & CSS", icon: <FaFire /> },
  { name: "JavaScript", icon: <FaFire /> },
  { name: "TypeScript", icon: <FaFire /> },
  { name: "React", icon: <FaFire /> },
  { name: "GIT", icon: <FaFire /> },
  { name: "Figma", icon: <FaFire /> },
  { name: "Docker", icon: <FaFire /> },
  { name: "Next.js", icon: <FaFire /> },
];

const technologiesList2 = [
  { name: "Node.js", icon: <FaFire /> },
  { name: "Express", icon: <FaFire /> },
  { name: "MongoDB", icon: <FaFire /> },
  { name: "WhisperAI", icon: <FaFire /> },
  { name: "TailWindCSS", icon: <FaFire /> },
  { name: "SQL", icon: <FaFire /> },
  { name: "GraphQL", icon: <FaFire /> },
  { name: "Vue.js", icon: <FaFire /> },
];

const Skills = () => {
  const [sectionRef, isIntersecting] = useIntersectionObserver({
    threshold: 0.2,
    once: true,
  });

  const [headerRef, isHeaderVisible] = useIntersectionObserver({
    threshold: 0.5,
    once: true,
  });

  const [currentDate, setCurrentDate] = useState(getCurrentDate());

  useEffect(() => {
    const dateInterval = setInterval(() => {
      setCurrentDate(getCurrentDate());
    }, 60000);

    return () => clearInterval(dateInterval);
  }, []);

  const skillPriority = {
    Figma: 3,
    "Node.JS": 2,
    Express: 2,
    TailWindCSS: 1,
    "Next.js": 0,
    "Vue.js": 0,
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

    if (skill === "Vue.js") {
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
      <div className="headlineContainer" ref={headerRef}>
        <header className={`headline ${isHeaderVisible ? "fadeIn" : ""}`}>
          <h2>Skills</h2>
          <p className="main">My developer & software skills</p>
        </header>
      </div>
      <div className="innerContainer">
        <article className="infoContainer">
          <h3 className="infoHeadline">About My Abilities</h3>
          <p className="info">
            With a new-found passion in web development, I am looking to improve
            my skills across a diverse range of technologies and tools. My
            growing knowledge in <strong>React</strong> allows me to build
            dynamic and responsive user web apps, while my proficiency in{" "}
            <strong>TypeScript</strong> and <strong>JavaScript</strong> also
            benefits. My journey in software development is complemented by a
            significant hobby interest in tech. I use <strong>Docker</strong>{" "}
            daily to seamlessly containerize and deploy on a server(s). I am
            ample at <strong>GIT</strong>, ensuring smooth collaboration and
            code management. My understanding of back-end enhances my ability to
            work on server-side applications, providing a full-stack development
            perspective. <br /> <br /> Beyond programming, I have a big passion
            in creative design with tools like <strong>Photoshop</strong> for
            designing visuals and <strong>Sony Vegas</strong> for video editing.
            My knowledge of <strong>Linux</strong> systems demonstrates my
            ability to navigate and manage various operating systems
            effectively. Over the years, I am continuously looking to improve my
            skills and embrace new frameworks.
          </p>
          <div className="technologiesSection">
            <h4>Some technologies I have been working with recently</h4>
            <div className="technologiesContainer">
              <div className="technologiesList">
                <ul>
                  {technologiesList1.map((tech) => (
                    <li key={tech.name}>
                      {tech.icon} {tech.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="technologiesList">
                <ul>
                  {technologiesList2.map((tech) => (
                    <li key={tech.name}>
                      {tech.icon} {tech.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
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
                    width: isIntersecting ? `${exp.percentage}%` : "0%",
                    transitionDelay: `${index * 0.1}s`,
                  }}
                ></div>
                <span className="skillPercentage">
                  {isIntersecting ? exp.percentage : 0}%
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
