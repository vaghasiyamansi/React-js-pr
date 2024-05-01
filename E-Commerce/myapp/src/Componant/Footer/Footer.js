import React from 'react'
import footer from './Footer.css'
import logo from "../../Asset/logo.png"
import Amozon from '../../Asset/Amazon.jpg'
import Appstore from '../../Asset/App store.jpg'
import Googleplay from '../../Asset/Googleplay.jpg'

function Footer() {
    return (
        <footer>

            <div className='container bg-stone-100 '>
                <div className=''>
                    <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 border-b-2 pb-10'>
                        <div className=''>
                            <div className='Logo'>
                                <a href="#">
                                    <img src={logo} alt="Logo.png" />
                                </a>
                                <p className='pt-10 text-wrap  pe-5  text-stone-500'>Elegant pink origami design three dimensional view and decoration co-exist. Great for adding a decorative touch to any room's decor.</p>
                            </div>
                        </div>

                        <div className='Info'>
                            <a href="#" className='font-bold underline'>Information</a>
                            <ul className='info text-stone-500'>
                                <li><a href="#">Custom Service</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Ordering Tracking</a></li>
                                <li><a href="#">Contacts</a></li>
                                <li><a href="#">Events</a></li>
                            </ul>
                        </div>

                        <div className='Account '>
                            <a href="#" className='font-bold underline'>My Account</a>
                            <ul className='account text-stone-500'>
                                <li><a href="#">Delivery Information</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Discount</a></li>
                                <li><a href="#">Custom Service</a></li>
                                <li><a href="#">Terms Condition</a></li>
                            </ul>
                        </div>

                        <div className='Social'>
                            <a href="#" className='font-bold underline'>Social Network</a>
                            <ul className='social text-stone-500'>
                                <li><a href="#"><span className='text-black pe-5'><i class="fa-brands fa-facebook-f"></i></span> Facebook</a></li>

                                <li><a href="#"><span className='text-black pe-5'><i class="fa-brands fa-dribbble"></i></span>Dribbble</a></li>

                                <li><a href="#"><span className='text-black pe-5'><i class="fa-brands fa-twitter"></i></span> Twitter</a></li>

                                <li><a href="#"><span className='text-black pe-5'><i class="fa-brands fa-behance"></i></span> Behance</a></li>

                                <li><a href="#"><span className='text-black pe-5'><i class="fa-brands fa-youtube"></i></span> Youtube</a></li>
                            </ul>
                        </div>



                        <div className='sletter'>
                            <a href="#" className='font-bold underline'>Get Newsletter</a>
                            <h3 className='social text-stone-500 text-xl pb-5'>Get on the list and get 10% off your first order!</h3>
                            <form action="">
                                <input type="text" placeholder='Enter Email address' className='text-sm p-5 w-64' />
                            </form>
                            <button className='bg-rose-600 pt-4 pb-4 ps-6 pe-6 text-white mt-3 rounded-md '>Subscribe Now <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>


                    <div className='bg-stone-100'>
                        <div className='flex justify-between'>
                            <div className=''>
                                <div className='time flex flex-wrap'>
                                    <a href="#" className='pt-3 text-2xl  rounded-full p-5 bg-white'><i class="fa-solid fa-phone-flip"></i></a>
                                    <div className='number ps-5 pt-2'>
                                        <span className='font-bold text-xl'>980. 029. 666. 99</span>
                                        <p className='text-stone-500'>Working 8:00 - 22:00</p>
                                    </div>
                                </div>
                            </div>
                            <div className='App flex'>
                                <div className='pe-5'>
                                    <span className='font-bold'>Download App on Mobile</span>
                                    <p className='text-stone-500'>15% discount on your first purchase</p>
                                </div>
                                <div className='flex'>
                                    <a href="#" className='pe-2'><img src={Googleplay} alt="" /></a>
                                    <a href="#"><img src={Appstore} alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='flex justify-between flex-wrap'>
                        <div>
                            <div className="footer-copyright__content">
                                <span>Copyright 2024 <a href="#" className='font-bold'>©Ninico</a>. All rights reserved. Developed by
                                    <a href="#" className='font-bold'> AliThemes</a>.</span>
                            </div>
                        </div>
                        <div className='App flex'>
                            <div>
                                <div className="footer-copyright__brand text-right">
                                    <img src={Amozon} alt="footer-brand" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

