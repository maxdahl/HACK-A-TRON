import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ProgressBar from "../../components/progressbar/ProgressBar";
import "./ProjectCard.css";

function ProjectCard({ project, onClose }) {
  return (
    <>
      <div style={{ width: "90%", textAlign: "right" }}>
        <Button
          sx={{
            mt: { xs: 2, md: 0, color: "#0A1E30" },
          }}
          /*           onClick={navigateToClientOverview} */
          variant="outlined"
          startIcon={<ArrowBackIcon fontSize="small" />}
          onClick={onClose}
        >
          Back to Project Overview
        </Button>
      </div>
      <div className="project-card">
        <div className="container-project-card">
          <h4 className="header-title">
            <FontAwesomeIcon
              className="icon-project"
              icon="fa-solid fa-computer"
            />
            {project.name}
          </h4>

          <div className="project-description">
            <div className="project-description-left">
              <p>
                <FontAwesomeIcon
                  className="icon-project"
                  icon="fa-solid fa-location-dot"
                />
                Location:
                <span>{project.location}</span>
              </p>
              <p>
                <FontAwesomeIcon
                  className="icon-project"
                  icon="fa-solid fa-bars-progress"
                />
                Progress:
                <span>{project.progress}%</span>
                <ProgressBar bgcolor="#e77620" completed={project.progress} />
              </p>
              <p>
                <FontAwesomeIcon
                  className="icon-project"
                  icon="fa-solid fa-calendar-days"
                />{" "}
                Start Date:
                <span>{project.startingDate}</span>
              </p>
              <p>
                <FontAwesomeIcon
                  className="icon-project"
                  icon="fa-solid fa-calendar-check"
                />
                Duriation:
                <span>{project.duration}</span>
              </p>
            </div>
            <div className="project-description-right">
              <p>
                <FontAwesomeIcon
                  className="icon-project"
                  icon="fa-solid fa-box-archive"
                />{" "}
                Category:
                <span>{project.field}</span>
              </p>
              <p>
                <FontAwesomeIcon
                  className="icon-project"
                  icon="fa-solid fa-chalkboard-user"
                />
                Technologies:
                {project.techStack.map((items) => (
                  <span> {items}, </span>
                ))}
              </p>
              <p>
                <FontAwesomeIcon
                  className="icon-project"
                  icon="fa-solid fa-handshake"
                />
                partners:
                {project.partners.map((items) => (
                  <span> {items}, </span>
                ))}
              </p>
              <p>
                <FontAwesomeIcon
                  className="icon-project"
                  icon="fa-solid fa-list-check"
                />
                status: <span>{project.status}</span>
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
              <span>{project.description}</span>
            </div>
          </div>
          <div className="button-container">
            <Link to="/" className="button-apply">
              Apply Job <FontAwesomeIcon icon="fa-solid fa-angle-right" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProjectCard;
