import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import Carousel from "./Carousel";
import RecentlyAdded from "../Components/RecentlyAdded";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
        <RecentlyAdded />
        <Newsletter />
        <Footer />
      </div>
    );
  }
}

export default Home;
