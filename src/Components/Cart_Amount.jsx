import React, { useContext, useEffect } from 'react';
import { UserContext } from '../Context/userContext';
import { useNavigate } from 'react-router-dom';

const Cart_Amount = () => {
  const navigate = useNavigate();
  const { sub_total, cart, setTotalPay } = useContext(UserContext);
  
  const shipping_fee = sub_total > 1000 ? 0 : 50; // Shipping fee calculation
  const order_total = sub_total + shipping_fee; // Order total calculation including shipping fee

  useEffect(() => {
    setTotalPay(order_total);
  }, [order_total, setTotalPay]); // Add settotalPay to the dependency array

  return (
    <>
      <div className="amount">
        <span className="sub_total">
          <pre>Sub Total             :        Rs {sub_total}</pre>
        </span>
        <span className="shipping_fee">
          <pre>Shipping fee       :        {shipping_fee === 0 ? "" : "Rs"} {sub_total > 1000 ? "Free" : 50}</pre>
        </span>
        <hr />
        <span className="order_total">
          <pre>Order Total         :        Rs {order_total}</pre>
        </span>
      </div>
    </>
  );
};

export default Cart_Amount;
