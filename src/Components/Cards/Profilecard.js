import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Profilecard.css";

class Profilecard extends Component {
  render() {
    const { Ename, Designation, Phone, Email } = this.props;
    return (
      <section id="authors" class="m-5 text-center">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="info-header mb-5">
                <h1 class="text-primary pb-3">Meet The Authors</h1>
                <p class="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  repudiandae aut quos molestias ut nobis?
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 col-lg-3">
              <div class="card">
                <div class="card-body">
                  <img
                    src="https://images.unsplash.com/photo-1568231358864-1cc44b4e3a26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    class="img-fluid rounded-circle w-50 mb-3"
                  />
                  <h3>Susan Williams</h3>
                  <h5 class="text-muted">Lead Writer</h5>
                  <p class="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur neque veniam corrupti recusandae consequuntur
                    facilis!
                  </p>
                  <div class="d-flex justify-content-center">
                    <div class="p-4">
                      <a href="http://facebook.com">
                        <i class="fab fa-facebook"></i>
                      </a>
                    </div>

                    <div class="p-4">
                      <a href="http://twitter.com">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </div>

                    <div class="p-4">
                      <a href="http://instagram.com">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="card">
                <div class="card-body">
                  <img
                    src="https://images.unsplash.com/photo-1568160400354-aad8a4fd7d59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    class="img-fluid rounded-circle w-50 mb-3"
                  />
                  <h3>Grace Smith</h3>
                  <h5 class="text-muted">Co-Writer</h5>
                  <p class="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur neque veniam corrupti recusandae consequuntur
                    facilis!
                  </p>
                  <div class="d-flex justify-content-center">
                    <div class="p-4">
                      <a href="http://facebook.com">
                        <i class="fab fa-facebook"></i>
                      </a>
                    </div>

                    <div class="p-4">
                      <a href="http://twitter.com">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </div>

                    <div class="p-4">
                      <a href="http://instagram.com">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="card">
                <div class="card-body">
                  <img
                    src="https://images.unsplash.com/photo-1568307033247-a41038449d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    class="img-fluid rounded-circle w-50 mb-3"
                  />
                  <h3>John Doe</h3>
                  <h5 class="text-muted">Editor</h5>
                  <p class="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur neque veniam corrupti recusandae consequuntur
                    facilis!
                  </p>
                  <div class="d-flex justify-content-center">
                    <div class="p-4">
                      <a href="http://facebook.com">
                        <i class="fab fa-facebook"></i>
                      </a>
                    </div>

                    <div class="p-4">
                      <a href="http://twitter.com">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </div>

                    <div class="p-4">
                      <a href="http://instagram.com">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="card">
                <div class="card-body">
                  <img
                    src="https://images.unsplash.com/photo-1568299273577-64c090fb8354?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    class="img-fluid rounded-circle w-50 mb-3"
                  />
                  <h3>Kevin Swansor</h3>
                  <h5 class="text-muted">Designer</h5>
                  <p class="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur neque veniam corrupti recusandae consequuntur
                    facilis!
                  </p>
                  <div class="d-flex justify-content-center">
                    <div class="p-4">
                      <a href="http://facebook.com">
                        <i class="fab fa-facebook"></i>
                      </a>
                    </div>

                    <div class="p-4">
                      <a href="http://twitter.com">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </div>

                    <div class="p-4">
                      <a href="http://instagram.com">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Profilecard;
