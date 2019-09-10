import "./Login.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Home } from "./Home";
import FormValidator from "./FormValidator";
class Login1 extends Component {
    constructor(){
       super();
  this.validator = new FormValidator([
      {
        field: 'email',
        method: 'isEmpty',
        validWhen: false,
        message: 'Email is required.'
      },
      {
        field: 'email',
        method: 'isEmail',
        validWhen: true,
        message: 'That is not a valid email.'
      },
      {
        field: 'phone',
        method: 'isEmpty',
        validWhen: false,
        message: 'Pleave provide a phone number.'
      },
      {
        field: 'phone',
        method: 'matches',
        args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/], // args is an optional array of arguements that will be passed to the validation method
        validWhen: true,
        message: 'That is not a valid phone number.'
      },
      {
        field: 'password',
        method: 'isEmpty',
        validWhen: false,
        message: 'Password is required.'
      },
      {
        field: 'password_confirmation',
        method: 'isEmpty',
        validWhen: false,
        message: 'Password confirmation is required.'
      },
      {
        field: 'password_confirmation',
        method: this.passwordMatch,   // notice that we are passing a custom function here
        validWhen: true,
        message: 'Password and password confirmation do not match.'
      }
    ]);
    this.submitted = false;
    this.state = {
    sign_in: "true",
    signIN:{
        email: "",
        password: ""
    },
    signUP:{
        username: "",
        email: "",
        password: "",
        collegeID:"",
        validation: this.validator.valid()
    },
    leftPanel: false,
    rightPanel: true,
  };
    }


  signINinputListener = e => {
    e.preventDefault();
    if (e.target.id === "email") this.setState({email: e.target.value });
    if (e.target.id === "password")
      this.setState({ password: e.target.value });
  };
  signUPinputListener = e => {
    e.preventDefault();
    let signUP={...this.state.signUP};
    if (e.target.id === "username")
        signUP.username=e.target.value;
    if (e.target.id === "email")
        signUP.email=e.target.value;
    if (e.target.id === "password")
      signUP.password=e.target.value;
      if (e.target.id === "collgeID")
      signUP.collegeID=e.target.value;
      this.setState({ signUP });
  };
  signINsubmit = () => {
  }

  signUPsubmit = () => {
    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.submitted = true;


  };
  changePanel = () => {
    this.setState({ sign_in: !this.state.sign_in });
  };
  render() {
      let validation = this.submitted ?
                      this.validator.validate(this.state) :
                      this.state.validation
    return (
        <div  class="mt-5">
        {this.state.sign_in ? (
          <div class="container" id="container">
            <div className="form-container sign-up-container">
              <form action="/Home" onSubmit={this.signINsubmit}>
                <h1>Create Account</h1>
                <div className="social-container">
                  <Link to="/" className="social">
                    <i className="fab fa-facebook-f text-primary"></i>
                  </Link>
                  <Link to="/" className="social">
                    <i className="fab fa-google-plus-g text-danger"></i>
                  </Link>
                  <Link to="/" className="social">
                    <i className="fab fa-linkedin-in text-primary"></i>
                  </Link>
                </div>
                <span>or use your email for registration</span>
                <input
                  type="text"
                  placeholder="Name"
                  onChange={this.signUPinputListener}
                />
                <input
                  type="text"
                  placeholder="collegeID"
                  onChange={this.signUPinputListener}
                />
                <input
                  type="text"
                  placeholder="Email"
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
          <div class="container" id="container">
            <div className="form-container sign-in-container">
              <form action="/Home" onSubmit={this.signUPsubmit}>
                <h1>Sign in</h1>
                <div className="social-container">
                  <Link to="/" className="social">
                    <i className="fab fa-facebook-f text-primary"></i>
                  </Link>
                  <Link to="/" className="social">
                    <i className="fab fa-google-plus-g text-danger"></i>
                  </Link>
                  <Link to="/" className="social">
                    <i className="fab fa-linkedin-in text-primary"></i>
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
      </div>
    );
  }
}

export default Login1;

