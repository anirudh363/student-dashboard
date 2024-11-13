// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import Login from "./components/Login";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Attendance from "./pages/Attendance";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
