import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import AddOrder from "@components/order/form";
import ProjectsTable from "@components/ProjectsTable";

import projectsAtom from "@recoil/projects";

import "./App.css";
import dummyData from "./dummyData.json";

const initializeData = ({ set }) => {
  set(projectsAtom, dummyData.projects);
};

function App() {
  return (
    <RecoilRoot initializeState={initializeData}>
      <Router>
        <Routes>
          <Route path="/" element={<AddOrder />} />
          <Route path="/projects" element={<ProjectsTable />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
