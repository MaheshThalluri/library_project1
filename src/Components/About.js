import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../layout/Navbar";
import Profilecard from "./Cards/Profilecard";
import Footer from "./Footer";

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="row mt-5 pt-5 ml-3">
          <div className="col-md-4 ">
            <h1>Missson & Vision</h1>
            <ul className="list-unstyled pt-3">
              <li>
                <h6>Lorem ipsum dolor sit amet.</h6>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, non veniam placeat ex rem consectetur.
                </p>
              </li>
              <li>
                <h6>Lorem ipsum dolor sit amet.</h6>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, non veniam placeat ex rem consectetur.
                </p>
              </li>
            </ul>
          </div>
          <div className="col-md-8">
            <h1 className="mb-4">About Us</h1>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio,
              ratione.
            </h4>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              et. Ea, aut nihil nemo sint laudantium, tenetur tempore reiciendis
              aspernatur nobis laboriosam dicta? Cumque voluptates ipsam, omnis
              adipisci tempora possimus. Sed, non error! Praesentium facere,
              maxime quia, explicabo quidem temporibus vero asperiores culpa
              corporis, harum delectus omnis repellat commodi. Minus?
            </p>
            <button className="btn btn-danger btn-lg ml-5">Read More</button>
          </div>
        </div>
        <Profilecard />
        <div className="row ml-3 mr-2">
          <div className="col-md-8">
            <h1 className="text-secondary text-center  mt-2">Statistics</h1>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>S.No</th>
                  <th>Department</th>
                  <th>No.of Copies</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>CSE</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>ECE</td>
                  <td>200</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>IT</td>
                  <td>300</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>EEE</td>
                  <td>400</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Chemical</td>
                  <td>500</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Mechanical</td>
                  <td>600</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Civil</td>
                  <td>700</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-4">
            <h1 class="text-center">No.of Books</h1>
            <h4 class=" mt-5">2017</h4>
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h3 class=" mt-5">2018</h3>
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped bg-success"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h3 class=" mt-5 pt-3">2019</h3>
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped bg-danger"
                role="progressbar"
                style={{ width: "95%" }}
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
