import React from "react";

import ComboItem from "./ComboItem";

const Combo = (props) => (
  <div id="combos">
    <h1>Combos</h1>
    <h3>{props.name}</h3>
    {props.items.map((item, index) => (
      <ComboItem key={index} name={item} />
    ))}
  </div>
);

export default Combo;
