import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const MenuItem = (props) => (
  <ScrollAnimation animateIn="animate__fadeInUp">
    {console.log(typeof props.price)}
    <div className="menu__item">
      <img src={props.imgSource} className="menu__item__image" />
      <div className="menu__item__text">
        <h3 className="menu__item__title">{props.name}</h3>
        <p className="menu__item__price">
          {typeof props.price === "number" && <i className="fas fa-rupee-sign"></i>}
          <span className="price"> {props.price}</span>{" "}
        </p>
      </div>
    </div>
  </ScrollAnimation>
);

export default MenuItem;
