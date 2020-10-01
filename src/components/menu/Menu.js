import React from "react";

import MenuGroup from "./MenuGroup";

const Menu = () => (
  <div id="menu" className="menu-div">
    <div className="menu__container container">
      <h1 className="menu__main-title">Menu</h1>
      <div className="menu__container">
        <MenuGroup
          groupName="Shawarma"
          heroImgSource="/images/shawarma.png"
          items={[
            {
              name: "Shawarma Roll",
              price: 70,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
            {
              name: "Spicy Shawarma Roll",
              price: 75,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
            {
              name: "Spl. Shawarma Roll",
              price: 80,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
            {
              name: "Shawarma on a Plate",
              price: 110,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
            {
              name: "Malabar Shawarma",
              price: 100,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
          ]}
        />
        <MenuGroup
          groupName="Fried Chicken"
          heroImgSource="/images/fried-chicken.png"
          items={[
            {
              name: "1 PC",
              price: 75,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
            {
              name: "2 PCS",
              price: 139,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
            {
              name: "4 PCS",
              price: 279,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
            {
              name: "Popcorn Chicken",
              price: 99,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
            {
              name: "Hot Wings (5 Pcs)",
              price: 99,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
          ]}
        />
        <MenuGroup
          groupName="Rolls"
          heroImgSource="/images/paneer-roll.png"
          items={[
            {
              name: "Paneer Roll",
              price: 84,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
            {
              name: "Crispy Veg Roll",
              price: 79,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
            {
              name: "Fried Chicken Roll",
              price: 99,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
            {
              name: "Chicken BBQ Roll",
              price: 109,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
            {
              name: "Chicken Tikka Roll",
              price: 109,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
          ]}
        />
        <MenuGroup
          groupName="Sandwiches"
          heroImgSource="/images/sandwich.png"
          items={[
            {
              name: "Choco Choo Sandwich",
              price: 59,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
            {
              name: "Paneer Sandwich",
              price: 79,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
            {
              name: "Chicken Tikka Sandwich",
              price: 99,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
            {
              name: "Pepper BBQ Sandwich",
              price: 99,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
            {
              name: "Chicken Mayo Sandwich",
              price: 89,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
          ]}
        />
        <MenuGroup
          groupName="Burgers"
          heroImgSource="/images/burger.png"
          items={[
            {
              name: "Veg. Mini Burger",
              price: 59,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
            {
              name: "Veg. Patty Burger",
              price: 79,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
            {
              name: "Chicken Patty Burger",
              price: 99,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
            {
              name: "Chicken Fillet Burger",
              price: 109,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
          ]}
        />
        <MenuGroup
          groupName="Grill Chicken"
          heroImgSource="/images/grill-chicken.png"
          items={[
            {
              name: "Quarter",
              price: 100,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
            {
              name: "Half",
              price: 180,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
            {
              name: "Full",
              price: 340,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
          ]}
        />
        <MenuGroup
          groupName="Milkshakes"
          heroImgSource="/images/milkshake.png"
          items={[
            {
              name: "Oreo Milkshake",
              price: 89,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
            {
              name: "Choco Kitkat Shake",
              price: 79,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
            {
              name: "Blueberry Milkshake",
              price: 89,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
            {
              name: "Butterscotch Shake",
              price: 69,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
            {
              name: "Vanilla Shake",
              price: 59,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
          ]}
        />
        <MenuGroup
          groupName="Mojitos"
          heroImgSource="/images/mojito.png"
          items={[
            {
              name: "Lemon Mint",
              price: 59,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
            {
              name: "Blue Caracao",
              price: 69,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
            {
              name: "Green Apple",
              price: 79,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
          ]}
        />
        <MenuGroup
          groupName="Beverages"
          heroImgSource="/images/beverages.png"
          items={[
            {
              name: "Pepsi / Coke",
              price: 40,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
            {
              name: "Water Bottle 1 Litre",
              price: 30,
              imgSource: "/images/fried-chicken-menu-item.png",
            },
          ]}
        />
      </div>
    </div>
  </div>
);

export default Menu;
