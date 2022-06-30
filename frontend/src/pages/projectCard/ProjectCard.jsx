import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import projects from "../../dummyData.json";
import ProgressBar from "../../components/progressbar/ProgressBar";
import "./ProjectCard.css";

function ProjectCard() {
  return (
    <div className="project-card">
      <div className="container-project-card">
        <h4 className="header-title">
          <FontAwesomeIcon
            className="icon-project"
            icon="fa-solid fa-computer"
          />
          {projects.projects[0].name}
        </h4>

        <div className="project-description">
          <div className="project-description-left">
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
              <span>{projects.projects[0].progress}%</span>
              <ProgressBar
                bgcolor={"#e77620"}
                completed={projects.projects[0].progress}
              />
            </p>
            <p>
              <FontAwesomeIcon
                className="icon-project"
                icon="fa-solid fa-calendar-days"
              />{" "}
              Start Date:
              <span>{projects.projects[0].startingDate}</span>
            </p>
            <p>
              <FontAwesomeIcon
                className="icon-project"
                icon="fa-solid fa-calendar-check"
              />
              Duriation:
              <span>{projects.projects[0].duration}</span>
            </p>
          </div>
          <div className="project-description-right">
            <p>
              <FontAwesomeIcon
                className="icon-project"
                icon="fa-solid fa-box-archive"
              />{" "}
              Category:
              <span>{projects.projects[0].field}</span>
            </p>
            <p>
              <FontAwesomeIcon
                className="icon-project"
                icon="fa-solid fa-chalkboard-user"
              />
              Technologies:
              {projects.projects[0].techStack.map((items) => (
                <span> {items}, </span>
              ))}
            </p>
            <p>
              <FontAwesomeIcon
                className="icon-project"
                icon="fa-solid fa-handshake"
              />
              partners:
              {projects.projects[0].partners.map((items) => (
                <span> {items}, </span>
              ))}
            </p>
            <p>
              <FontAwesomeIcon
                className="icon-project"
                icon="fa-solid fa-list-check"
              />
              status: <span>{projects.projects[0].status}</span>
            </p>
          </div>
        </div>
        <div className="project-description">
          <div className="project-description-left second">
            <p className="title-project-description">
              <FontAwesomeIcon
                className="icon-project"
                icon="fa-solid fa-book-open"
              />{" "}
              Project Description:
            </p>
            <span>{projects.projects[0].description}</span>
          </div>

          <div className="project-description-right">
            <p className="title-project-description">
              <FontAwesomeIcon
                className="icon-project"
                icon="fa-solid fa-user-tie"
              />
              Open Positions:
            </p>
            <div>
              {projects.projects[0].openPositions.map((items) => (
                <span>{items},</span>
              ))}
            </div>
          </div>
        </div>
        <div className="button-container">
          <Link to="/" className="button-apply">
            Apply Job <FontAwesomeIcon icon="fa-solid fa-angle-right" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
