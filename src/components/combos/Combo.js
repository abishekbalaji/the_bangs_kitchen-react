import React from "react";

import ComboItem from "./ComboItem";

const Combo = (props) => (
  <div className="combo">
    <h3 className="combo__type">{props.name}</h3>
    {props.items.map((item, index) => (
      <ComboItem key={index} name={item} />
    ))}
  </div>
);

export default Combo;
