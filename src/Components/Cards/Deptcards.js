import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import PropTypes from "prop-types";
class Deptcards extends Component {
  render() {
    const { books, book } = { ...this.props };
    let BOOK = books.filter(element => element.bookID === book);
    const { bookName, Author, Edition, Availability, Rating } = {
      ...BOOK
    };
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
            backgroundColor: "pink"
          }}
        >
          <img
            src="http://4.bp.blogspot.com/-r8Z9p2zh5Ko/TnMdtnrt0ZI/AAAAAAAABAk/63aKALxaB38/s1600/Revolution-2020-Chetan-Bhagat-e-book-review.jpg"
            alt="Hello"
            height="100%"
            width="100%"
          />
        </FrontSide>
        <BackSide style={{ backgroundColor: "#90EE90" }}>
          {/* put the Backside content here */}
          <div class="contents">
            <ul style={{ liststyle: "none" }}>
              <li>bookName</li>
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
