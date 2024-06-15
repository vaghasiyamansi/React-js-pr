import React from 'react'
import Headers from './Header.css'
import logo from '../../Asset/logo.png'
import Uk from '../../Asset/UK.jpg'
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import { ADD , REMOVE} from '../../Redux/Action/Action'


const Header = () => {

  const data = useSelector((state)=>state.cartreducer.carts)
  const wishlistdata = useSelector((state) =>state.wishlistreducer.Wishlist)

 
  const naviGetSignIn = useNavigate();
  const naviGetWishlist = useNavigate();
  return (
    <div>
      <header>

       <div className='flex justify-around flex-wrap mt-10'>
          <img src={logo} alt="" />
          <div className=' bg-slate-200 rounded-lg object-cover '>
            <i class="fa-solid fa-magnifying-glass ms-3 me-3"></i>
            <input type="search" placeholder='Search Product' className='bg-slate-200 border-2 ms-2  h-10 min-w-[600px] rounded-md' name="Search" id="" />
          </div>
          <div className='flex '>
            <div className='flex border-2 ' id='eng'>
              <img src={Uk} alt="" />
              <select name="Language" id="Language" className='outline-none'>
                <option value="">English</option>
                <option value="">Arabic</option>
                <option value="">Spanish</option>
                <option value="">Mandarin</option>
              </select>
            </div>
            <div className='ms-2 flex'>
              <select name="Language" id="Language">
                <option value="">USD</option>
                <option value="">YEAN</option>
                <option value="">EURO</option>
              </select>
            </div>
          </div>
          <div className='flex items-center'>
            <div className=' position-relative'>

            </div>
            <button className='relative'>
            <Link to="/cart"><i class="fa-solid fa-cart-shopping fa-xl ms-3 pe-5"></i></Link>
            <span className="absolute bg-red-600 h-4 w-4 rounded-full text-xs text-white flex items-center justify-center bottom-4 left-8">
                    {data.length}
            </span>
            </button>

            <i class="fa-regular fa-user fa-xl ms-3 pe-5 "></i>

            <button className='relative'>
            <Link to="/wishlist"><i class="fa-regular fa-heart fa-xl ms-3 pe-5"></i></Link>
            <span className="absolute bg-red-600 h-4 w-4 rounded-full text-xs text-white flex items-center justify-center bottom-3 left-7">
                    {wishlistdata.length}
            </span>
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header


