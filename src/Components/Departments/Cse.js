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
                <form class="form-inline ml-auto">
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
      // <div>
      //   <Navbar />
      //   <Footer />
      // </div>
      // <Consumer>
      //   <Navbar />
      //   {value => {
      //     return (
      //
      //         <div className="row mt-5">
      //           <div class="col-12">
      //             <h1 class="ml-5 mb-5 text-center">Most Popular</h1>
      //           </div>
      //           <div class="col-12">
      //             <div class="d-flex justify-content-around row-hl">
      //               <div class=" ml-5 px-4 item-hl">
      //                 <Deptcards />
      //               </div>
      //               <div class="px-4 item-hl">
      //                 <Deptcards />
      //               </div>
      //               <div class="px-4 item-hl">
      //                 <Deptcards />
      //               </div>
      //             </div>
      //           </div>
      //         </div>

      //         <div class=" text-center bg-success text-white mt-5">
      //           <h1 class="text-center">Our Staff</h1>
      //           <hr />
      //           <div class="row">
      //             <div class="col-md-3">
      //               <img
      //                 src="img/person1.jpg"
      //                 alt=""
      //                 class="img-fluid rounded-circle mb-2"
      //               />
      //               <h4>Ramu</h4>
      //               <small>Head Of Dept</small>
      //             </div>
      //             <div class="col-md-3">
      //               <img
      //                 src="img/person2.jpg"
      //                 alt=""
      //                 class="img-fluid rounded-circle mb-2"
      //               />
      //               <h4>Gopal</h4>
      //               <small>Professor</small>
      //             </div>
      //             <div class="col-md-3">
      //               <img
      //                 src="img/person3.jpg"
      //                 alt=""
      //                 class="img-fluid rounded-circle mb-2"
      //               />
      //               <h4>Raju</h4>
      //               <small>Associate Professor</small>
      //             </div>
      //             <div class="col-md-3">
      //               <img
      //                 src="img/person4.jpg"
      //                 alt=""
      //                 class="img-fluid rounded-circle mb-2"
      //               />
      //               <h4>Seetha</h4>
      //               <small>Lab Assistants</small>
      //             </div>
      //           </div>
      //         </div>

      //         <Footer />
      //       </div>
      //     );
      //   }}
      // </Consumer>
    );
  }
}
export default Cse;
