/* import AddOrder from "@components/order/form"; */
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "@pages/projectCard/ProjectCard";
import { RecoilRoot } from "recoil";

import "./App.css";

library.add(fas);
function App() {
  return (
    <RecoilRoot>
      <Suspense>
        <Router>
          <Routes>
            <Route path="/" element={<div>DASHBOARD</div>} />
            <Route path="/project" element={<ProjectCard />} />
          </Routes>
        </Router>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
