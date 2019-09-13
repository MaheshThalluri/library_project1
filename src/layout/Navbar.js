import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../Components/context";
import React, { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { User } = { ...value };
          console.log("hi", User);
          return (
            <React.Fragment>
              <nav
                className="navbar navbar-expand-sm navbar-dark bg-dark py-0 "
                style={{ "border-bottom": "#008ed6 3px solid" }}
              >
                <a className="navbar-brand ml-5" href="#">
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

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto text-success">
                    <li className="nav-item active">
                      <a className="nav-link" href="/Home">
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/about">
                        About
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="/departments"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Departments
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <a className="dropdown-item " href="/departments/cse">
                          CSE
                        </a>
                        <a className="dropdown-item" href="/departments/ece">
                          ECE
                        </a>
                        <a className="dropdown-item" href="/departments/it">
                          IT
                        </a>
                        <a className="dropdown-item" href="/departments/eee">
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
                        <i className="fa fa-user"></i>
                        {User}
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <a className="dropdown-item" href="/userprofile">
                          <i class="fas fa-user-circle"></i> Profile
                        </a>
                        <a className="dropdown-item" href="/">
                          <i class="fas fa-user-times"> Log out</i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Navbar;
