import AddProject from "@components/AddProject/AddProject";
import Login from "@components/Login/Login";
import ProjectsTable from "@components/ProjectsTable";
import Register from "@components/Register/Register";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import SimilarProjectsTable from "@components/SimilarProjectsTable";
import ProjectCard from "@pages/projectCard/ProjectCard";
/* import PageHeader from "@components/PageLayout/PageHeader";
 */
// import projectsAtom from "@recoil/projects";

import "./App.css";
// import dummyData from "./dummyData.json";

// const initializeData = ({ set }) => {
//   set(projectsAtom, dummyData.projects);
// };

library.add(fas);
function App() {
  const project = {
    name: "Apside",
    location: "Berlin",
    field: "pharmaceutical",
    progress: 20,
    techStack: ["react", "node", "typescript"],
    partners: ["IBM", "Intel"],
    status: "Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet finibus quam, a feugiat nunc volutpat sed. Vivamus in tellus egestas, feugiat sapien non, volutpat tellus. Vestibulum odio nulla, rhoncus quis velit eu, scelerisque fringilla eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed dictum felis. Etiam malesuada neque sit amet odio pellentesque sagittis. Aliquam consequat posuere ornare. ",
    openPositions: ["Developer", "QA"],
    projectInfo: { Figma: "", Github: "" },
    startingDate: "1st jan 2022",
    duration: "5 months",
  };
  return (
    <RecoilRoot>
      {/* <RecoilRoot initializeState={initializeData}> */}
      {/*       <PageHeader /> */}
      <Router>
        <Routes>
          <Route path="/" element={<ProjectsTable />} />
          <Route path="/project" element={<ProjectCard project={project} />} />
          <Route path="/similar-projects" element={<SimilarProjectsTable />} />
          <Route path="/addproject" element={<AddProject />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
