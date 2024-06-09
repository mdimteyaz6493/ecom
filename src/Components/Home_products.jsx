import React from 'react'
import "../Styles/home_product.css"
import Slider from "react-slick";
import Product_card from './Product_card';
import product_data from '../Datas/Products_data';

const Home_products = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768, // You can adjust the breakpoint as needed
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };


    // Slice the first 10 products
    const slicedProductData = product_data.slice(0, 6);

    return (
        <>
            <section className="home_prods">
                <div className="slider-container" style={{height:"450px",width:"100%",backgroundColor:"white",padding:"20px"}}>
                    <h1>Our Best Deals</h1>
                    <Slider {...settings} style={{height:"80%",width:"100%",padding:"20px"}}>
                        {slicedProductData.map((product, index) => (
                            <div key={index}>
                                <Product_card p_data={product} index={index} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Home_products
