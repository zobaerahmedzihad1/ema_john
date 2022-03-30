import React from "react";
import CartImage from "../CartImage/CartImage";
import "./Cart.css";

const Cart = ({ cart }) => {
  // console.log(cart);

  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = (total + shipping + tax).toFixed(2);

  return (
    <div className="cart">
      <h2>Order summery</h2>
      <p>Selected Items : {cart.length} </p>
      <p>Total price : {total} </p>
      <p>Total Shipping : {shipping} </p>
      <p>Total Tax : {tax} </p>
      <p>Grand Total : {grandTotal} </p>

      {cart.map((singleCart) => (
        <CartImage></CartImage>
      ))}
    </div>
  );
};

export default Cart;
