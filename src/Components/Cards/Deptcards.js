import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import PropTypes from "prop-types";
class Deptcards extends Component {
  render() {
    const { books, bookid } = { ...this.props };
    // console.log(this.props);
    let book_array = books.filter(element => element.bookID === bookid);

    const { bookName, Author, edition, availability, rating, url } = {
      ...book_array[0]
    };
    // console.log(bookName);
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
          <img src={url} alt="Hello" height="100%" width="100%" />
        </FrontSide>
        <BackSide style={{ backgroundColor: "#90EE90" }}>
          {/* put the Backside content here */}
          <div class="contents">
            <ul class="list-unstyled">
              <li>{bookName}</li>
              <li>{Author}</li>
              <li>{rating}</li>
              <li>Availability:{availability}</li>
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
