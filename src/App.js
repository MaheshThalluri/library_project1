import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Components/About";
import Navbar from "./layout/Navbar";
import Login1 from "./Components/Login1";
import Home from "./Components/Home";
import Userprofile from "./Components/Userprofile";
import CSE from "./Components/Departments/CSE";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Login1} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/userprofile" component={Userprofile} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
