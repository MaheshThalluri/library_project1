import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="bg-dark text-center pt-1 pb-1">
        <div class="row align-items-center">
          <div class="col text-white" style={{ fontSize: "25px" }}>
            Library
          </div>
          <div class="col">
            <p className="lead text-white">Copyrights Are &copy; Reserved </p>
          </div>
          <div class="col text-white">
            <i className="fab fa-facebook fa-2x mr-3 text-primary"></i>
            <i className="fab fa-instagram fa-2x mr-3 text-warning"></i>
            <i className="fab fa-twitter fa-2x text-primary"></i>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
