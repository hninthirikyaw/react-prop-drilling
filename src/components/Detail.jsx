import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async() =>{
        const api = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await api.json()
        setProduct(data)
    }
  return (
    <div className=' shadow-lg w-70%  flex-col justify-center p-5 leading-10 tracking-wide'>
      <p className=' font-semibold'>{product.title}</p>
      <img src={product.image} className ="w-24" />
      <p className=''>📌{product.category}</p>
      <p className=' font-semibold'>${product.price}</p>
      <p>{product.description}</p>

    </div>
  )
}

export default Detail
