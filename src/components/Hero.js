import React from "react";

import NavBar from "./navbar/NavBar";

export default class Hero extends React.Component {
  showNavigation = () => {
    // document.getElementById("nav").style.display = "flex";
    document.getElementById("nav").classList.remove("navbar-invisible");
    document.getElementById("nav").classList.add("navbar-visible");
    document.getElementById("back-drop").style.display = "block";
  };
  hideNavigation = () => {
    document.getElementById("nav").classList.remove("navbar-visible");
    document.getElementById("nav").classList.add("navbar-invisible");
    document.getElementById("back-drop").style.display = "none";
  };
  render() {
    return (
      <div className="hero__container">
        <div
          id="back-drop"
          className="backdrop"
          onClick={this.hideNavigation}
        ></div>
        <div className="brand">
          <img className="brand-logo" src="/images/logo.png" width="45" height="45" />
          <button className="hamburger-icon" onClick={this.showNavigation}>
            <i className="fas fa-hamburger"></i>
          </button>
        </div>
        <NavBar />
        <div className="hero">
          <img className="hero__image" src="/images/logo.png" />
          <h3>Subtitle</h3>
        </div>
      </div>
    );
  }
}
