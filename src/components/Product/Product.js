import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import "./Product.css";

const Product = ({handleAddToCart, product}) => {
  const { name, img, price, seller, ratings } = product;
  return (
    <div className="product-container">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-info">
        <h5>{name}</h5>
        <h6>Price : $ {price} </h6>
        <p>Seller : {seller} </p>
        <p>Ratings : {ratings}</p>
      </div>
      <button
        onClick={() => handleAddToCart(product)}
        className="btn-cart"
      >
        <p>
          Add to Cart <FaCartArrowDown />
        </p>
      </button>
    </div>
  );
};

export default Product;
