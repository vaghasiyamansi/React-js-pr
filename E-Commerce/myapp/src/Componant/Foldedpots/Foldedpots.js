import React from 'react'
import folded01 from '../../Asset/floded01.png'

function Foldedpots() {
    return (
        <div>
            <div class="container mx-auto px-4 w-full">
                <div className='grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 bg-slate-100 p-5'>

                    <div >
                        <img src={folded01} alt='image'></img>
                    </div>

                    <div className=' text-start'>
                        <p className='font-bold text-2xl text-start'>$49.00<span className='text-slate-300'>$59.00</span></p>

                        <p className='text-3xl font-bold mt-6'>Pro2 Abstract Folded Pots</p>

                        <p className='text-xl mt-6'>Elegant pink origami design three-dimensional view and decoration co-exist. Great for adding a decorative touch to any room’s decor. Wonderful accent piece for coffee tables or side tables.</p>

                        <div className="bg-red-600 h-2.5 rounded-full w-50 mt-7" ></div>

                        <div className='clock flex mt-10 gap-2 text-center'>
                            <div className='h-20 w-20 bg-white'>
                                <p className='text-2xl font-bold'>-123</p>
                                <p>Days</p>
                            </div>
                            <div className='h-20 w-20 bg-white'>
                                <p className='text-2xl font-bold'>-16</p>
                                <p >Hours</p>
                            </div>
                            <div className='h-20 w-20 bg-white'>
                                <p className='text-2xl font-bold'>-15</p>
                                <p>Minite</p>
                            </div>
                            <div className='h-20 w-20 bg-white'>
                                <p className='text-2xl font-bold'>-9</p>
                                <p >Second</p>
                            </div>

                            <p>Remains until the
                                <span className='block'>end of the offe</span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Foldedpots


