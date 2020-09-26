import React from "react";

import MenuGroup from "./MenuGroup";

const Menu = () => (
  <div id="menu">
    <MenuGroup
      groupName="Shawarma"
      items={[
        {
          name: "Shawarma Roll",
          price: 70,
          imgSource: "/images/logo.png",
        },
        {
          name: "Spicy Shawarma Roll",
          price: 75,
          imgSource: "/images/logo.png",
        },
        {
          name: "Spl. Shawarma Roll",
          price: 80,
          imgSource: "/images/logo.png",
        },
        {
          name: "Shawarma on a Plate",
          price: 110,
          imgSource: "/images/logo.png",
        },
        {
          name: "Malabar Shawarma",
          price: 100,
          imgSource: "/images/logo.png",
        },
      ]}
    />
    <MenuGroup
      groupName="Fried Chicken"
      items={[
        {
          name: "1 PC",
          price: 75,
          imgSource: "/images/logo.png",
        },
        {
          name: "2 PCS",
          price: 139,
          imgSource: "/images/logo.png",
        },
        {
          name: "4 PCS",
          price: 279,
          imgSource: "/images/logo.png",
        },
        {
          name: "Popcorn Chicken",
          price: 99,
          imgSource: "/images/logo.png",
        },
        {
          name: "Hot Wings (5 Pcs)",
          price: 99,
          imgSource: "/images/logo.png",
        },
      ]}
    />
    <MenuGroup
      groupName="Rolls"
      items={[
        {
          name: "Paneer Roll",
          price: 84,
          imgSource: "/images/logo.png",
        },
        {
          name: "Crispy Veg Roll",
          price: 79,
          imgSource: "/images/logo.png",
        },
        {
          name: "Fried Chicken Roll",
          price: 99,
          imgSource: "/images/logo.png",
        },
        {
          name: "Chicken BBQ Roll",
          price: 109,
          imgSource: "/images/logo.png",
        },
        {
          name: "Chicken Tikka Roll",
          price: 109,
          imgSource: "/images/logo.png",
        },
      ]}
    />
    <MenuGroup
      groupName="Sandwiches"
      items={[
        {
          name: "Choco Choo Sandwich",
          price: 59,
          imgSource: "/images/logo.png",
        },
        {
          name: "Paneer Sandwich",
          price: 79,
          imgSource: "/images/logo.png",
        },
        {
          name: "Chicken Tikka Sandwich",
          price: 99,
          imgSource: "/images/logo.png",
        },
        {
          name: "Pepper BBQ Sandwich",
          price: 99,
          imgSource: "/images/logo.png",
        },
        {
          name: "Chicken Mayo Sandwich",
          price: 89,
          imgSource: "/images/logo.png",
        },
      ]}
    />
    <MenuGroup
      groupName="Burgers"
      items={[
        {
          name: "Veg. Mini Burger",
          price: 59,
          imgSource: "/images/logo.png",
        },
        {
          name: "Veg. Patty Burger",
          price: 79,
          imgSource: "/images/logo.png",
        },
        {
          name: "Chicken Patty Burger",
          price: 99,
          imgSource: "/images/logo.png",
        },
        {
          name: "Chicken Fillet Burger",
          price: 109,
          imgSource: "/images/logo.png",
        },
      ]}
    />
    <MenuGroup
      groupName="Grill Chicken"
      items={[
        {
          name: "Quarter",
          price: 100,
          imgSource: "/images/logo.png",
        },
        {
          name: "Half",
          price: 180,
          imgSource: "/images/logo.png",
        },
        {
          name: "Full",
          price: 340,
          imgSource: "/images/logo.png",
        },
      ]}
    />
    <MenuGroup
      groupName="Milkshakes"
      items={[
        {
          name: "Oreo Milkshake",
          price: 89,
          imgSource: "/images/logo.png",
        },
        {
          name: "Choco Kitkat Shake",
          price: 79,
          imgSource: "/images/logo.png",
        },
        {
          name: "Blueberry Milkshake",
          price: 89,
          imgSource: "/images/logo.png",
        },
        {
          name: "Butterscotch Shake",
          price: 69,
          imgSource: "/images/logo.png",
        },
        {
          name: "Vanilla Shake",
          price: 59,
          imgSource: "/images/logo.png",
        },
      ]}
    />
    <MenuGroup
      groupName="Mojitos"
      items={[
        {
          name: "Lemon Mint",
          price: 59,
          imgSource: "/images/logo.png",
        },
        {
          name: "Blue Caracao",
          price: 69,
          imgSource: "/images/logo.png",
        },
        {
          name: "Green Apple",
          price: 79,
          imgSource: "/images/logo.png",
        },
      ]}
    />
    <MenuGroup
      groupName="Beverages"
      items={[
        {
          name: "Pepsi / Coke",
          price: 40,
          imgSource: "/images/logo.png",
        },
        {
          name: "Water Bottle 1 Litre",
          price: 30,
          imgSource: "/images/logo.png",
        },
      ]}
    />
  </div>
);

export default Menu;
