import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/navbar.css";
import { UserContext } from "../Context/userContext";
import SearchingResultList from "./SearchingResultList";

const Navbar = () => {
  const { setsearchingItem, searchingItem = "", cart, setcart } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    setcart(cartData);
  }, [setcart]);

  const handleChange = (e) => {
    const value = e.target.value;
    setsearchingItem(value);
    console.log(value); // Log the value directly from the event
  };

  return (
    <>
      <nav>
        <div className="logo" onClick={() => navigate("/")}>ShopWithme</div>
        <input
          type="search"
          placeholder="search any products"
          className="search"
          value={searchingItem}
          onChange={handleChange}
        />
        <div className="products_icon" onClick={()=>navigate("/products")}>
        <img src="https://cdn-icons-png.flaticon.com/128/3222/3222664.png" alt="" />
        <span>All products</span>
        </div>
        <div className="user_section">
          <div className="avatar">
            <i className="fa-regular fa-user"></i>
          </div>
          <div className="name">username</div>
        </div>
        <div className="cart_icon" onClick={() => navigate("/cart")}>
          <i className="fa-solid fa-cart-shopping"></i>
          <span>Cart</span>
          <div className="cart_number">{cart.length}</div>
        </div>
      </nav>
      <SearchingResultList searchingItem={searchingItem} setsearchingItem={setsearchingItem}/>
    </>
  );
};

export default Navbar;
