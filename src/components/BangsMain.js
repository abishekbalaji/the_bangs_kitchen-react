import React from "react";
import ContentLoader from "react-content-loader";

import Hero from "./Hero";
import Combos from "./combos/Combos";
import Menu from "./menu/Menu";
import Footer from "./footer/Footer";

import ThreeDots from "./ThreeDots";

export default class BangsMain extends React.Component {
  MyLoader = () => <ContentLoader />;
  MyThreeDots = () => <ThreeDots />;

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  render() {
    return (
      <div>
        {this.MyLoader}
        {this.MyThreeDots}
        <Hero />
        <Combos />
        <Menu />
        <Footer />
        <button
          onClick={this.scrollToTop}
          id="backToTop"
          className="scrollToTopBtn"
          title="Go to top"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    );
  }
}
