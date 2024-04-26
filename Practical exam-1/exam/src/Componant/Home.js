import React from 'react'
// import Img_1 from '../Aseet/Image-1.jpg'
// import Img_2 from '../Aseet/Image-2.jpg'
// import Img_3 from '../Aseet/Image-3.jpg'

function Home(props) {
  return (
    <>
    
    <div>
        <div className="flex justify-evenly w-[330px] h-[430px] mt-10 pt-4 bg-blue-100 rounded-xl shadow-lg overflow-hidden">
        <div>

          <div className="flex justify-center items-center h-[200px] bg-blue-700 rounded-md">
            <img className="rounded-full h-[160px] border-4 border-white" src={props.img} alt="Images" />
          </div>

          <div className="p-6 text-center">
            <div className="uppercase tracking-wide text-xl text-black-500 hover:text-blue-700 font-bold">{props.name}</div>

          <div className="p-2 text-center">
            <div className="text-blue-700 hover:text-black uppercase font-bold text-x">{props.course}</div>
          </div>

          <p className="mt-3 text-slate-500">{props.discri}</p>

          <button className="border rounded-lg text-center ps-8 pt-2 pb-2 pe-8 bg-blue-700 text-white mt-3  hover:bg-black">View More</button>
          </div>
        </div>
      </div>
    </div>
</>
  )
}

export default Home
