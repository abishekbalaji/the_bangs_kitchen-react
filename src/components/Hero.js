import React from "react";

import NavBar from "./navbar/NavBar";

export default class Hero extends React.Component {
  showNavigation = () => {
    document.getElementById("nav").style.display = "flex";
    document.getElementById("back-drop").style.display = "block";
  };
  render() {
    return (
      <div className="hero__container">
        <div id="back-drop" className="backdrop"></div>
        <button className="hamburger-icon" onClick={this.showNavigation}>
          <i className="fas fa-hamburger"></i>
        </button>
        <NavBar />
        <div className="hero">
          <img className="hero__image" src="/images/logo.png" />
          <h3>Subtitle</h3>
        </div>
      </div>
    );
  }
}
