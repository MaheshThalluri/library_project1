import React, { Component } from "react";
import Deptcards from "../Cards/Deptcards";
import Navbar from "../../layout/Navbar";
import Footer from "../Footer";
import { Consumer } from "../../Components/context";
class Cse extends Component {
  state = {
    searchBook: "",
    searchIDs: [],
    searchPress: false,
    text: "Search Results"
  };
  inputListener = e => {
    e.preventDefault();
    this.setState({ searchBook: e.target.value });
  };
  onSearch = (Books, e) => {
    this.setState({ searchPress: true });
    e.preventDefault();
    let searchIDs = new Set();
    Books.forEach(element => {
      element.keyword.forEach(elem => {
        if (elem === this.state.searchBook) {
          searchIDs.add(element.bookID);
        }
      });
    });
    searchIDs = Array.from(searchIDs);
    this.setState({ searchIDs });
    if (searchIDs.length == 0) this.setState({ text: "No Results Found" });
    else this.setState({ text: "Search Results" });
  };
  render() {
    return (
      <Consumer>
        {value => {
          const { RecentlyAdded, Books, MostPopular } = { ...value };
          const searchIDs = this.state.searchIDs;
          return (
            <React.Fragment>
              <Navbar />
              <div className="">
                <div class="pt-5" style={{ marginLeft: "100px" }}>
                  <form class="form-inline ml-auto">
                    <input
                      type="text"
                      class="form-control form-control-lg mr-2"
                      placeholder=" Book Name"
                      onChange={this.inputListener}
                    />
                    <button
                      class="btn btn-lg btn-success"
                      onClick={this.onSearch.bind(this, Books)}
                    >
                      <i className="fas fa-search"></i> Search
                    </button>
                  </form>
                </div>
                {this.state.searchPress ? (
                  <div className="row mt-5">
                    <div class="col-12">
                      <h1 class="ml-5 mb-5 text-center">{this.state.text}</h1>
                    </div>
                    <div class="col-12">
                      <div class="d-flex justify-content-around row-hl">
                        {searchIDs.map(element => (
                          <div class=" ml-5 px-4 item-hl">
                            <Deptcards books={Books} bookid={element} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}
                <div className="row mt-5 mb-5">
                  <div class="col-12">
                    <h1 class="ml-5 mb-5 text-center">Recently Added</h1>
                  </div>
                  <div class="col-12">
                    <div class="d-flex justify-content-around row-hl">
                      {RecentlyAdded.map(element => (
                        <div class=" ml-5 px-4 item-hl">
                          <Deptcards books={Books} bookid={element} />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div class="col-12">
                      <h1 class="ml-5 mb-5 text-center">Most Popular</h1>
                    </div>
                    <div class="col-12">
                      <div class="d-flex justify-content-around row-hl">
                        {MostPopular.map(element => (
                          <div class=" ml-5 px-4 item-hl">
                            <Deptcards books={Books} bookid={element} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
export default Cse;
