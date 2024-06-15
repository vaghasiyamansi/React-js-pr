import React,{useState} from 'react';
import { Link , useParams } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {ADD, ADD_WISHLIST} from "../../Redux/Action/Action";
// import Detail from '../Populer-Product/Detail';
import Data from "./Data"
import '../Populer-Product/Product.css'


import {ToastContainer , toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function showalert(){
    toast.success('This Item Added To Cart.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        // transition: Bounce,
        });
}

function showalerts(){
    toast.success('This Item Added To Wishlist  .', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        // transition: Bounce,
        });
}

function Product() {
    const dispatch = useDispatch();
    const send = (e)=>{
        console.log(e,"eeeee");
        dispatch(ADD(e));
        showalert();
    }

    const wishlist = (e)=>{
        console.log(e,"eeeee");
        dispatch(ADD_WISHLIST(e));
        showalerts()
    }
    const [addedProducts, setAddedProducts] = useState([]);

    return (
        <div className="container2 bg-stone-50">
            {/* <div className="flex flex-wrap justify-between">
        
                <div className="flex items-center">
                    <ul className="flex sm:flex-wrap gap-10">
                        <li className="text-rose-600 underline font-bold">
                            <a href="#">All</a>
                        </li>
                        <li className="font-bold">
                            <a href="#">Popular</a>
                        </li>
                        <li className="font-bold">
                            <a href="#">On Sale</a>
                        </li>
                        <li className="font-bold">
                            <a href="#">Best Rated</a>
                        </li>
                    </ul>
                </div>
            </div> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 bg-white mt-5">
                {Data.map((product, index) => (

                    <div key={index} className="button">
                        <div className="burdges relative block">
                        <Link to={`/details/${product.id}`} >
                                <img src={product.FirstImg} alt="Image-1" />
                                <img className="Burges" src={product.SecondeImg} alt="" />

                        </Link>
                            <div className="icon">
                                <a href="#">
                                    <button onClick={()=>send(product)}><i className="fa-solid fa-basket-shopping"></i></button>
                                </a>
                                <a href="#">
                                    <button><i class="fa-solid fa-arrow-right"></i></button>
                                </a>
                                <a href="#">
                                   <button><i class="fa-regular fa-eye"></i></button> 
                                </a>
                                <a href="#">
                                    <button onClick={()=>wishlist(product)}><i class="fa-regular fa-heart"></i></button>
                                </a>
                            </div>
                        <h6 className="pb-2 pt-2 text-slate-400 hover:text-rose-600 cursor-pointer">
                            {product.name}
                        </h6>
                        <h2 className="font-bold">{product.price}</h2>
                        
                </div>
                    </div>
                ))}
            </div>
            <ToastContainer/>
        </div>
    );
}

export default Product;