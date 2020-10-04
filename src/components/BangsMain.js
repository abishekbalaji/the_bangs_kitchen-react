import React from "react";

import Hero from "./Hero";
import Combos from "./combos/Combos";
import Menu from "./menu/Menu";
import Footer from "./footer/Footer";

export default class BangsMain extends React.Component {
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
          {/* <i className="fas fa-arrow-up"></i> */}
          <span className="material-icons">arrow_upward</span>
        </button>
      </div>
    );
  }
}
