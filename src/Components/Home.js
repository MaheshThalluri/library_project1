import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import RecentlyAdded from "../Components/RecentlyAdded";
class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div class="jumbotron">
            <div className="center">
            <h1>lorem ipsum</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
        <RecentlyAdded/>
      </div>
    );
  }
}

export default Home;
