import React from "react";

const Header = () => {
  return (
    <header className="header-left" id="navbar-collapse-toggle">
      <div className="scroll-bar">
        <div className="hl-top">
          <div className="hl-logo">
            <a href="../index.html">N</a>
          </div>
        </div>
        <ul className="nav nav-menu">
          <li>
            <a
              className="nav-link active"
              href="#home"
              data-toggle="tooltip"
              title="HOME"
            >
              <i className="fas fa-house-damage"></i>
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#about"
              data-toggle="tooltip"
              title="ABOUT"
            >
              <i className="far fa-address-card"></i>
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#resume"
              data-toggle="tooltip"
              title="RESUME"
            >
              <i className="far fa-file"></i>
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#work"
              data-toggle="tooltip"
              title="WORK"
            >
              <i className="fas fa-briefcase"></i>
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#blog"
              data-toggle="tooltip"
              title="BLOG"
            >
              <i className="fas fa-blog"></i>
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#contactus"
              data-toggle="tooltip"
              title="CONTACT"
            >
              <i className="fas fa-id-card-alt"></i>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
