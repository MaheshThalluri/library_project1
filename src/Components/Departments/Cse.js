import React, { Component } from "react";
import Deptcards from "../Cards/Deptcards";
import Navbar from "../../layout/Navbar";
import Footer from "../Footer";
import { Consumer } from "../../Components/context";
class Cse extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { RecentlyAdded } = { ...value };
          console.log(value);
          return (
            <div className="">
              <div class="pt-5 ">
                <form class="form-inline" style={{ marginLeft: "700px" }}>
                  <input
                    type="text"
                    class="form-control form-control-lg mr-2"
                    placeholder=" Book Name"
                  />
                  <button class="btn btn-lg btn-success">Search</button>
                </form>
              </div>
              <div className="row mt-5">
                <div class="col-12">
                  <h1 class="ml-5 mb-5 text-center">Recently Added</h1>
                </div>
                <div class="col-12">
                  <div class="d-flex justify-content-around row-hl">
                    {RecentlyAdded.map(element => (
                      <div class=" ml-5 px-4 item-hl">
                        <Deptcards />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Cse;
