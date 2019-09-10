import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
          <div>
            <Switch>
            <Route exact path="/Login1" component={Login1}/>
            <Route exact path="/" component={Home}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
