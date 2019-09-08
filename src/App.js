import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import Navbar from "./layout/Navbar";
import Login1 from "./Components/Login1";
//import Footer from "./Components/Footer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Login1 />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
