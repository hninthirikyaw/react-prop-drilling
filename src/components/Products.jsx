import React, { useEffect, useState } from 'react'
import Product from './Product'

const Products = ({products}) => {
   
  return (
    <div className=' flex flex-wrap justify-around items-center'>
        {products.map(it=>{
            return (
                <Product key={it.id} {...it} />
            )
        })}
    </div>
  )
}

export default Products
