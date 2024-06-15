import React from 'react'
import img1 from '../../Asset/instagram-01.jpg'
import img2 from '../../Asset/instagram02.jpg'
import img3 from '../../Asset/instagram03.jpg'
import img4 from '../../Asset/instagram04.jpg'
import img5 from '../../Asset/instagram05.jpg'
import img6 from '../../Asset/instagram06.jpg'

function Ninicoshop() {
  return (
    <div>
    <div class="md:container md:mx-auto">
        <p className='text-red-700 text-xl flex justify-center'>Follow on</p>
        <p className='font-bold text-4xl flex justify-center'>ninico-shop</p>
        <div className='grid grid-cols-6 gap-4 mt-10'>
            <div>
                <img src={img1} className='rounded-lg' alt='image'></img>
            </div>
            <div >
                <img src={img2} className='rounded-lg' alt='image'></img>
            </div>
            <div>
                <img src={img3} className='rounded-lg' alt='image'></img>
            </div>
            <div>
                <img src={img4} className='rounded-lg' alt='image'></img>
            </div>
            <div>
                <img src={img5} className='rounded-lg' alt='image'></img>
            </div>
            <div>
                <img src={img6} className='rounded-lg' alt='image'></img>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Ninicoshop



