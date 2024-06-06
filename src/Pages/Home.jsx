import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Product_category from '../Components/Product_category'
import Home_products from '../Components/Home_products'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Product_category/>
      <Home_products/>
      <Footer/>
    </>
  )
}

export default Home
