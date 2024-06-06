import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Cart_single_product from "../Components/Cart_single_product";
import Cart_Amount from "../Components/Cart_Amount";
import "../Styles/Cart.css";
import { UserContext } from "../Context/userContext";
import { useNavigate } from "react-router-dom";
import Empty_cart from "../Components/Empty_cart";


const Cart = () => {
  const { cart, setcart } = useContext(UserContext);
  const navigate = useNavigate()

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    setcart(cartData);
    console.log(cartData.product)
  }, [setcart]);

  const handleClearCart = () => {
    setcart([]);
    localStorage.setItem('cart', JSON.stringify([]));
  };

  return (
    <>
      <Navbar />
      {cart.length==0? <Empty_cart/>:<section className="cart">
        <div className="cart_part1">
          <div className="cart_products">
            {
              cart.map((item, index) => (
                <Cart_single_product key={index} data={item} />
              ))
            }
          </div>
          <div className="cart_actions_btn">
            <button className="continue_shop"onClick={()=>navigate("/products")}>Continue Shopping</button>
            <button className="clear_cart" onClick={handleClearCart}>Clear Cart</button>
          </div>
          <button className='place_order' onClick={()=> navigate("/payment")}>Place Order</button>

        </div>
        <Cart_Amount />
        
      </section>}
    </>
  );
};

export default Cart;
