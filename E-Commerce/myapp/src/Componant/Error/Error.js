import React from "react";
import Header  from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import breadcrumb01 from '../../Asset/breadcrumb01.jpg';
import Errors from '../../Asset/errors.png'

const Error = () => {
  return (
    <div className="">
      {/* <Header /> */}
      {/* <Navbar/> */}

      <div className="text-left relative">
        <img src={breadcrumb01} alt="Error Image" className="h-[40vh] pt-8" />

        <div className="absolute top-[20%] px-10 ">
          <h4 className="my-4 hover:text-red-600 cursor-pointer">
            Home 
            <span className="text-gray-600">
                 ---- Error
            </span>
          </h4>
          <h2 className="text-3xl font-bold">
            Error
            </h2>
        </div>
      </div>

      <div className="py-20">

        <div className="flex justify-center pb-12">
          <img src={Errors} alt="" />
        </div>
        <div className="px-80">
          <h2 className="text-5xl font-bold flex justify-center pb-6">
            404. Page not found
          </h2>

          <p className=" mx-6 pb-6 text-lg text-gray-500 my-6 flex justify-center">
            Sorry, we couldn’t find the page you where looking for. We suggest
            that you return to homepage.
          </p>

          <button className=" bg-pink-700 font-bold py-4 px-6 rounded-lg text-white hover:text-black">
            <i class="fa-solid fa-arrow-left me-7"></i>
            Back to Home
          </button>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Error;