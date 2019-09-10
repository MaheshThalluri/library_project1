import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./layout/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Components/About";
import Home from "./Components/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Home />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
