import React, { useContext } from 'react';
import {UserContext} from "../Context/userContext"

const Filter_part = () => {
  const categories = ["All","Electronics", "Appliances", "Furniture", "Mobile", "Fashion"];
  const {setCategory,Category} = useContext(UserContext);
  console.log(Category)

  return (
    <>
      <div className="filter_part">
        <span className="filter_head">Category</span>
        <ul className="filter_list">
          {categories.map(category => (
            <li key={category} onClick={() => setCategory(category)}>
              {category}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Filter_part;
