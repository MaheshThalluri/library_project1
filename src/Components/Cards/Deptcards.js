import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
class Deptcards extends Component {
  render() {
    // .. return
    return (
      <Flippy
        flipOnHover={true} // default false
        flipOnClick={false} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={r => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        style={{ width: "280px", height: "380px" }} /// these are optional style, it is not necessary
      >
        <FrontSide
          style={{
            backgroundColor: "tomato"
          }}
        >
          <img src="../../Images/person1.jpg" alt="Hello" />
        </FrontSide>
        <BackSide style={{ backgroundColor: "#175852" }}>
          {/* put the Backside content here */}
          <div class="contents">
            <ul>
              <li>Author</li>
              <li>Edition</li>
              <li>rating</li>
              <li>Availability</li>
              <li>
                <button type="button" class="btn btn-primary text-center">
                  Click
                </button>
              </li>
            </ul>
          </div>
        </BackSide>
      </Flippy>
    );
  }
}

export default Deptcards;
