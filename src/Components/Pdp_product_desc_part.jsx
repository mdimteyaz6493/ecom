import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import product_data from '../Datas/Products_data';


const Pdp_product_desc_part = () => {
  const { id } = useParams();
  const product = product_data.find((p, index) => index.toString() === id);
  const navigate = useNavigate();

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productInCart = cart.find((p) => p.id === id);

    if (!productInCart) {
      cart.push(product);
    } else {
      productInCart.quantity += 1;
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
  };

  return (
    <div className="product_full_dec">
      <span className="product_title">{product.p_name}</span>
      <div className="ratings">
        {product.p_rating}
      </div>
      <div className="product_price">MRP : Rs{product.p_price}</div>
      <div className="desc_part">
        {product.p_desc}
      </div>
      <div className="icons_part">
        <div className="icon">
          <img src="https://cdn-icons-png.flaticon.com/128/2769/2769339.png" alt="" />
          <span className='icon_name'>Free Delivery</span>
        </div>
        <div className="icon">
          <img src="https://cdn-icons-png.flaticon.com/128/754/754616.png" alt="" />
          <span className='icon_name'>30 Days Replacement</span>
        </div>
        <div className="icon">
          <img src="https://cdn-icons-png.flaticon.com/128/754/754616.png" alt="" />
          <span className='icon_name'>Easy delivered</span>
        </div>
        <div className="icon">
          <img src="https://cdn-icons-png.flaticon.com/128/2915/2915324.png" alt="" />
          <span className='icon_name'>2 year Warranty</span>
        </div>
      </div>
      <span className='brand'>{product.p_brand}</span>
      <div className="buttons">
        <button className="add_cart" onClick={handleAddToCart}>Add to Cart</button>
        <button className="buy_now">Buy Now</button>
      </div>
    </div>
  );
};

export default Pdp_product_desc_part;
