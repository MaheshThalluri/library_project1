import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../Components/context";
import React, { Component } from "react";
class Navbar extends Component {
  state = {
    Home: "nav-item ",
    About: "nav-item",
    Departments: "nav-item",
    User: "nav-item"
  };
  listener = e => {
    // e.preventDefault();
    this.setState({ Home: "nav-item" });
    this.setState({ About: "nav-item" });
    this.setState({ Departments: "nav-item" });
    this.setState({ User: "nav-item" });
    // console.log(e.target.id);
    // console.log("chandu");
    if (e.target.id === "Home") this.setState({ Home: "nav-item active" });
    if (e.target.id === "About") this.setState({ About: "nav-item active" });
    // console.log(this.state);
  };
  render() {
    return (
      <Consumer>
        {value => {
          const { User } = { ...value };
          // console.log("hi", User);
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
                    <li className={this.state.Home}>
                      <a
                        className="nav-link"
                        href="/Home"
                        id="Home"
                        onClick={this.listener}
                      >
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className={this.state.About}>
                      <a
                        className="nav-link"
                        href="/about"
                        id="About"
                        onClick={this.listener}
                      >
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
                        id="Departments"
                        // onClick={this.listener}
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
                        id="user"
                        // onClick={this.listener}
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
