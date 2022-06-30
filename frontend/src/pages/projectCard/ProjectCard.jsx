import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import projects from "../../dummyData.json";
import "./ProjectCard.css";

function ProjectCard() {
  console.log(projects.projects[0].name);
  return (
    <section className="project-card">
      <div className="container">
        <h2 className="header-title">
          <FontAwesomeIcon
            className="icon-project"
            icon="fa-solid fa-computer"
          />
          {projects.projects[0].name}
        </h2>

        <div className="project-description">
          <p>
            <FontAwesomeIcon
              className="icon-project"
              icon="fa-solid fa-location-dot"
            />
            Location:
            <span>{projects.projects[0].location}</span>
          </p>
          <p>
            <FontAwesomeIcon
              className="icon-project"
              icon="fa-solid fa-bars-progress"
            />
            Progress:
            <span>{projects.projects[0].progress}</span>
          </p>
          <p>
            <FontAwesomeIcon
              className="icon-project"
              icon="fa-solid fa-user-tie"
            />
            openPositions:
            {projects.projects[0].openPositions.map((items) => (
              <span> {items}, </span>
            ))}
          </p>
          <p>
            <FontAwesomeIcon
              className="icon-project"
              icon="fa-solid fa-chalkboard-user"
            />
            techStack:
            <span>
              {projects.projects[0].techStack.map((items) => (
                <span> {items}, </span>
              ))}
            </span>
          </p>
          <p>
            <FontAwesomeIcon
              className="icon-project"
              icon="fa-solid fa-handshake"
            />
            partners:
            <span>
              {projects.projects[0].partners.map((items) => (
                <span> {items}, </span>
              ))}
            </span>
          </p>
          <p>
            <FontAwesomeIcon
              className="icon-project"
              icon="fa-solid fa-list-check"
            />
            status: <span>{projects.projects[0].status}</span>
          </p>
        </div>
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
