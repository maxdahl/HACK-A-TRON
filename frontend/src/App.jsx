import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "@pages/projectCard/ProjectCard";
import { RecoilRoot } from "recoil";

import AddOrder from "@components/order/form";
import ProjectsTable from "@components/ProjectsTable";

import projectsAtom from "@recoil/projects";

import "./App.css";
import dummyData from "./dummyData.json";

const initializeData = ({ set }) => {
  set(projectsAtom, dummyData.projects);
};

library.add(fas);
function App() {
  return (
<<<<<<< HEAD
    <RecoilRoot>
      <Suspense>
        <Router>
          <Routes>
            <Route path="/" element={<div>DASHBOARD</div>} />
            <Route path="/project" element={<ProjectCard />} />
            <Route path="/" element={<AddOrder />} />
          </Routes>
        </Router>
      </Suspense>
=======
    <RecoilRoot initializeState={initializeData}>
      <Router>
        <Routes>
          <Route path="/" element={<AddOrder />} />
          <Route path="/projects" element={<ProjectsTable />} />
        </Routes>
      </Router>
>>>>>>> 9ca7c52d6628f4b4409f5b82adadc68d226561d1
    </RecoilRoot>
  );
}

export default App;
