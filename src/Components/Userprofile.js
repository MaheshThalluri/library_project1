import React, { Component } from "react";
import Navbar from "../layout/Navbar";
class Userprofile extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section id="profile">
          <div class="container">
            <div class="row">
              <div class="col-md-9" style={{ width: "100%" }}>
                <div class="card ">
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
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Sint neque dolorem delectus eum accusantium fuga
                          consequuntur iusto, ad, soluta voluptatum doloribus
                          voluptate rem ducimus recusandae itaque culpa facilis
                          dolores aliquam perferendis maiores deserunt at
                          nesciunt. Reprehenderit doloribus dignissimrecusandae?
                          Doloremque commodi molestias, dolor minima quas enim
                          beatae fuga ipsa.
                        </textarea>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <h3>Your Avatar</h3>
                <img
                  src="img/avatar.png"
                  alt=""
                  class="d-block img-fluid mb-3"
                />
                <button class="btn-primary btn-block">Edit Image</button>
                <button class="btn-danger btn-block">Delete Image</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Userprofile;
