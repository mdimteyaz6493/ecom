import React from 'react'
import { useNavigate } from 'react-router-dom'

const Empty_cart = () => {
    const navigate = useNavigate()
  return (
    <>
    <div className="empty_cart">
        <img src="shopping.png" alt="" />
        <span>Your Cart is empty</span>
        <button className="continue_shop"onClick={()=>navigate("/products")}>Continue Shopping</button>
    </div>
    </>
  )
}

export default Empty_cart
