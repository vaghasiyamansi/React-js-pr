// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import Homepage from './Homepage.css';

// import banner1 from '../../Asset/banner1.jpg'
// import banner2 from '../../Asset/banner2.jpg'
// import banner3 from '../../Asset/banner3.jpg'
// // import banner4 from '../../Asset/banner4.jpg'
// // import banner5 from '../../Asset/banner5.jpg'

// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// export default function App() {
//     return (
//       <>
//         <Swiper
//           spaceBetween={30}
//           centeredSlides={true}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           pagination={{
//             clickable: true,
//           }}
//           navigation={true}
//           modules={[Autoplay, Pagination, Navigation]}
//           className="mySwiper"
//         >
//           {/* <SwiperSlide>
//             <div className='main1 relative'>
//                 <img src={banner1}></img>
//                 <h1 className='absolute top-4'>
//                      <span className='text-rose-900 text-xl font-bold pt-10'>Accessories</span><br/>
//                      <span className=''>Up to<span>45% off<br/></span>Latest Creation</span>
//                      <span><button>Shop Now</button></span>
//                 </h1>
//             </div>
//           </SwiperSlide>


//           <SwiperSlide>
            
//             <div className='main2 relative'>
//                 <img src={banner2}>
//                 <h1 className='absolute top-4'>
//                   <span className='text-rose-900 text-xl font-bold'>Accessories</span>
//                   <span className=''>Up to<span>40% off<br/></span>Latest Creation</span>
//                   <span><button>Shop Now</button></span>
//                 </h1>
//                 </img>
//             </div>
//           </SwiperSlide>
          
//           <SwiperSlide>
//             <div className='main3 relative'>
//                 <img src={banner3}>
//                     <h1 className='absolute top-4'>
//                         <span className=''>Accessories</span>
//                         <span className=''>Up to<span>35% off<br/></span>Latest Creation</span>
//                         <span><button>Shop Now</button></span>
//                     </h1>
//                 </img>
//             </div>
//           </SwiperSlide> */}
//         </Swiper>
//       </>
//     );
//   }

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Homepage from './Homepage.css'

// import required modules
import { Autoplay } from 'swiper/modules';


import banner1 from '../../Asset/banner1.jpg'
import banner2 from '../../Asset/banner2.jpg'
import banner3 from '../../Asset/banner3.jpg'
import banner4 from '../../Asset/banner4.jpg'
import banner5 from '../../Asset/banner5.jpg'


function Sidebar() {
  return (
    <div className='flex mt-14 ms-44  Swiper '>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide relative h-full">
            <img
              src={banner1}
              alt="slid-1"
              className="min-h-[inherit]"
            />

            <div className="slide-text flex flex-col justify-center absolute">
              <p>Accessories</p>

              <h1>
                Up To
                <span>45% Off</span><br/>
                latest Creations
              </h1>

              <a
                href="#"
                id="shopLink"
                className="flex items-center justify-center"
              >
                Shop Now
                <i className="fa-solid fa-arrow-right block ml-3"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide relative h-full">
            <img
              src={banner2}
              alt="slid-1"
              className="min-h-[inherit]"
            />

            <div className="slide-text flex flex-col justify-center absolute">
              <p>Accessories</p>

              <h1>
                Up To
                <span>45% Off</span><br/>
                latest Creations
              </h1>

              <a
                href="#"
                id="shopLink"
                className="flex items-center justify-center"
              >
                Shop Now
                <i className="fa-solid fa-arrow-right block ml-3"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide relative h-full">
            <img
              src={banner3}
              alt="slid-1"
              className="min-h-[inherit]"
            />

            <div className="slide-text flex flex-col justify-center absolute">
              <p>Accessories</p>

              <h1>
                Up To
                <span>45% Off</span><br/>
                latest Creations
              </h1>

              <a
                href="#"
                id="shopLink"
                className="flex items-center justify-center"
              >
                Shop Now
                <i className="fa-solid fa-arrow-right block ml-3"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
      {/* <div>
                <img src={baner} alt="" className='rounded-lg'/>
            </div> */}
      <div className="side-images w-[30%] flex flex-col items-center justify-between">
        <a href="" className="block banner banner-1 relative">
          <img src={banner4} alt="Hand Mande" />
          <div className="Img-text absolute">
            <h3>Hand made</h3>
            <h1>New Modern stylist Craft</h1>
          </div>
        </a>

        <a href="" className="block banner banner-2 relative">
          <img src={banner5} alt="Popular" />
          <div className="Img-text absolute">
            <h3>Popular</h3>
            <h1>Energy with our newest collection</h1>
          </div>
        </a>
      </div>
    </div>



  )
}

export default Sidebar