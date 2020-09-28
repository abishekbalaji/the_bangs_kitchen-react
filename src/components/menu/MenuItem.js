import React from "react";

const MenuItem = (props) => (
  <div className="menu__item">
    <img src={props.imgSource} width="100" height="100" />
    <h3 className="menu__item__title">{props.name}</h3>
    <p className="menu__item__price">{props.price}</p>
  </div>
);

export default MenuItem;
