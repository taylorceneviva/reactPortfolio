import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        taylorceneviva.design
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/project"
              className={
                window.location.pathname === "/project"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={
                window.location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              contact
            </Link>
          </li>
          <li className="nav-item">
          <a
            className= "nav-link"
            href="https://www.dropbox.com/s/frkiyxbgab9j9r0/ceneviva.resume.pdf?dl=0"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
