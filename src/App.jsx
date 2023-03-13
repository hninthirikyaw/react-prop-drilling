import React, { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Detail from './components/Detail'
import Navbar from './components/Navbar'
import Products from './components/Products'


const App = () => {
  const [item, setItem] = useState([])

  useEffect(()=>{
      fetchData()
  },[])

  const fetchData = async() =>{
      const api = await fetch(`https://fakestoreapi.com/products`)
      const data = await api.json()
      setItem(data)
  }
  return (
    <div>
      <Navbar items ={item} setItems ={setItem}/>
      <Routes> 
        <Route path='/' element={<Products products={item} />}  />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
