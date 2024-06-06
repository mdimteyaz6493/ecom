import React, { useContext, useEffect } from 'react';
import { UserContext } from '../Context/userContext';
import { useNavigate } from 'react-router-dom';


const Cart_single_product = ({ data}) => {
  const navigate = useNavigate()
  const { setsub_total, sub_total,updateQuantity,removeProduct} = useContext(UserContext);
  const { id, p_name, p_rating, p_price, p_images,quantity} = data;

  useEffect(() => {
    const productTotal = p_price * quantity;
    setsub_total((prev) => prev + productTotal);

    return () => {
      setsub_total((prev) => prev - productTotal);
    };
  }, [quantity, p_price, setsub_total]);

  return (
    <div className="cart_single_product">
      <div className="cart_product_image" onClick={()=>navigate(`/product/${id-1}`)}>
        <img src={p_images} alt={p_name} />
      </div>
      <div className="cart_product_desc">
        <span className="cart_product_name">{p_name}</span>
        <div className="cart_product_rating">{p_rating} stars</div>
        <span className="cart_product_price">Rs {p_price * quantity}</span>
        <div className="quantity">
          <button onClick={()=>updateQuantity(id,1)}>+</button>
          <span>{quantity}</span>
          <button onClick={()=>updateQuantity(id,-1)} disabled={quantity <= 1}>-</button>
        </div>
        <button className="remove" onClick={() => removeProduct(id)}>
          <img src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png" alt="Remove" />
        </button>
      </div>
    </div>
  );
};

export default Cart_single_product;
