import React,{useRef , useState} from 'react'
import Breadcrumb01 from '../../Asset/breadcrumb01.jpg';
import Aboutimg1 from '../../Asset/about-img-1.jpg';
import Aboutimg2 from '../../Asset/about-img-2.jpg';
import team1 from '../../Asset/team1.jpg';
import team2 from '../../Asset/team2.jpg';
import team3 from '../../Asset/team3.jpg';
import team4 from '../../Asset/team4.jpg';
import aboutbanner1 from '../../Asset/about-banner-1.jpg';
import aboutbanner2 from '../../Asset/about-banner-2.jpg';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Autoplay, Pagination } from 'swiper/modules';

function About() {
  return (
    <div>
        <div>
                <div className="text-left relative">
                    <img src={Breadcrumb01} alt="Error Image" className="h-[40vh] pt-8" />

                    <div className="absolute top-[20%] px-10 ">
                        <h4 className="my-4 hover:text-red-600 cursor-pointer">
                            Home
                            <span className="text-gray-600">
                                ---- About Us
                            </span>
                        </h4>
                        <h2 className="text-3xl font-bold">
                            About Us
                        </h2>
                    </div>
                </div>
        </div>

        <div className=''>
            <div className='flex gap-5 mt-10'>
              <img src={Aboutimg1} alt="" className='w-[730px] ms-5' />
              <img src={Aboutimg2} alt="" className='w-[730px]' />
            </div>
            <div>
            </div>
            <div className='flex ms-5 mt-8'>
              <div>
                <p className='text-gray-600 text-xl'>About Us</p>
                <span className='text-3xl font-bold'>About Our Story</span>
              </div>
            </div>

        <div className='grid gris-col-3 mt-10'>
            <div className='flex gap-10'>

              <p className='text-stone-600 w-[510px]  ms-5'>
                Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services without costly customization or add ons. Get orders to your customers in lots of ways by offering shipping, pickup, delivery, and even QR code ordering.
              </p>
              <p className='text-stone-600 w-[510px]'>
                Expand your reach and sell more using seamless integrations with Google, Instagram, Facebook, and more. Built- in SEO tools make it easy for shoppers to find your business on search engines. Get access to the entire suite of integrated Square solutions to help you run your business. Integration between Square Online and all Square point of sale systems makes inventory management easy. Subscribe to Square Marketing and easily send email promotions to your customers using the contact information
              </p>

              <ul className='w-[360px]'>
                <li >Orders go right to your restaurant point of sale, KDS, and kitchen</li>
                <li className='mt-4'>Provide in-person pickup, delivery by professional couriers</li>
                <li className='mt-4'>Offer in-person diners self-serve, contactless ordering via QR codes.</li>
              </ul>
            </div>
          </div>

          <div>
            <div className=' mt-14 text-center '>
              <h6 className='text-2xl text-stone-600'>Team</h6>
              <h1 className='text-5xl font-semibold'>Meet With Team</h1>
            </div>

              {/* <Swiper
                slidesPerView={4}
                spaceBetween={10}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  576: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  992: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                }}
                modules={[Autoplay, Pagination]}
                className="mySwipers"
              > */}

                <div className='flex justify-between pt-10'>
                    
                  <div className='relative ms-10'>
                    <img src={team1} alt="" className='rounded-md' />
                    <div className='text-white absolute top-[70%] ms-7'>
                      <h5 className='text-sm pt-10'>Founder</h5>
                      <h1 className='text-xl font-bold'>Rosalina D. Willson</h1>
                    </div>
                  </div>

                  <div className='relative'>
                    <img src={team2} alt="" className='rounded-md' />
                    <div className='text-white   absolute top-[70%] ms-7'>
                      <h5 className='text-sm pt-10'>CEO</h5>
                      <h1 className='text-xl font-bold'>Ukolilix X. Xilanorix</h1>
                    </div>
                  </div>

                  <div className='relative'>
                    <img src={team3} alt="" className='rounded-md' />
                    <div className='text-white   absolute top-[70%] ms-7'>
                      <h5 className='text-sm pt-10'>Designer</h5>
                      <h1 className='text-xl font-bold'>Alonso M. Miklonax</h1>
                    </div>
                  </div>
                
                  <div className='relative'>
                    <img src={team4} alt="" className='rounded-md' />
                    <div className='text-white   absolute top-[70%] ms-7'>
                      <h5 className='text-sm pt-10'>Developer</h5>
                      <h1 className='text-xl font-bold'>Miranda H. Halim</h1>
                    </div>
                  </div>
                <div/>
                </div>
          </div>

          <div>
            <div className='grid grid-col-2 mt-20'>
              <div className='flex gap-20 '>
                <img src={aboutbanner1} alt="banner" className='w-[700px] ms-5' />

                <div className='w-[700px] block'>
                  <h5 className='text-stone-500 pt-20'>Features #01</h5>

                  <h1 className='font-bold text-3xl mt-2'>Solutions that work together</h1>

                  <p className='text-stone-500 font-semibold mt-5'>Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.</p>

                  <button className='border ps-6 pe-6 mt-10 pb-2 pt-2 font-semibold rounded-md hover:bg-rose-600 hover:text-white'>Get In Touch</button>

                </div>
              </div>

              <div className='flex gap-20 mt-10 mb-10'>
                <div className='w-[700px] block'>
                  <h6 className='text-stone-500 pt-20'>Features #02</h6>

                  <h1 className='font-bold text-3xl mt-2'>All kinds of payments securely</h1>

                  <p className='text-stone-500 font-semibold mt-5'>Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.</p>

                  <button className='border ps-6 pe-6 mt-10 pb-2 pt-2  font-semibold rounded-md hover:bg-rose-600 hover:text-white'>Contact With Us</button>
                </div>
                <img src={aboutbanner2} alt="banner" className='w-[700px]'/>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default About
                







        


        
