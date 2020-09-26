import React from "react";

const MenuItem = (props) => (
  <div>
    <img src={props.imgSource} width="100" height="100" />
    <h3>{props.name}</h3>
    <p>{props.price}</p>
  </div>
);

export default MenuItem;
