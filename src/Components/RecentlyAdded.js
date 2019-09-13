import React, { Component } from "react";
import Deptcards from "../Components/Cards/Deptcards";
import { Consumer } from "../Components/context";
class RecentlyAdded extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { Books, RecentlyAdded } = { ...value };
          return (
            <div className="container-fluid">
              <h1 className="display-4 text-center py-3 mt-5">
                Recently Added
              </h1>
              <div class="d-flex justify-content-around row-hl">
                {RecentlyAdded.map(element => (
                  <div class=" ml-5 px-4 item-hl">
                    <Deptcards books={Books} bookid={element} />
                  </div>
                ))}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default RecentlyAdded;
