import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./layout/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar branding={"Library Project"} />
        <div>
          <Switch>
              
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
