import React from "react";
import CartItem from "../CartItem";
import './style.css';

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__head">
        <h2>Košík</h2>
        <span>Položek: 1</span>
      </div>
      <div className="cart__items">
        <CartItem product={{ name: "Hrad z kostek", price: 450 }} />
      </div>
    </div>
  )
};

export default Cart;
