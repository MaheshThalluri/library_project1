import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Components/About";

import Navbar from "./layout/Navbar";
import Login1 from "./Components/Login1";
import Home from "./Components/Home";
import CSE from "./Components/Departments/CSE";
// import Nav
//import Footer from "./Components/Footer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Login1} />
             <Route exact path="/Home" component={Home} />
             <Route exact path="/CSE" component={CSE} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
