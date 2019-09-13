import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import PropTypes from "prop-types";
import { Consumer } from "../../Components/context";
class Deptcards extends Component {
  lending_books = (e, book_details, user_id) => {
    e.preventDefault();
    if (book_details.availability == "yes") console.log("you can get the book");
    else console.log("you will get updated with the details of book soon");
  };
  render() {
    const { books, bookid } = { ...this.props };
    let book_array = books.filter(element => element.bookID === bookid);
    const { bookName, Author, edition, availability, rating, url } = {
      ...book_array[0]
    };
    let c = "fa fa-star checked";
    let stars = [
      "fa fa-star",
      "fa fa-star",
      "fa fa-star",
      "fa fa-star",
      "fa fa-star"
    ];
    // let rating = 3;
    for (let i = 0; i < rating; i++) {
      stars[i] = c;
    }
    return (
      <Consumer>
        {value => {
          // console.log(value.User);
          return (
            <Flippy
              flipOnHover={true} // default false
              flipOnClick={false} // default false
              flipDirection="horizontal" // horizontal or vertical
              ref={r => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
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
                <div class="contents">
                  <ul class="list-unstyled">
                    <li>{bookName}</li>
                    <li>{Author}</li>
                    <li>
                      <React.Fragment>
                        {stars.map(element => (
                          <span class={element}></span>
                        ))}
                      </React.Fragment>
                    </li>
                    <li>Availability:{availability}</li>
                    <li>
                      <button
                        type="button"
                        class="btn btn-primary text-center"
                        onClick={this.lending_books.bind(this, book_array[0])}
                      >
                        Click
                      </button>
                    </li>
                  </ul>
                </div>
              </BackSide>
            </Flippy>
          );
        }}
      </Consumer>
    );
  }
}

export default Deptcards;
