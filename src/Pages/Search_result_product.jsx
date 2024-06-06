import React from 'react';
import Filter_part from '../Components/Filter_part';
import Plp_products from '../Components/Plp_products';
import Product_card from '../Components/Product_card'; // Ensure you import Product_card
import { useParams } from 'react-router-dom';
import product_data from '../Datas/Products_data';
import Navbar from "../Components/Navbar"

const Search_result_product = () => {
  const { id } = useParams();
  const filteredProducts = product_data.filter(product => {
    const matchesCategory = product.id === id;
    // const matchesSearch = product.p_name.toLowerCase().includes(searchingItem.toLowerCase());
    return matchesCategory; // && matchesSearch;
  });

  return (
   <>
     <Navbar/>
    <div className="main">
    
      <Filter_part />
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
    </div>
   </>
  );
};

export default Search_result_product;
