// src/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Login.css'

const Login = () => {
  const [rollNumber, setRollNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example validation (replace with actual validation logic)
    if (rollNumber === "student" && password === "student") {
      // Redirect to the Home page on successful login
      navigate("/home");
    } else {
      alert("Invalid roll number or password");
    }
  };

  return (
    <div className="login-container">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2>Student Login</h2>
          <div className="input-field">
            <input
              type="text"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              required
            />
            <label>Enter roll number</label>
          </div>
          <div className="input-field">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Enter password</label>
          </div>
          <br />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
