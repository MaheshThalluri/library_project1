import React, { Component } from "react";
import Profilecard from "./Cards/Profilecard";

class Profile extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center  mt-5">Meet the Person</h1>
        <div className="d-flex justify-content-around row-hl mt-0">
          <div className="p-4 item-hl">
            <Profilecard
              Ename={"Ramesh"}
              Designation={"Manager"}
              Phone={"7680008733"}
              Email={"Ramesh@gmail.com"}
            />
          </div>

          <div className="p-4 item-hl">
            <Profilecard
              Ename={"Suresh"}
              Designation={"Professor"}
              Phone={"9248652445"}
              Email={"Suresh@gmail.com"}
            />
          </div>

          <div className="p-4 item-hl">
            <Profilecard
              Ename={"Ganesh"}
              Designation={"Lecturer"}
              Phone={"9014004556"}
              Email={"Ganesh@gmail.com"}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
