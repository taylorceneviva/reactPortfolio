import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg container-fluid"
    style={{backgroundColor:"#F2E4DF"}}
    >
      <Link
        className="navbar-brand"
        style={{fontFamily: "Fjalla One, sans-serif", color:"#CEBEBA"}}
        to="/"
      >
        taylorceneviva.design
      </Link>
      <div className="col-6 container-fluid">
        <ul
          className="navbar-nav"
          style={{ fontFamily: "Montserrat, sans-serif", color:"#CEBEBA"}}
        >
          <li className="nav-item">
            <Link style={{color:"#CEBEBA"}}
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
            <Link style={{color:"#CEBEBA"}}
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
            <Link style={{color:"#CEBEBA"}}
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
              className="nav-link"style={{color:"#CEBEBA"}}
              href="https://www.dropbox.com/s/frkiyxbgab9j9r0/ceneviva.resume.pdf?dl=0"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
      <div className="col-2 container-fluid">
        <ul>
          <ul className="nav-item">
            <a
              className="nav-link" style={{color:"#CEBEBA"}}
              href="https://github.com/taylorceneviva"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </ul>
          <ul className="nav-item">
            <a
              className="nav-link" style={{color:"#CEBEBA"}}
              href="https://www.linkedin.com/in/taylorceneviva/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </ul>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
