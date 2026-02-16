import React from "react";

const pizzaData = [
  {
    name: "Facaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "/assets/focaccia.jpg",
    soldout: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "/assets/magerita.webp",
    soldout: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach and ricotta cheese",
    price: 12,
    photoName: "/assets/spinaci.jpg",
    soldout: false,
  },

  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 12,
    photoName: "/assets/funghi.jpg",
    soldout: false,
  },

  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "/assets/salamino.jpg",
    soldout: false,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "/assets/prosciutto.jpg",
    soldout: false,
  },
];

export default function Pizza() {
  return (
    <>
      <img src="src/assets/prosciutto.jpg" alt="pizza" />
      <h1>Pizza Prosciutto</h1>
      <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
    </>
  );
}
