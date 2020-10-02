import React from "react";

export default class About extends React.Component {
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
        <h1>About</h1>
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
