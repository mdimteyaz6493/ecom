import React, { useContext } from "react";
import "../Styles/products_categ.css";
import product_category from "../Datas/Product_category";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/userContext";


const Product_category = () => {
  const navigate = useNavigate()
  const {Category,setCategory} = useContext(UserContext);

  const handleCategory=(selected_category)=>{
setCategory(selected_category)
navigate("/products")
  }
  return (
    <>
      <section className="pro_categ">
        <div className="categories">
          {product_category.map((category) => {
            return (
              <>
                <div className="category" onClick={()=>handleCategory(category.category)}>
                  <div className="image">
                    <img
                      alt={category.category}
                      src={category.image}
                    />
                  </div>
                  <span>{category.category}</span>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Product_category;
