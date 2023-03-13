import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({title,price,image, id}) => {
  return (
    <div className=' shadow-lg mb-5 p-5 '>
      <img src={image} className="w-28  object-cover" />
      <p className=' text-xl my-2'>{title.substring(0,25)}...</p>
      <p className=' font-semibold my-2'>${price}</p>
      <button className=' mr-3 rounded-md px-4 py-1 bg-cyan-700 text-white shadow-md hover:bg-cyan-900 '>Add to cart</button>
      <Link to={`/detail/${id}`}>
      <button className=' rounded-md px-4 py-1 bg-cyan-700 text-white shadow-md hover:bg-cyan-900 '>Detail</button>
      </Link>

    </div>
  )
}

export default Product
