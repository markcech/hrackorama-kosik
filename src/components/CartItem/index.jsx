import React from "react";
import Amount from "../Amount";
import CartProduct from "../CartProduct";
import './style.css';

const CartItem = ({ product }) => {
  return (
    <div className="cart-item">
      <CartProduct name={product.name} price={product.price} />
      <Amount value={product.amount} />
    </div>
  )
};

export default CartItem;
