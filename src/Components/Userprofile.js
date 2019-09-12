import React, { Component } from "react";
import PropTypes from "prop-types";
import Navbar from "../layout/Navbar";
import Footer from "./Footer";
class Userprofile extends Component {
  state = {
    Username: "",
    Phone: "",
    Fullname: "",
    Email: "",
    Password: "",
    Department: "",
    Id: ""
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const {
      Username,
      Phone,
      Fullname,
      Email,
      Password,
      Department,
      Id
    } = this.state;
    return (
      <div>
        <Navbar />
        <div class="container mt-5 ">
          <div class="row">
            <div class="col-md-9">
              <div class="card">
                <div class="card-header">
                  <h4>Profile</h4>
                </div>
                <div class="card-body">
                  <form onSubmit={this.onSubmit}>
                    <div className="row">
                      <div className="col-6">
                        <div class="form-group">
                          <label for="Username">Username</label>
                          <input
                            type="text"
                            class="form-control"
                            name="Username"
                            value={Username}
                            onChange={this.onChange}
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div class="form-group">
                          <label for="Phone">Phone</label>
                          <input
                            type="number"
                            class="form-control"
                            name="Phone"
                            value={Phone}
                            onChange={this.onChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label for="Fullname">Full Name</label>
                      <input
                        type="text"
                        class="form-control"
                        value={Fullname}
                        name="Fullname"
                        onChange={this.onChange}
                      />
                    </div>
                    <div class="form-group">
                      <label for="Email">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        name="Email"
                        onChange={this.onChange}
                      />
                    </div>
                    <div class="form-group">
                      <label for="Password">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        value={Password}
                        name="Password"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div class="form-group">
                          <label for="Department">Department</label>
                          <input
                            type="text"
                            name="Department"
                            class="form-control"
                            placeholder="Enter Full Form"
                            value={Department}
                            onChange={this.onChange}
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div class="form-group">
                          <label for="Id">College Id</label>
                          <input
                            type="text"
                            name="Id"
                            class="form-control"
                            value={Id}
                            onChange={this.onChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <input
                        type="submit"
                        value="Update Profile"
                        class="form-control   btn-success btn-lg btn-block"
                        style={{ width: "25%", margin: "auto" }}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <h3>Your Avatar</h3>
              <img
                src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.unsplash.com%2Fphoto-1503212556734-c0ca0c49c8b0%3Fixlib%3Drb-0.3.5%26q%3D80%26fm%3Djpg%26crop%3Dentropy%26cs%3Dtinysrgb%26w%3D1080%26fit%3Dmax%26s%3D0ca6dbc6e8edeb025af17adc96b728cb&f=1&nofb=1"
                alt="Hello"
                class="d-block img-fluid mb-3"
              />
              <button class="btn-primary btn-block">Edit Image</button>
            </div>
          </div>
        </div>
        <h1 class="text-center display-4 mt-5">History</h1>
        <table className="table container mt-2 mb-3">
          <thead className="thead-dark">
            <tr>
              <th>S.No</th>
              <th>Book Id</th>
              <th>Book Name</th>
              <th>Issue Date</th>
              <th>Submission Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tr>
            <th scope="row">1</th>
            <td>cs001</td>
            <td>C Programming</td>
            <td>3-7-2019</td>
            <td>18-7-2019</td>
            <td>Submitted</td>
          </tr>
        </table>
        <Footer />
      </div>
    );
  }
}

export default Userprofile;
