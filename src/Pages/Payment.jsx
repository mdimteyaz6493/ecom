import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/userContext';
import Cart_single_product from '../Components/Cart_single_product';
import Cart_Amount from '../Components/Cart_Amount';
import "../Styles/payment.css";
import Navbar from '../Components/Navbar';
import UpiModal from '../Components/UpiModal';
import Card_Modal from '../Components/Card_Modal';

const Payment = () => {
  const { cart, setcart } = useContext(UserContext);
  const [isUpiModalOpen, setIsUpiModalOpen] = useState(false);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    setcart(cartData);
    console.log(cartData.product);
  }, [setcart]);

  const handleUpiClick = () => {
    setIsUpiModalOpen(true);
  };
  const handleCardClick = () => {
    setIsCardModalOpen(true);
  };

  const handleUpiConfirm = (upiId) => {
    console.log('UPI ID:', upiId);
    // Handle order confirmation here
  };
  const handleCardConfirm = (cardNumber) => {
    console.log('Card Number:', cardNumber);
    // Handle order confirmation here
  };
  const handleClearCart = () => {
    setcart([]);
    localStorage.setItem('cart', JSON.stringify([]));
  };
  return (
    <>
      <Navbar />
      <section className="payment">
        <div className="order_details">
          <div className="cont user_details">
            <span className='sec_title'>User Details</span>
            <span className="user_name">Imteyaz</span>
            <span className='user_contact'>+91 9955667788</span>
            <span className='user_address'>
              Nasima House west gandi maidan near biscoman bhawan patna - 800001
            </span>
          </div>
          <div className="cont selected_products">
            <span className='sec_title'>Product Details</span>
            <div className="cart_products">
              {cart.length === 0 ? (
                <div>Your cart is empty</div>
              ) : (
                cart.map((item, index) => (
                  <Cart_single_product key={index} data={item} />
                ))
              )}
            </div>
          </div>
          <div className="cont payment_options">
            <span className='sec_title'>Payment Options</span>
            <ul className='payment_option'>
                <li onClick={handleUpiClick}>Upi</li>
                <li onClick={handleCardClick}>Card</li>
                <li>Cash</li>
            </ul>
          </div>
        </div>
        <div className="amount_part">
        <span className='sec_title'>Total Amount</span>
          <Cart_Amount />
        </div>
      </section>
      <UpiModal 
        isOpen={isUpiModalOpen} 
        onRequestClose={() => setIsUpiModalOpen(false)} 
        onConfirm={handleUpiConfirm} 
        handleClearCart = {handleClearCart}
      />
      <Card_Modal
        isOpen={isCardModalOpen} 
        onRequestClose={() => setIsCardModalOpen(false)} 
        onConfirm={handleCardConfirm} 
        handleClearCart = {handleClearCart}
      />
    </>
  );
};

export default Payment;
