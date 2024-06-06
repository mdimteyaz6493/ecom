import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import product_data from '../Datas/Products_data';

const Pdp_image_part = () => {
  const { id } = useParams();
  const product = product_data.find((p, index) => index.toString() === id);

  const [bigImage, setBigImage] = useState(product.p_images[0]);

  const handleSmallImageClick = (src) => {
    setBigImage(src);
  };

  return (
    <>
      <div className="image_part_container">
        <div className="big_Image">
          <img src={bigImage} alt="big_image" />
        </div>
        <div className="small_Images">
          {product.p_images.map((image_link, index) => (
            <img 
              key={index} 
              src={image_link} 
              alt={`small_image_${index}`} 
              onClick={() => handleSmallImageClick(image_link)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Pdp_image_part;
