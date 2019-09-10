import React, { Component } from "react";
import Bookcard from "../Components/Cards/Bookcard";
class RecentlyAdded extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 className="display-4 text-center py-3 mt-5">Recently Added</h1>
        <div class="d-flex justify-content-around row-hl">
          <div class="p-4 item-hl">
            <Bookcard />
          </div>
        </div>
      </div>
    );
  }
}
export default RecentlyAdded;
