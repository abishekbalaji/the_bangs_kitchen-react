import React from "react";

import MenuItem from "./MenuItem";
import clean from "../../cleanUpText";


const MenuGroup = (props) => (
  <div id={clean(props.groupName)} className="menu__item-group__container">
    <div className="menu-group__hero">
      <h1 className="menu__item-group__title">{props.groupName}</h1>
      <img
        className={"menu__hero__img menu__hero__img__" + clean(props.groupName)}
        src={props.heroImgSource}
        alt={props.groupName}
      />
    </div>
    <div className="menu__item-group">
      {props.items.map((item, index) => (
        <MenuItem
          key={index}
          name={item.name}
          price={item.price}
          imgSource={item.imgSource}
        />
      ))}
    </div>
  </div>
);



export default MenuGroup;
