import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Cse from "./Components/Departments/Cse";
import Login1 from "./Components/Login1";
import Home from "./Components/Home";
import About from "./Components/About";
import Userprofile from "./Components/Userprofile";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/Login1" component={Login1} />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/userprofile" component={Userprofile} />
            <Route exact path="/departments/cse" component={Cse} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
