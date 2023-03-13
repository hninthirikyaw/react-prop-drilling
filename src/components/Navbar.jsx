import React, { useEffect, useState } from 'react'
import { Link ,NavLink, useNavigate } from 'react-router-dom'

const Navbar = ({items, setItems}) => {
  console.log(items)
  const [search,setSearch] = useState("")
  
    // const nav = useNavigate()
    // const filter = items.filter(i=> i.title.toLowerCase().includes(search))
    // console.log(filter)
    //nav('/search/' , {state:{test:filter}})
  
  const submitHandler =(e) =>{
    e.preventDefault()
    const filterpd = items.filter(it => it.title.toLowerCase().includes(search))
    setItems(filterpd)
  }
  return (
    <div className=' p-4 flex justify-around items-center bg-gray-800 text-white'>
      <NavLink to={`/`}>
      <h1 className=''>Navbar</h1>
      </NavLink>
      <form onSubmit={submitHandler}>
        <input value={search}  onChange={e=>setSearch(e.target.value)} type="text" className=' text-gray-900 border rounded px-2 py-1' placeholder='search here..'/>
      </form>
    </div>
  )
}

export default Navbar
