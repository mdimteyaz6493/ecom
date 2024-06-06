import React from 'react'
import Navbar from '../Components/Navbar'
import Pdp_image_part from '../Components/Pdp_image_part'
import Pdp_product_desc_part from '../Components/Pdp_product_desc_part'
import "../Styles/pdp.css"

const PDP = () => {
  return (
    <div>
      <Navbar/>
      <section className='pdp_section'>
      <Pdp_image_part/>
      <Pdp_product_desc_part/>
      </section>
    </div>
  )
}

export default PDP
