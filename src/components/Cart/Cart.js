import React from 'react';

const Cart = ({cart}) => {
     return (
          <div>
               <h2>Order summery</h2>
               <h4>length : {cart.length} </h4>
          </div>
     );
};

export default Cart;