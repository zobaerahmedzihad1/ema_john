import React, { useEffect, useState } from "react";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shop-container">
      <div className="shop-container">
        <h2>This is shop : {products.length} </h2>
      </div>
      <div className="cart-container">
        <h4>Order summery</h4>
      </div>
    </div>
  );
};

export default Shop;
