import React, { useContext } from 'react'
import { UserContext } from '../Context/userContext';
import { useNavigate } from 'react-router-dom';

const Cart_Amount = () => {
  const navigate = useNavigate();
    const {sub_total,cart} = useContext(UserContext)
    const shipping_fee = 50;
    const order_total = sub_total + shipping_fee; 
  return (
    <>
     <div className="amount">
        <span className="sub_total">   <pre>Sub Total             :        Rs {sub_total} </pre></span>
        <span className="shipping_fee"><pre>Shipping fee       :        Rs {shipping_fee}  </pre></span>
        <hr />
        <span className="order_total"><pre>Order Total         :        Rs {order_total}</pre></span>
        </div> 
    </>
  )
}

export default Cart_Amount
