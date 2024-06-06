import Product_card from './Product_card';
import product_data from '../Datas/Products_data';
import React, { useContext, useState } from 'react';
import {UserContext} from "../Context/userContext"


const Plp_products = () => {
  
  const {Category,searchingItem} = useContext(UserContext);
  const filteredProducts = product_data.filter(product => {
    const matchesCategory = Category === 'All' || product.p_category === Category;
    //const matchesSearch = product.p_name.toLowerCase().includes(searchingItem.toLowerCase());
    return matchesCategory //&& matchesSearch;
  });

  if(Category=="All"){
    return(
      <>
       <div className="product_list_part">
        <div className="plp_head">
          <span>Total number of products: {product_data.length}</span>
        </div>
        <div className="plp_content">
          {product_data.map((product, index) => (
            <Product_card key={index} p_data={product} index={index} />
          ))}
        </div>
      </div>
      </>
    )
  }

  if(!Category){
    return(
      <>
       <div className="product_list_part">
        <div className="plp_head">
          <span>Total number of products: {product_data.length}</span>
        </div>
        <div className="plp_content">
          {product_data.map((product, index) => (
            <Product_card key={index} p_data={product} index={index} />
          ))}
        </div>
      </div>
      </>
    )
  }
  return (
    <>
      <div className="product_list_part">
        <div className="plp_head">
          <span>Total number of products: {filteredProducts.length}</span>
        </div>
        <div className="plp_content">
          {filteredProducts.map((product, index) => (
            <Product_card key={index} p_data={product} index={index} />
          ))}
        </div>
      </div> 
    </>
  );
}

export default Plp_products;
