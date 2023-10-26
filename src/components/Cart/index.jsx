import { useState } from "react";
import CartItem from "../CartItem";
import './style.css';

const products = [
  {
    name: 'Hrad z kostek',
    price: 450,
    amount: 2,
  },
  {
    name: 'Autíčko na ovládání',
    price: 1500,
    amount: 1,
  },
  {
    name: 'Domeček pro panenky',
    price: 1350,
    amount: 1,
  },
  {
    name: 'Dětský telefon',
    price: 730,
    amount: 1,
  },
];

const Cart = () => {

const [cartProducts, setCartProducts] = useState(products);

const handleAmountChange = (index, newCount) => {
  const newProducts = [...cartProducts];
  newProducts[index].amount = newCount;
  setCartProducts(newProducts);
}

const cartAmount = () => {
  return cartProducts.reduce((sum, product ) => sum + product.amount, 0 );
}

  return (
    <div className="cart">
      <div className="cart__head">
        <h2>Košík</h2>
        <span>Položek: {cartAmount()} </span>
      </div>
      <div className="cart__items">
        {cartProducts.map((product, index) => (
          <CartItem 
          product={product} 
          onAmountChange={(amount) => {
            handleAmountChange(index,amount)}}
          />
          
        ))}
      </div>
    </div>
  )
};

export default Cart;
