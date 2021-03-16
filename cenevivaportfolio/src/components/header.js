import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
      <a className="navbar-brand" href="/" style={{fontSize: "18px"}}>
        taylorceneviva.design
      </a>
      <a className="nav-item" href="/">
        Projects
      </a>
      <a className="nav-item" href="/">
        Contacts
      </a>
      <a className="nav-item" href="/">
        Resume
      </a>
      </div>
    </nav>
  );
}

export default Navbar;
