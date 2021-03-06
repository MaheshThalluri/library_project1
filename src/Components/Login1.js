import "./Login.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Home } from "./Home";
import FormValidator from "./FormValidator";
import { Consumer } from "../Components/context";
class Login1 extends Component {
  constructor() {
    super();
    this.validator = new FormValidator([
      {
        field: "email",
        method: "isEmpty",
        validWhen: false,
        message: "Email is required."
      },
      {
        field: "email",
        method: "isEmail",
        validWhen: true,
        message: "That is not a valid email."
      },
      {
        field: "number",
        method: "isEmpty",
        validWhen: false,
        message: "Pleave provide a phone number."
      },
      {
        field: "number",
        method: "matches",
        args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/], // args is an optional array of arguements that will be passed to the validation method
        validWhen: true,
        message: "That is not a valid phone number."
      },

      {
        field: "password",
        method: "isEmpty",
        validWhen: false,
        message: "Password is required."
      },
      {
        field: "collegeID",
        method: "isEmpty",
        validWhen: false,
        message: "collegeID is required."
      },
      {
        field: "collegeID",
        method: "isEmpty",
        validWhen: false,
        message: "collegeID is required"
      }
    ]);
    this.signINvalidation = true;
    this.submitted = false;
    this.state = {
      sign_in: "true",
      signIN: {
        email: "",
        password: ""
      },
      signUP: {
        email: "",
        password: "",
        collegeID: "",
        number: ""
      },
      leftPanel: false,
      rightPanel: true,
      validation: this.validator.valid(),
      signINaction: "#",
      signUPaction: "#"
    };
  }

  signINinputListener = e => {
    e.preventDefault();
    let signIN = { ...this.state.signIN };
    if (e.target.id === "email") signIN.email = e.target.value;
    if (e.target.id === "password") signIN.password = e.target.value;
    this.setState({ signIN });
  };
  signUPinputListener = e => {
    e.preventDefault();
    let signUP = { ...this.state.signUP };
    if (e.target.id === "email") signUP.email = e.target.value;
    if (e.target.id === "password") signUP.password = e.target.value;
    if (e.target.id === "collegeID") signUP.collegeID = e.target.value;
    if (e.target.id === "number") signUP.number = e.target.value;
    this.setState({ signUP });
  };
  signINsubmit = (validUsers, currentUser, e) => {
    // e.preventDefault();
    const { signIN } = { ...this.state };
    let flag = false;
    validUsers.forEach(element => {
      if (
        element.email === signIN.email &&
        element.password === signIN.password
      ) {
        flag = true;
        // console.log(element.username);
        currentUser(element.username);
      }
    });
    if (flag == false) {
      {
        // e.preventDefault();
        this.signINvalidation = false;
      }
    } else this.state.signINaction = "/Home";
    this.submitted = true;
  };

  signUPsubmit = (collegeIDs, e) => {
    const { signUP } = { ...this.state };

    let validation = this.validator.validate(signUP);
    let flag = false;
    if (signUP.collegeID != "") {
      collegeIDs.forEach(element => {
        if (signUP.collegeID === element) {
          flag = true;
          return;
        }
      });
      if (flag === false) {
        validation.collegeID.isInvalid = true;
        validation.collegeID.message = "not a valid college id";
      }
    }
    if (flag && validation.isValid) {
      this.state.signUPaction = "/Home";
    } else {
      e.preventDefault();
      this.state.signUPaction = "#";
    }
    this.setState({ validation: validation });
    this.submitted = true;
  };
  changePanel = () => {
    this.setState({ sign_in: !this.state.sign_in });
  };
  render() {
    const { signUP } = { ...this.state };
    let validation = this.submitted
      ? this.validator.validate(signUP)
      : this.state.validation;
    return (
      <Consumer>
        {value => {
          return (
            <div class="mt-5">
              {this.state.sign_in ? (
                <div class="container2 ">
                  <div className="form-container sign-up-container">
                    <form
                      className="form1"
                      action={this.state.signUPaction}
                      onSubmit={this.signUPsubmit.bind(this, value.collegeIDs)}
                    >
                      <h1>Create Account</h1>
                      <div className="social-container">
                        <Link to="/" className="social">
                          <i className="fab fa-facebook-f   text-primary"></i>
                        </Link>
                        <Link to="/" className="social">
                          <i className="fab fa-google-plus-g   text-danger"></i>
                        </Link>
                        <Link to="/" className="social">
                          <i className="fab fa-linkedin-in  text-primary"></i>
                        </Link>
                      </div>
                      <span>or use your email for registration</span>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@doe.com"
                        onChange={this.signUPinputListener}
                        id="email"
                      />
                      <span className="help-block">
                        {this.state.validation.email.message}
                      </span>

                      <input
                        type="number"
                        name="number"
                        placeholder="9876543210"
                        onChange={this.signUPinputListener}
                        id="number"
                      />
                      <span className="help-block">
                        {this.state.validation.number.message}
                      </span>

                      <input
                        type="text"
                        name="collegeID"
                        placeholder="y7cs001"
                        onChange={this.signUPinputListener}
                        id="collegeID"
                      />
                      <span className="help-block">
                        {this.state.validation.collegeID.message}
                      </span>

                      <input
                        type="password"
                        placeholder="Password"
                        onChange={this.signUPinputListener}
                        id="password"
                        className={
                          this.state.validation.password.isInvalid &&
                          "is-invalid"
                        }
                      />
                      <span className="help-block">
                        {this.state.validation.password.message}
                      </span>

                      <button>Sign Up</button>
                    </form>
                  </div>

                  <div className="overlay-container">
                    <div className="overlay">
                      <div className="overlay-panel overlay-right">
                        <h1>Welcome Back!</h1>
                        <p>
                          To keep connected with us please login with your
                          personal info
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
                <div class="container2" id="container">
                  <div className="form-container sign-in-container">
                    <form
                      className="form1"
                      action={this.state.signINaction}
                      onSubmit={this.signINsubmit.bind(
                        this,
                        value.validUsers,
                        value.currentUser
                      )}
                    >
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

                      {!this.signINvalidation ? (
                        <div class="alert alert-danger" role="alert">
                          Invalid email or password
                        </div>
                      ) : null}
                      <input
                        type="text"
                        placeholder="Email"
                        id="email"
                        onChange={this.signINinputListener}
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        id="password"
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
                        <p>
                          Enter your personal details and start journey with us
                        </p>
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
        }}
      </Consumer>
    );
  }
}

export default Login1;
