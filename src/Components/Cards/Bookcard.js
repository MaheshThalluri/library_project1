import React, { Component } from "react";
import "./Bookcard.css";
class Bookcard extends Component {
  render() {
    return (
      <div>
        <input type="checkbox" id="card-2" />

        <label class="col-md-4 card-container" for="card-2">
          <div class="card-flip">
            <div class="card front">
              <img
                src="https://nikonrumors.com/wp-content/uploads/2014/03/Nikon-1-V3-sample-photo.jpg"
                class="card-img-top img-fluid"
              />

              <h2 class="card-title">Book name</h2>
              <h4 class="card-text text-center pt-2">Dept</h4>
            </div>

            <div class="card back" id="card-back">
              <div class="contents">
                <ul>
                  <li>Author</li>
                  <li>Edition</li>
                  <li>rating</li>
                  <li>Availability</li>
                  <li>
                    <button type="button" class="btn btn-primary text-center">
                      Primary
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </label>
      </div>
    );
  }
}

export default Bookcard;
