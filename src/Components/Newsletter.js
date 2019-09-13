import React, { Component } from "react";

class Newsletter extends Component {
  render() {
    return (
      <div
        id="carouselExampleControls"
        class="carousel slide bg-secondary py-5"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <h1 class="text-center">Library News</h1>
            <p className="lead text-center text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              consectetur.
            </p>
          </div>
          <div class="carousel-item">
            <h1 class="text-center">Library News</h1>
            <p className="lead text-center text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              consectetur.
            </p>
          </div>
          <div class="carousel-item">
            <h1 class="text-center">Library News</h1>
            <p className="lead text-center text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              consectetur.
            </p>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Newsletter;
