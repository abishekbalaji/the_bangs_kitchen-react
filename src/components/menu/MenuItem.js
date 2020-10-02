import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const MenuItem = (props) => (
  <ScrollAnimation animateIn="animate__fadeInUp">
    <div className="menu__item">
      <img src={props.imgSource} className="menu__item__image" />
      <div className="menu__item__text">
        <h3 className="menu__item__title">{props.name}</h3>
        <p className="menu__item__price"><i class="fas fa-rupee-sign"></i> {props.price}</p>
      </div>
    </div>
  </ScrollAnimation>
);

export default MenuItem;
