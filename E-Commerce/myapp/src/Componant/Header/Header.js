import React from 'react'
import Headers from './Header.css'
import logo from '../../Asset/logo.png'
import Uk from '../../Asset/UK.jpg'

const Header = () => {
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
            <i class="fa-regular fa-user ms-3 "></i>
            <i class="fa-regular fa-heart ms-3 "></i>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
