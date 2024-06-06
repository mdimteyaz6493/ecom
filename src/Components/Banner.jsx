import React from 'react';
import Slider from "react-slick";


const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true, 
        autoplaySpeed: 3000, 
        arrows:true
    };
    
    return (
        <>
            <section className='home_slider'>
                <Slider {...settings} className='slider'>
                    <div className='slide'>
                        <img src="https://img.freepik.com/free-photo/african-american-man-looks-clothes-online-touch-screen-monitor-fashion-boutique-mall-self-service-board-male-customer-looking-trendy-clothes-items-retail-kiosk-display_482257-63314.jpg?t=st=1717158168~exp=1717161768~hmac=995a0a377b63bb049b7469b91ceaa705ee27011bb594b5ae10fc33738e70cd92&w=996" alt="" />
                    </div>
                    <div className='slide'>
                        <img src="https://img.freepik.com/free-photo/young-man-using-discount-coupon-his-smartphone-some-online-shopping-laptop_662251-2177.jpg?t=st=1717158849~exp=1717162449~hmac=950b8e6c9495f9eac6e143200e3bd8cf376698dd8c0eb4ba0a031133aa027f9d&w=996" alt="" />
                    </div>
                    <div className='slide'>
                        <img src="https://img.freepik.com/free-photo/cyber-monday-shopping-sales_23-2148688502.jpg?t=st=1717164644~exp=1717168244~hmac=8181d7ea8be8412b7e325aa4f6b9cf61d780cca8a16d53aa03b2604642d79037&w=996" alt="" />
                    </div>
                    <div className='slide'>
                        <img src="https://img.freepik.com/free-photo/laptop-blank-screen-hopping-cart-full-gifts-with-copyspace-online-shopping-concept_1423-92.jpg?t=st=1717164708~exp=1717168308~hmac=61ad2897076d51e24d692b9095b1e736d7c9bf3bbfb70f2f88b9b957d577d191&w=996" alt="" />
                    </div>
                </Slider>
            </section>
        </>
    );
}

export default Banner;
