import React, { useContext } from "react";
import Product_card from "./Product_card";
import Filter_part from "./Filter_part";
import Plp_products from "./Plp_products";


const Plp_content = () => {
  return (
    <>
      <div className="main">
        <Filter_part/>
       <Plp_products/>
      </div>
    </>
  );
};

export default Plp_content;
