import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProjectCard.css";

function ProjectCard() {
  return (
    <section className="project-card">
      <div className="container">
        <h2 className="header-title">Project Details</h2>
        <div className="project-details" />
        <div className="button-container">
          <Link to="/" className="button-apply">
            Apply Job <FontAwesomeIcon icon="fa-solid fa-angle-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}
export default ProjectCard;
