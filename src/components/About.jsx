import React from "react";
import "../styles/About.css";

// Calculate my age
const calculateAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDifference = today.getMonth() - birth.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birth.getDate())
  ) {
    age--;
  }

  return age;
};

const About = () => {
  const age = calculateAge("1996-05-02");

  return (
    <section className="container" id="about">
      <div className="aboutMe">
        <h2 className="about">About Me</h2>
        <p className="main">Main information about me</p>
      </div>
      <article className="information">
        <h3 className="infoHeadline">
          I'm Johan, <span>Web Developer</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
          consequuntur atque aliquam, id ea quod facilis maxime harum dolorum
          totam magnam praesentium dolores dolore illum deleniti quia.
          Praesentium, distinctio non.
        </p>
        <div className="list">
          <ul className="infoList">
            <li className="infoItem">
              <span className="label">Age:</span>
              <span className="value">{age}</span>
            </li>
            <li className="infoItem">
              <span className="label">City:</span>
              <span className="value">Umeå</span>
            </li>
            <li className="infoItem">
              <span className="label">Hobbies:</span>
              <span className="value">
                Tech, TV, Movies, Gaming, Servers, Music
              </span>
            </li>
            <li className="infoItem">
              <span className="label">Mail:</span>
              <span className="value">johan.soderlund96@gmail.com</span>
            </li>
            <li className="infoItem">
              <span className="label">Phone:</span>
              <span className="value">073 - 029 33 92</span>
            </li>
          </ul>
        </div>
        <div className="buttons">
          <a href="/resume.docx" download>
            <button>Download CV</button>
          </a>
          <a href="#contact">
            <button>Send Message</button>
          </a>
        </div>
      </article>
    </section>
  );
};

export default About;
