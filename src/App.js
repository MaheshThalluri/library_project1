import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Components/About";

import Navbar from "./layout/Navbar";
import Login1 from "./Components/Login1";
import Home from "./Components/Home";
// import Nav
//import Footer from "./Components/Footer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/Login1" component={Login1} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
