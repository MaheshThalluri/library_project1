import React, { Component } from "react";
import "./Profilecard.css";
class Profilecard extends Component {
  render() {
    return (
      <div class="card-wrapper">
        <div class="heading">MEET THE TEAM</div>
        <div class="card">
          <div class="card-img"></div>
          <img
            src="https://wallpapershome.com/images/wallpapers/tiger-2560x1440-muzzle-grin-amur-portrait-934.jpg"
            alt="error"
            class="profile-img"
          />
          <h1>Emp name</h1>
          <div class="details">
            <ul>
              <li>Designation</li>
              <li>abcd@gmail.com</li>
              <li>1234567890</li>
            </ul>
          </div>
        </div>
        <div class="card">
          <div class="card-img"></div>
          <img
            src="https://wallpapershome.com/images/wallpapers/tiger-2560x1440-muzzle-grin-amur-portrait-934.jpg"
            alt="error"
            class="profile-img"
          />
          <h1>Emp name</h1>
          <div class="details">
            <ul>
              <li>Designation</li>
              <li>abcd@gmail.com</li>
              <li>1234567890</li>
            </ul>
          </div>
        </div>
        <div class="card">
          <div class="card-img"></div>
          <img
            src="https://wallpapershome.com/images/wallpapers/tiger-2560x1440-muzzle-grin-amur-portrait-934.jpg"
            alt="error"
            class="profile-img"
          />
          <h1>Emp name</h1>
          <div class="details">
            <ul>
              <li>Designation</li>
              <li>abcd@gmail.com</li>
              <li>1234567890</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Profilecard;
