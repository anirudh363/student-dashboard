import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/Navbar.css'
import logoImage from "../assets/logo.jpg"; // Update the path to your logo image

const Navbar = () => {
  const navigate = useNavigate(); // Hook from react-router-dom to navigate programmatically

  const handleLogout = () => {
    navigate("/"); // Redirect to login page
  };

  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          {/* Redirects to Home page when logo is clicked */}
          <Link to="/home">
            <img src={logoImage} alt="Logo" className="logo-img" />
          </Link>
        </div>

        <ul className="nav-links">
          {/* Logout button */}
          <li>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>

          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
