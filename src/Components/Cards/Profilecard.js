import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Profilecard.css";

class Profilecard extends Component {
  render() {
    const { Ename, Designation, Phone, Email } = this.props;
    return (
      <div class="card-wrapper">
        {/* <div class="heading">MEET THE TEAM</div> */}
        <div class="card">
          <div class="card-img"></div>
          <img
            src=""
            alt="error"
            class="profile-img"
          />
          <h1>{Ename}</h1>
          <div class="details">
            <ul>
              <li>{Designation}</li>
              <li>{Email}</li>
              <li>{Email}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Profilecard;
