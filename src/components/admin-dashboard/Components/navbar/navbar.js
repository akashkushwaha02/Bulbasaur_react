import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-items">
        <li className="nav-item">
          <Link to="/" exact>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/project" exact>
            Project
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/team" exact>
            Team
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/user" exact>
            User
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ticket" exact>
            Ticket
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
