import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = props => {
  const { branding } = props;
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top py-0 "
        style={{ "border-bottom": "#008ed6 3px solid" }}
      >
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto text-success">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Departments
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item " href="#">
                  CSE
                </a>
                <a className="dropdown-item" href="#">
                  ECE
                </a>
                <a className="dropdown-item" href="#">
                  IT
                </a>
                <a className="dropdown-item" href="#">
                  EEE
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-user"></i> UserName
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  <i class="fas fa-user-circle"></i> Profile
                </a>
                <a className="dropdown-item" href="#">
                  <i class="fas fa-user-times"> Log out</i>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
