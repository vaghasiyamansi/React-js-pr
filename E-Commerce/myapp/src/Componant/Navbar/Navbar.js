import React, { useState } from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"
// import Catagories from '../../Componant/Catagories/Catagories';

function Navbar() {
  const[isDataVisible, setIsDataVisible] = useState(false);

  const toggleDataVisibility = () => {
    setIsDataVisible(!isDataVisible)
  }
  return (
    <div>
        <div className="flex flex-col w-44 h-full text-white my-5 absolute" >
    
    
    <button id className="flex items-center justify-center h-16 border-b border-gray-950" onClick={toggleDataVisibility} >
        <h1 className="text-xl font-bold bg-red-700 " style={{height:"50px", width:"90%", textAlign:"center", padding:"10px", borderRadius:"10px"}}> <i class="fa-solid fa-bars mr-2"></i> Categories</h1>
    </button>
    
    
      <div className="flex flex-col flex-grow p-4 font-semibold dark:hover:bg-gray-100">
        {isDataVisible &&(
          <>
          
          
          <a href="#" className="text-gray-900 hover:text-red-800 mb-5 mr-5"> <i class="fa-regular fa-user text-red-700 mr-3" ></i> Candles</a>
          <a href="#" className="text-gray-900 hover:text-red-800 mb-5 mr-3"> <i class="fa-brands fa-pagelines text-red-700 mr-1"></i> Handmade</a>
          <a href="#" className="text-gray-900 hover:text-red-800 mb-5 mr-3"> <i class="fa-solid fa-shoe-prints text-red-700 mr-1"></i> Ginft Steps</a>
          <a href="#" className="text-gray-900 hover:text-red-800 mb-5 mr-3"> <i class="fa-regular fa-face-smile text-red-700 mr-2"></i> Plastic Gift</a>
          <a href="#" className="text-gray-900 hover:text-red-800 mb-5 ms-2"> <i class="fa-regular fa-futbol text-red-700 mr-2"></i> Handy Cream</a>
          <a href="#" className="text-gray-900 hover:text-red-800 mb-5 mr-6"> <i class="fa-regular fa-chess-king text-red-700 mr-2"></i> Cosmatic</a>
          <a href="#" className="text-gray-900 hover:text-red-800 mb-5 "> <i class="fa-solid fa-gift text-red-700 mr-2"></i> Silk Accessories</a>
          <a href="#" className="text-gray-950 hover:text-red-800 mb-4"> Value of The Day</a>
          <a href="#" className="text-gray-950 hover:text-red-800 mb-4"> Top 100 products</a>
          <a href="#" className="text-gray-950 hover:text-red-800 mb-4"> New Arrivels</a>
          </>
        )}
        
      </div>
      </div>
    
      <div className="grid grid-cols-7 items-center mt-4 ">
          <div className="col-1 rounded-lg">
            {/* <Catagories/> */}
          </div>
          <div className="col-span-6 px-4">
            <div className="flex justify-between">
              <nav>
                <div className="sm:ml-3">
                  <div className="flex space-x-4 cursor-pointer">
                    <div id="home" className="nav-link relative">
                      <Link to="/"
                        className="rounded-md px-3 my-3 mt-9 inline-block text-xl font-medium home header-link"
                      >
                        Home
                        <i className="fa-solid fa-angle-down ms-1 text-slate-500"></i>
                      </Link>
                      <ul className="text-start ps-2 rounded-b-lg bg-white text-sm link-lst absolute w-[250%] z-10  border-red-700 border-t-2 py-3">
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Wooden Home</a>
                        </li>
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Fashion Home</a>
                        </li>
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Furniture Home</a>
                        </li>
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Cosmetics Home</a>
                        </li>
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Food Grocery</a>
                        </li>
                      </ul>
                    </div>

                    <div id="shop" className="nav-link relative">
                      <a
                        href="#"
                        className="rounded-md px-3 my-3 mt-9 inline-block text-xl font-medium shop header-link"
                      >
                        Shop
                        <i className="fa-solid fa-angle-down ms-1 text-slate-500"></i>
                      </a>
                      <ul className="text-start ps-2 rounded-b-lg bg-white text-sm link-lst absolute w-[250%] z-10  border-red-700 border-t-2 py-3">
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Shop</a>
                        </li>
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Shop 2</a>
                        </li>
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Shop Details</a>
                        </li>
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Shop Details 2</a>
                        </li>
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Shop Location</a>
                        </li>
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Cart</a>
                        </li>
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Sign In</a>
                        </li>
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Checkout</a>
                        </li>
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Wishlist</a>
                        </li>
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Product Track</a>
                        </li>
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                        {/* <Link to="/*">Error/404</Link> */}
                        </li>
                      </ul>
                    </div>

                    <div id="page" className="nav-link relative">
                      <a
                        href="#"
                        className="rounded-md px-3 my-3 mt-9 inline-block text-xl font-medium pages header-link"
                      >
                        Pages
                        <i className="fa-solid fa-angle-down ms-1 text-slate-500"></i>
                      </a>
                      <ul className="flex text-start ps-2 rounded-b-lg bg-white text-sm link-lst absolute w-[900%] z-10  border-red-700 border-t-2 py-3">
                        <ul className="px-3 w-[150%]">
                          <h2 className="pt-2 pb-3 ms-3 hover:text-red-600 font-semibold">
                            PAGE LAYOUT
                          </h2>
                          <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all">
                            <a href="#">Shop filters v1</a>
                          </li>
                          <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all">
                            <a href="#">Shop filters v2</a>
                          </li>
                          <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all">
                            <a href="#">Shop sidebar</a>
                          </li>
                          <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all">
                            <a href="#">Shop Right sidebar</a>
                          </li>
                          <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all">
                            <a href="#">Shop List view</a>
                          </li>
                        </ul>
                        <ul className="px-3 w-[150%]">
                          <h2 className="pt-2 pb-3 ms-3 hover:text-red-600 font-semibold">
                            PAGE LAYOUT
                          </h2>
                          <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all">
                            <Link to="/about">About</Link>
                          </li>
                          <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all">
                            <a href="#">Cart</a>
                          </li>
                          <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all">
                            <a href="#">Checkout</a>
                          </li>
                          <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all">
                            <Link to="/sign">Sign</Link>
                          </li>
                          <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all">
                            <Link to ="/login">Log</Link>
                          </li>
                        </ul>
                        <ul className="px-3 w-[150%]">
                          <h2 className="pt-2 pb-3 ms-3 hover:text-red-600 font-semibold">
                            PAGE TYPE
                          </h2>
                          <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all">
                            <a href="#">Product Track</a>
                          </li>
                          <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all">
                            <Link to="/wishlist">Wishlist</Link>
                          </li>
                          <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all">
                          <Link to="/*">Error/404</Link>
                          </li>
                          <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all">
                            <a href="#">Coming Soon</a>
                          </li>
                        </ul>
                      </ul>
                    </div>

                    <div id="blog" className="nav-link relative">
                      <a
                        href="#"
                        className="rounded-md px-3 my-3 mt-9 inline-block text-xl font-medium blog header-link"
                      >
                        Blog
                        <i className="fa-solid fa-angle-down ms-1 text-slate-500"></i>
                      </a>
                      <ul className="text-start ps-2 rounded-b-lg bg-white text-sm link-lst absolute w-[250%] z-10  border-red-700 border-t-2 py-3">
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Blog</a>
                        </li>
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Blog Details</a>
                        </li>
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                        {/* <Link to="/*">Error/404</Link> */}
                          </li>
                      </ul>
                    </div>

                    <div id="contact" className="nav-link relative">
                      <Link to="/contact"
                        className="rounded-md px-3 my-3 mt-9 inline-block text-xl font-medium contact header-link"
                      >
                        Contact
                      </Link>
                      <ul className="text-start ps-2 rounded-b-lg bg-white text-sm link-lst absolute w-[250%] z-10  border-red-700 border-t-2 py-3">
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                        {/* <Link to="/*">Error/404</Link> */}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
              <div className="pe-4 mt-9 text-xl font-semibold flex justify-end items-center">
                <span className="call me-8">
                  <i className="fa-solid fa-phone-flip me-2"></i>908. 408. 501.
                  89
                </span>
                <span className="location">
                  <i className="fa-solid fa-location-dot me-2"></i>Find Store
                </span>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};
   
export default Navbar
                        
                          
