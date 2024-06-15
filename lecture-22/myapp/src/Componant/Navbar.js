import {Link} from "react-router-dom"

// import React from 'react'

function Navbar() {
  return (
    <div>
         <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/help">Help</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/setting">Setting</Link></li>
         </ul>
    </div>
  )
}

export default Navbar
