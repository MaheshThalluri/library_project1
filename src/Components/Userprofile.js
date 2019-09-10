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
            <div class="card">
              <div class="card-header">
                <h4>Edit Profile</h4>
              </div>
              <div class="card-body">
                <form>
                  <div class="form-group">
                    <label for="Name">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      value="Brad Traversy"
                    />
                  </div>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      value="test@gmail.com"
                    />
                  </div>
                  <div class="form-group">
                    <label for="bio">Bio</label>
                    <textarea class="form-control" name="editor1">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Sint neque dolorem delectus eum accusantium fuga
                      consequuntur iusto, ad, soluta voluptatum doloribus
                      voluptate rem ducimus recusandae itaque culpa facilis
                      dolores aliquam perferendis maiores deserunt at nesciunt.
                      Reprehenderit doloribus dignissimrecusandae? Doloremque
                      commodi molestias, dolor minima quas enim beatae fuga
                      ipsa.
                    </textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <img src="../Images/avatar.png" alt="" class="img-fluid mb-3" />
            <button class="btn-primary btn-block">Edit Image</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Userprofile;
