import React from "react";
import { Link } from "react-router-dom";

import scrollToElem from "../../scrollToElem";

export default class ComboLinks extends React.Component {
  handleScroll = () => {
    const elem = document.getElementById("combos");
    scrollToElem(elem);
  };
  render() {
    return (
      <div>
        <Link to="/" onClick={this.handleScroll}>
          Combos
        </Link>
        {/* <h1>Combos</h1>
        <Link to="/" onClick={this.handleScroll}>
          Combo 1
        </Link>
        <Link to="/" onClick={this.handleScroll}>
          Combo 2
        </Link>
        <Link to="/" onClick={this.handleScroll}>
          Combo 3
        </Link> */}
      </div>
    );
  }
}
