import React from "react";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink href="/">Movie App</NavLink>
      </div>
      <div className="navbar-links">
        <NavLink href="/" className="nav-link">
          Home
        </NavLink>
        <NavLink href="/favorites" className="nav-link">
          Favorites
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
