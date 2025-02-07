import React from "react";
import "../styles/Navbar.css";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="navbar-brand">
          <a href="/">Movie App</a>
        </div>
        <div className="navbar-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/watchlater" className="nav-link">
            Watch Later
          </NavLink>
          <NavLink to="/watched" className="nav-link">
            Watched
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
