import AddProject from "@components/AddProject/AddProject";
import Login from "@components/Login/Login";
import Navbar from "@components/Navbar/Navbar";
import ProjectsTable from "@components/ProjectsTable";
import Register from "@components/Register/Register";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import ApplyToProjectModal from "@components/ApplyToProjectModal/ApplyToProjectModal";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import ProjectCard from "@pages/projectCard/ProjectCard";
import PageHeader from "@components/PageLayout/PageHeader";

// import projectsAtom from "@recoil/projects";

import "./App.css";
// import dummyData from "./dummyData.json";

// const initializeData = ({ set }) => {
//   set(projectsAtom, dummyData.projects);
// };

library.add(fas);
function App() {
  let project = {
    name: "hackathon",
    location: "Berlin",
    field: "pharmaceutical",
    progress: 20,
    techStack: ["react", "node", "typescript"],
    partners: ["IBM", "Intel"],
    status: "string",
    description: "relational database for all clients",
    openPositions: ["Developer", "QA"],
    projectInfo: { Figma: "", Github: "" },
    startingDate: "1st jan 2022",
    duration: "5 months",
  };
  return (
    <RecoilRoot>
      {/* <RecoilRoot initializeState={initializeData}> */}
      <PageHeader />
      <Router>
        <Routes>
          <Route path="/" element={<ProjectsTable />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/project" element={<ProjectCard project={project} />} />
          <Route path="/addproject" element={<AddProject />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route
            path="/ApplyToProjectModal"
            element={<ApplyToProjectModal />}
          />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
