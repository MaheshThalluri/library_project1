import "./Login.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../node_modules/fontawesome";
// import App2 from "../App2";
import { withRouter } from "../../node_modules/react-router";

class Login1 extends Component {
  state = {
    sign_in: "true",
    signINemail: "",
    signINpassword: "",
    signUPusername: "",
    signUPemail: "",
    signUPpassword: "",
    signUPnumber: "",
    leftPanel: false,
    rightPanel: true,
    validsignIN: true,
    validsignUP: true
  };
  signINinputListener = e => {
    e.preventDefault();
    if (e.target.id === "email") this.setState({ signINemail: e.target.value });
    if (e.target.id === "password")
      this.setState({ signINpassword: e.target.value });
  };
  signUPinputListener = e => {
    e.preventDefault();
    if (e.target.id === "username")
      this.setState({ signUPusername: e.target.value });
    if (e.target.id === "email") this.setState({ signUPemail: e.target.value });
    if (e.target.id === "password")
      this.setState({ signUPpassword: e.target.value });
    if (e.target.id === "number")
      this.setState({ signUPnumber: e.target.value });
  };
  signINsubmit = () => {
    console.log(this.state);
    // this.props.history.push("/home");
  };
  signUPsubmit = () => {
    /*number_re=/[6-9][0-9]{9}/;
     email_re=/Y*/
    console.log(this.state);
    //this.props.history()
  };
  changePanel = () => {
    this.setState({ sign_in: !this.state.sign_in });
  };
  render() {
    return (
      <div>
        {this.state.sign_in ? (
          <div className="container" id="container">
            <div className="form-container sign-up-container">
              <form action="#" onSubmit={this.signINsubmit}>
                <h1>Create Account</h1>
                <div className="social-container">
                  <Link to="/" className="social">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="/" className="social">
                    <i className="fab fa-google-plus-g"></i>
                  </Link>
                  <Link to="/" className="social">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </div>
                <span>or use your email for registration</span>
                <input
                  type="text"
                  placeholder="Name"
                  onChange={this.signUPinputListener}
                />
                <input
                  type="email"
                  placeholder="College Email"
                  onChange={this.signUPinputListener}
                />
                <input
                  type="number"
                  placeholder="number"
                  onChange={this.signUPinputListener}
                />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={this.signUPinputListener}
                />
                <button>Sign Up</button>
              </form>
            </div>

            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-right">
                  <h1>Welcome Back!</h1>
                  <p>
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <button
                    className="ghost"
                    id="signIn"
                    onClick={this.changePanel}
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container" id="container">
            <div className="form-container sign-in-container">
              <form action="#" onSubmit={this.signUPsubmit}>
                <h1>Sign in</h1>
                <div className="social-container">
                  <Link to="/" className="social">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="/" className="social">
                    <i className="fab fa-google-plus-g"></i>
                  </Link>
                  <Link to="/" className="social">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </div>
                <span>or use your account</span>
                <input
                  type="text"
                  placeholder="Email"
                  onChange={this.signINinputListener}
                />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={this.signINinputListener}
                />
                <Link to="/">Forgot your password?</Link>
                <button>Sign In</button>
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-right">
                  <h1>Hello, Friend!</h1>
                  <p>Enter your personal details and start journey with us</p>
                  <button
                    className="ghost"
                    id="signUp"
                    onClick={this.changePanel}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* <startPage /> */}
      </div>
    );
  }
}

export default Login1;
