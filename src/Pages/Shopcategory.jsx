import React, { useContext, useState } from 'react'
import "../CSS/ShopCategory.css"
import { ShopContext } from '../Context/ShopContext'
const Shopcategory = (props) => {
  const { all_product } = useContext(ShopContext)
  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />
    </div>
  )
}

export default Shopcategory
