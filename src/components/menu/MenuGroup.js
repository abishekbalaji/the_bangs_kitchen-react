import React from "react";

import MenuItem from "./MenuItem";
import clean from "../../cleanUpText";

const MenuGroup = (props) => (
  <div id={clean(props.groupName)}>
    <h1>{props.groupName}</h1>
    {props.items.map((item, index) => (
      <MenuItem
        key={index}
        name={item.name}
        price={item.price}
        imgSource={item.imgSource}
      />
    ))}
  </div>
);

export default MenuGroup;
