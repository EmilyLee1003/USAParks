import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/search"
              className={
                window.location.pathname === "/search" || window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/profile"
              className={
                window.location.pathname === "/profile" || window.location.pathname === "/profile"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
            My Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
