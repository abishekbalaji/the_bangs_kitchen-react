import React from "react";

import MenuGroup from "./MenuGroup";

const Menu = () => (
  <div id="menu" className="menu-div">
    <div className="menu__container container">
      <h1 className="menu__main-title">Menu</h1>
      <div className="menu__container">
        <MenuGroup
          groupName="SHAWARMA"
          heroImgSource="/images/new/shawarma-500-high.png"
          items={[
            {
              name: "Shawarma Roll",
              price: 70,
              imgSource: "/images/menu-items/shawarma.png",
            },
            {
              name: "Spicy Shawarma Roll",
              price: 75,
              imgSource: "/images/menu-items/shawarma.png",
            },
            {
              name: "Spl. Shawarma Roll",
              price: 80,
              imgSource: "/images/menu-items/shawarma.png",
            },
            {
              name: "Shawarma on a Plate",
              price: 110,
              imgSource: "/images/menu-items/shawarma.png",
            },
            {
              name: "Malabar Shawarma",
              price: 100,
              imgSource: "/images/menu-items/shawarma.png",
            },
          ]}
        />
        <MenuGroup
          groupName="FRIED CHICKEN"
          heroImgSource="/images/new/fried-chicken-500-high.png"
          items={[
            {
              name: "1 PC",
              price: 75,
              imgSource: "/images/menu-items/fried-chicken.png",
            },
            {
              name: "2 PCS",
              price: 139,
              imgSource: "/images/menu-items/fried-chicken.png",
            },
            {
              name: "4 PCS",
              price: 279,
              imgSource: "/images/menu-items/fried-chicken.png",
            },
            {
              name: "Popcorn Chicken",
              price: 99,
              imgSource: "/images/menu-items/fried-chicken.png",
            },
            {
              name: "Hot Wings (5 Pcs)",
              price: 99,
              imgSource: "/images/menu-items/fried-chicken.png",
            },
          ]}
        />
        <MenuGroup
          groupName="ROLLS"
          heroImgSource="/images/new/paneer-roll-500-high.png"
          items={[
            {
              name: "Paneer Roll",
              price: 84,
              imgSource: "/images/menu-items/roll.png",
            },
            {
              name: "Crispy Veg Roll",
              price: 79,
              imgSource: "/images/menu-items/roll.png",
            },
            {
              name: "Fried Chicken Roll",
              price: 99,
              imgSource: "/images/menu-items/roll.png",
            },
            {
              name: "Chicken BBQ Roll",
              price: 109,
              imgSource: "/images/menu-items/roll.png",
            },
            {
              name: "Chicken Tikka Roll",
              price: 109,
              imgSource: "/images/menu-items/roll.png",
            },
          ]}
        />
        <MenuGroup
          groupName="SANDWICHES"
          heroImgSource="/images/new/sandwich-500-high.png"
          items={[
            {
              name: "Choco Choo Sandwich",
              price: 59,
              imgSource: "/images/menu-items/sandwich.png",
            },
            {
              name: "Paneer Sandwich",
              price: 79,
              imgSource: "/images/menu-items/sandwich.png",
            },
            {
              name: "Chicken Tikka Sandwich",
              price: 99,
              imgSource: "/images/menu-items/sandwich.png",
            },
            {
              name: "Pepper BBQ Sandwich",
              price: 99,
              imgSource: "/images/menu-items/sandwich.png",
            },
            {
              name: "Chicken Mayo Sandwich",
              price: 89,
              imgSource: "/images/menu-items/sandwich.png",
            },
          ]}
        />
        <MenuGroup
          groupName="BURGERS"
          heroImgSource="/images/new/burger-500-high.png"
          items={[
            {
              name: "Veg. Mini Burger",
              price: 59,
              imgSource: "/images/menu-items/burger.png",
            },
            {
              name: "Veg. Patty Burger",
              price: 79,
              imgSource: "/images/menu-items/burger.png",
            },
            {
              name: "Chicken Patty Burger",
              price: 99,
              imgSource: "/images/menu-items/burger.png",
            },
            {
              name: "Chicken Fillet Burger",
              price: 109,
              imgSource: "/images/menu-items/burger.png",
            },
          ]}
        />
        <MenuGroup
          groupName="GRILL CHICKEN"
          heroImgSource="/images/new/grill-chicken-500-high.png"
          items={[
            {
              name: "Quarter",
              price: 100,
              imgSource: "/images/menu-items/grill-chicken.png",
            },
            {
              name: "Half",
              price: 180,
              imgSource: "/images/menu-items/grill-chicken.png",
            },
            {
              name: "Full",
              price: 340,
              imgSource: "/images/menu-items/grill-chicken.png",
            },
          ]}
        />
        <MenuGroup
          groupName="MILKSHAKES"
          heroImgSource="/images/new/milkshake-500-high.png"
          items={[
            {
              name: "Oreo Milkshake",
              price: 89,
              imgSource: "/images/menu-items/milkshake.png",
            },
            {
              name: "Choco Kitkat Shake",
              price: 79,
              imgSource: "/images/menu-items/milkshake.png",
            },
            {
              name: "Blueberry Milkshake",
              price: 89,
              imgSource: "/images/menu-items/milkshake.png",
            },
            {
              name: "Butterscotch Shake",
              price: 69,
              imgSource: "/images/menu-items/milkshake.png",
            },
            {
              name: "Vanilla Shake",
              price: 59,
              imgSource: "/images/menu-items/milkshake.png",
            },
          ]}
        />
        <MenuGroup
          groupName="MOJITOS"
          heroImgSource="/images/new/mojito.png"
          items={[
            {
              name: "Lemon Mint",
              price: 59,
              imgSource: "/images/menu-items/mojito.png",
            },
            {
              name: "Blue Caracao",
              price: 69,
              imgSource: "/images/menu-items/mojito.png",
            },
            {
              name: "Green Apple",
              price: 79,
              imgSource: "/images/menu-items/mojito.png",
            },
          ]}
        />
        <MenuGroup
          groupName="BEVERAGES"
          heroImgSource="/images/new/beverages.png"
          items={[
            {
              name: "Pepsi / Coke",
              price: "AT MRP",
              imgSource: "/images/menu-items/beverages.png",
            },
            {
              name: "Water Bottle 1 Litre",
              price: "AT MRP",
              imgSource: "/images/menu-items/beverages.png",
            },
          ]}
        />
      </div>
    </div>
  </div>
);

export default Menu;
