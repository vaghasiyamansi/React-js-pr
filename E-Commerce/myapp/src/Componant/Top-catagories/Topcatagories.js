import React from 'react'
import {Link} from "react-router-dom"

import cat01 from '../../Asset/cat01.svg'
import cat02 from '../../Asset/cat02.svg'
import cat03 from '../../Asset/cat03.svg'
import cat04 from '../../Asset/cat04.svg'
import cat05 from '../../Asset/cat05.svg'
import cat06 from '../../Asset/cat06.svg'
import product1 from '../../Asset/product1.jpg'
import product2 from '../../Asset/product2.jpg'
import product3 from '../../Asset/product3.jpg'
import product4 from '../../Asset/product4.jpg'
import product5 from '../../Asset/product5.jpg'
import product6 from '../../Asset/product6.jpg'
import product7 from '../../Asset/product7.jpg'
import product8 from '../../Asset/product8.jpg'
import product9 from '../../Asset/product9.jpg'
import product10 from '../../Asset/product10.jpg'
// import  '../../Componant/Topcatagorie.css'

function Topcatagories() {
  return (
    <div>
      <div className="flex space-x-6 ml-28 mt-14" >
        <a className="h-18 mx-0 text text-4xl font-medium" > Top</a>
        <a className="h-18 mx-0 text text-4xl text-red-700 font-extralight " >Categories</a>
        </div>

<div className="drsh" style={{display:"flex", justifyContent:"space-between"}}>

<div class="w-52 h-64 mt-5 bg-white shadow dark:bg-gray-100 ">
    <div class="flex justify-end px-4 pt-4 w-20 ml-28 ">
      
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block bg-white text-red-600 font-bold dark:hover:text-zinc-50 dark:hover:bg-red-700 focus:ring-4 dark:hover:animation duration-500 focus:outline-none focus:ring-gray-200 rounded-full text-sm p-1.5 h-11  w-11" type="button">20</button>
      
    </div>
    <div class="flex flex-col items-center pb-10"> 
        <img src={cat01} className="hover:bg-slate-200 h-24 w-24 p-7" style={{borderRadius:"100px", fontSize:"50px", textAlign:"center", }}></img>
        <span class="text-lg  dark:text-gray-900 mt-5">Drift Wood</span>
        <span class="text-lg  dark:text-gray-900">Table Decore</span>
        
    </div>
</div>

<div class="w-52 h-64 mt-5 bg-white shadow dark:bg-gray-100 ">
    <div class="flex justify-end px-4 pt-4 w-20 ml-28 ">
      
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block bg-white text-red-600 font-bold dark:hover:text-zinc-50 dark:hover:bg-red-700 focus:ring-4 dark:hover:animation duration-500 focus:outline-none focus:ring-gray-200 rounded-full text-sm p-1.5 h-11  w-11" type="button">12</button>
      
    </div>
    <div class="flex flex-col items-center pb-10">
        <img src={cat02} className= "hover:bg-slate-200 h-24 w-24 p-7" style={{borderRadius:"100px", fontSize:"50px", textAlign:"center", }}></img>
        <span class="text-lg  dark:text-gray-900 mt-5">Floor Driftwood</span>
        <span class="text-lg  dark:text-gray-900">Sculpture</span>
        
    </div>
</div>


<div class="w-52 h-64 mt-5 bg-white shadow dark:bg-gray-100 ">
    <div class="flex justify-end px-4 pt-4 w-20 ml-28 ">
      
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block bg-white text-red-600 font-bold dark:hover:text-zinc-50 dark:hover:bg-red-700 focus:ring-4 dark:hover:animation duration-500 focus:outline-none focus:ring-gray-200 rounded-full text-sm p-1.5 h-11  w-11" type="button">03</button>
      
    </div>
    <div class="flex flex-col items-center pb-10">
        <img src={cat03} className= "hover:bg-slate-200 h-24 w-24 p-7 " style={{borderRadius:"100px", fontSize:"50px", textAlign:"center", }}></img>
        <span class="text-lg  dark:text-gray-900 mt-5">Drift Wood</span>
        <span class="text-lg  dark:text-gray-900">Christmas Tree</span>
        
    </div>
</div>


<div class="w-52 h-64 mt-5 bg-white shadow dark:bg-gray-100 ">
    <div class="flex justify-end px-4 pt-4 w-20 ml-28 ">
      
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block bg-white text-red-600 font-bold dark:hover:text-zinc-50 dark:hover:bg-red-700 focus:ring-4 dark:hover:animation duration-500 focus:outline-none focus:ring-gray-200 rounded-full text-sm p-1.5 h-11  w-11" type="button">9</button>
      
    </div>
    <div class="flex flex-col items-center pb-10">
        <img src={cat04} className="hover:bg-slate-200 h-24 w-24 p-7" style={{borderRadius:"100px", fontSize:"50px", textAlign:"center", }}></img>
        <span class="text-lg  dark:text-gray-900 mt-5">Wooden</span>
        <span class="text-lg  dark:text-gray-900">Bluetooth Speaker</span>
        
    </div>
</div>


<div class="w-52 h-64 mt-5 bg-white shadow dark:bg-gray-100 ">
    <div class="flex justify-end px-4 pt-4 w-20 ml-28 ">
      
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block bg-white text-red-600 font-bold dark:hover:text-zinc-50 dark:hover:bg-red-700 focus:ring-4 dark:hover:animation duration-500 focus:outline-none focus:ring-gray-200 rounded-full text-sm p-1.5 h-11  w-11" type="button">10</button>
      
    </div>
    <div class="flex flex-col items-center pb-10">
        <img src={cat05} className= "hover:bg-slate-200 h-24 w-24 p-7" style={{borderRadius:"100px", fontSize:"50px", textAlign:"center", }}></img>
        <span class="text-lg  dark:text-gray-900 mt-5">Receivers</span>
        <span class="text-lg  dark:text-gray-900"> Amplifiers</span>
        
    </div>
</div>

<div class="w-56 h-64 mt-5 bg-white shadow dark:bg-gray-100 ">
    <div class="flex justify-end px-4 pt-4 w-20 ml-28 ">
      
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block bg-white text-red-600 font-bold dark:hover:text-zinc-50 dark:hover:bg-red-700  dark:hover:animation duration-500 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-full text-sm p-1.5 h-11  w-11" type="button">05</button>
      
    </div>
    <div class="flex flex-col items-center pb-10">
        <img src={cat06} className=" hover:bg-slate-200 h-24 w-24 p-7 " style={{borderRadius:"100px", fontSize:"50px", textAlign:"center", }}></img>
        <span class="text-lg  dark:text-gray-900 mt-5">Appetizer</span>
        <span class="text-lg  dark:text-gray-900">Plate Set</span>
        
    </div>
</div>
</div>


 <div className="flex justify-between">
    
<div className="flex space-x-6 ml-28 mt-10" >
        <a className="h-18 mx-0 text text-4xl font-medium" >Popular</a>
        <a className="h-18 mx-0 text text-4xl text-red-700 font-extralight " >Products</a>
        </div>


        
<nav class="bg-gray-100 dark:bg-white" >
    <div class="max-w-screen-96 px-20 py-3 mx-auto mt-10 ml-96 ">
        <div class="flex items-center">
            <ul class="flex flex-row font-bold mt-0 space-x-10 rtl:space-x-reverse text-sm ">
                <li>
                    <a href="#" class="text-gray-900 dark:text-black hover:underline" aria-current="page">All</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-black hover:underline">Populor</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-black hover:underline">On Side</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-red-800 hover:underline">Best Reted</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

</div>


{/* <div className="card" style={{display:"flex", justifyContent:"space-evenly"}}>

<div className='main'>
<a href="#" class=" burdges flex flex-col items-center mt-6 bg-white border border-gray-200 rounded-lg shadow md:max-w-56 relative">
    <img src={product1} className="object-coverw-full rounded-t-lg h-96 md:h-auto md:w-full md:rounded-none md:rounded-s-lg" alt=""/>
    <img src={product2} className=' image-2 absolute top-0 left-0 opacity-0 '></img>
</a>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <p class="mb-3 font-normal text-neutral-500 dark:text-gray-600">Bradley Burgess 2</p>
        <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">$20.00</h5>
    </div>
</div>

<Link to="/product2" class="flex flex-col items-center mt-6 bg-white border border-gray-200 rounded-lg shadow md:max-w-56">
    <img src={product2} className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-full md:rounded-none md:rounded-s-lg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <p class="mb-3 font-normal text-neutral-500 dark:text-gray-600">Allie Sharp</p>
        <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">$30.00</h5>
    </div>
    Product2
</Link>

<a href="#" class="flex flex-col items-center mt-6 bg-white border border-gray-200 rounded-lg shadow md:max-w-56">
    <img src={product3} className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-full md:rounded-none md:rounded-s-lg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <p class="mb-3 font-normal text-neutral-500 dark:text-gray-600">Nathaniel Baldwin</p>
        <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">$40.00</h5>
    </div>
</a>
<a href="#" class="flex flex-col items-center mt-6 bg-white border border-gray-200 rounded-lg shadow md:max-w-56">
    <img src={product4} className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-full md:rounded-none md:rounded-s-lg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <p class="mb-3 font-normal text-neutral-500 dark:text-gray-600">Effie Rios</p>
        <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">$40.00</h5>
    </div>
</a>

<a href="#" class="flex flex-col items-center mt-6 bg-white border border-gray-200 rounded-lg shadow md:max-w-56">
    <img src={product5} class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-full md:rounded-none md:rounded-s-lg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <p class="mb-3 font-normal text-neutral-500 dark:text-gray-600">Carolyn Goodwin</p>
        <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">$50.00</h5>
    </div>
</a>

</div> 

<div className="card" style={{display:"flex", justifyContent:"space-evenly" , width:""}}>


<a href="#" class="flex flex-col items-center mt-6 bg-white border border-gray-200 rounded-lg shadow md:max-w-56">
    <img src={product6} className="object-coverw-full rounded-t-lg h-96 md:h-auto md:w-full md:rounded-none md:rounded-s-lg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <p class="mb-3 font-normal text-neutral-500 dark:text-gray-600">Evelyn Patton</p>
        <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">$60.00</h5>
    </div>
</a>
<a href="#" class="flex flex-col items-center mt-6 bg-white border border-gray-200 rounded-lg shadow md:max-w-56">
    <img src={product7} className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-full md:rounded-none md:rounded-s-lg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <p class="mb-3 font-normal text-neutral-500 dark:text-gray-600">Sally Ray</p>
        <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">$70.00</h5>
    </div>
</a>
<a href="#" class="flex flex-col items-center mt-6 bg-white border border-gray-200 rounded-lg shadow md:max-w-56">
    <img src={product8} className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-full md:rounded-none md:rounded-s-lg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <p class="mb-3 font-normal text-neutral-500 dark:text-gray-600">Ora Bowman</p>
        <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">$80.00</h5>
    </div>
</a>

<a href="#" class="flex flex-col items-center mt-6 bg-white border border-gray-200 rounded-lg shadow md:max-w-56">
    <img src={product9} className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-full md:rounded-none md:rounded-s-lg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <p class="mb-3 font-normal text-neutral-500 dark:text-gray-600">Frederick Valdez</p>
        <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">$90.00</h5>
    </div>
</a>

<a href="#" class="flex flex-col items-center mt-6 bg-white border border-gray-200 rounded-lg shadow md:max-w-56">
    <img src={product10} class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-full md:rounded-none md:rounded-s-lg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <p class="mb-3 font-normal text-neutral-500 dark:text-gray-600">Terry Byrd</p>
        <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">$100.00</h5>
    </div>
</a>

</div>  */}
</div>
  )
}

export default Topcatagories 
