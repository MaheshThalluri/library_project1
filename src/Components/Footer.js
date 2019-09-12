import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="bg-dark text-center pt-2 pb-2">
        <div class="row align-items-center">
          <div class="col text-white" style={{ fontSize: "25px" }}>
            Library
          </div>
          <div class="col">
            <p className="lead text-white">Copyrights Are &copy; Reserved </p>
          </div>
          <div class="col text-white">
             <i className="fab fa-facebook fa-2x mr-3 text-white"></i>
            <i className="fab fa-twitter fa-2x text-white mr-3"></i>
            <i className="fab fa-linkedin fa-2x text-white "></i> 

            
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
