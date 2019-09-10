import React, { Component } from "react";
import Navbar from "../layout/Navbar";
class Userprofile extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class="row mt-5 pt-5">
          <div class="col-md-3">
            <a href="index.html" class="btn btn-light btn-block">
              <i class="fas fa-arrow-left"></i> Back To Dashboard
            </a>
          </div>
          <div class="col-md-3">
            <a href="index.html" class="btn btn-success btn-block">
              <i class="fas fa-lock"></i> Change Password
            </a>
          </div>
          <div class="col-md-3">
            <a href="index.html" class="btn btn-danger btn-block">
              <i class="fas fa-trash"></i> Delete Account
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
            <h1 class="text-center">
              <i className="fas fa-user"></i> Profile
            </h1>
          </div>
          <div className="col-md-3">
            <h3>Your Avatar</h3>
            <img
              src="../Images/avatar.png"
              alt="Hello"
              class="d-block img-fluid mb-3"
            />
            <button class="btn-primary btn-block ">Edit Image</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Userprofile;
