import React from 'react';
import { Link } from 'react-router-dom';

const Product_card = ({ p_data, index }) => {
  return (
    <>
      <div className="products_card">
        <Link to={`/product/${p_data.id-1}`} className='card'>
          <div className="product_image">
            <img src={p_data.p_images[0]} alt={p_data.p_name} />
          </div>
          <span className="product_name">{p_data.p_name}</span><br />
          <span className="product_price" style={{fontWeight:"600",fontsize:"1.5rem"}}>From Rs.{p_data.p_price}</span>
        </Link>
      </div> 
    </>
  );
}

export default Product_card;
