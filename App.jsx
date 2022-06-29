import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <Suspense>
        <Router>
          <Routes>
            <Route path="/" element={<div>DASHBOARD</div>} />
          </Routes>
        </Router>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
