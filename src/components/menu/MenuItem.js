import React from "react";

const MenuItem = (props) => (
  <div className="menu__item">
    <img src={props.imgSource} className="menu__item__image" />
    <div className="menu__item__text">
      <h3 className="menu__item__title">{props.name}</h3>
      <p className="menu__item__price">{props.price}</p>
    </div>
  </div>
);

export default MenuItem;
