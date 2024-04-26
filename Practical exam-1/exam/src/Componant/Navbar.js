import {Link} from "react-router-dom"
import logo from '../Aseet/logo.png'

// import React from 'react'

function Navbar() {
  return (
    <div className=" bg-blue-300 flex font-bold  justify-between text-blue-900 hover:text-red-600 p-5">
      <div>
      <img className=" flex justify-start" src={logo} alt=""/>
      </div>

      <div>
         <ul className="flex gap-12 items-center">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">
              <button className="bg-blue-900 rounded-md text-white pb-2 pt-1 ps-2 pe-2">Login</button>
            </Link></li>
            <li><Link to="/img">Img</Link></li>
         </ul>
      </div>
    </div>
  )
}



export default Navbar
