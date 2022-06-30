import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Register from "@components/Register";
import Login from "@components/Login";
import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <Suspense>
        <Router>
          <Routes>
            <Route path="/" element={<div>DASHBOARD</div>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
