import React from "react";
import "../styles/WorkEducation.css";

const WorkEducation = () => {
  return (
    <div className="workEducation">
      <div className="me">
        <h2>History</h2>
        <p className="main">My work and education history</p>
      </div>
      <section id="workEducation" className="workEducationSection">
        <h2 className="workTitle">Job</h2>
        <div className="job">
          <h3>Lokalvårdare Vikarie</h3>
          <p>Umeå Städservice | 2015 - Present</p>
        </div>
        <div className="job">
          <h3>Medarbetare Mjölkbehandlingsavdelning</h3>
          <p>Norrmejerier | 2023</p>
        </div>
        <div className="job">
          <h3>Vaktmästare</h3>
          <p>Sandviks Idrottsplan | 2014</p>
        </div>
        <div className="job last">
          <h3>Butiksmedarbetare</h3>
          <p>Coop Konsum Holmsund | 2013</p>
        </div>
      </section>

      <section className="workEducationSection">
        <h2 className="educationTitle">Education</h2>
        <div className="education">
          <h3>Fullstack JavaScript Extended </h3>
          <p>Chas Academy | 2023 - 2025</p>
        </div>
        <div className="education">
          <h3>Dator- och Kommunikationsteknik</h3>
          <p>Viva Vägledning Vuxenutbildning | 2016 - 2018</p>
        </div>
        <div className="education">
          <h3>El- och Energiprogrammet </h3>
          <p>Dragonskolan | 2014 - 2015</p>
        </div>
      </section>
    </div>
  );
};

export default WorkEducation;
