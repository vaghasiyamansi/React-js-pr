import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Log from '../../Asset/login-bg.jpg';
import Sign from '../../Asset/sign-bg.jpg';
import Breadcrumb01 from '../../Asset/breadcrumb01.jpg'
import Swal from 'sweetalert'; 

function Signin() {
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
  
  
    const getEmail = localStorage.getItem("Email");
    const getPassword = localStorage.getItem("Password")
  
    function onRegistersubmit(e){
      e.preventDefault();
          if(!email || !password){
            alert("please fill the all filde");
          }
          else{
            alert("successfull register")
            localStorage.setItem("Email",email);
            localStorage.setItem("Password",password)
          }
    }
  
    function onLogin(e){
      e.preventDefault();
      if(!email || !password){
        alert("please fill the all filde");
      }
      else if(email !== getEmail && password !== getPassword){
        alert("plz fill the currect details")
      }
      else{
        // Swal.fire({
        //   title: "successfully login user",
        //   icon: "success"
        // });
        alert("successfull login")
        
      }
    }

    return (
        <div>
            <div>
                <div className="text-left relative">
                    <img src={Breadcrumb01} alt="Error Image" className="h-[40vh] pt-8" />

                    <div className="absolute top-[20%] px-10 ">
                        <h4 className="my-4 hover:text-red-600 cursor-pointer">
                            Home
                            <span className="text-gray-600">
                                ---- Sign In
                            </span>
                        </h4>
                        <h2 className="text-3xl font-bold">
                            Sign In
                        </h2>
                    </div>
                </div>

                <div className='flex justify-center items-center mt-10'>
                    <div className='lg:grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5'>

                        <form onSubmit={onRegistersubmit}>
                            <div className='form-1'>
                                <div className='max-w-2xl bg-slate-100'>
                                    <img src={Sign} alt='image' />
                                    <div className='login flex bg-slate-100'>
                                        <div className=' p-2 mt-2 rounded sign-icon flex justify-center items-center h-10 w-10 bg-white'>
                                            <i class="ri-folder-user-fill text-2xl text-red-400"></i>
                                        </div>
                                        <div className='login-part p-2'>
                                            <h1 className='text-slate-800 text-xl font-semibold text-start '>
                                                Sign Up</h1>
                                            <p className='text-start'>Your personal data will be used to support your experience throughout this website, to manage access to your account.</p>
                                        </div>
                                    </div>
                                    <div className='p-2'>
                                        <form className='p-3'>
                                            <div className='bg-white h-16 w-full rounded flex justify-center items-center gap-2 '>
                                                <span><i class="fa-regular fa-envelope"></i></span>
                                                
                                                <input placeholder='Email address' type='email' className=' outline-none'  onChange={(e)=>setEmail(e.target.value)} /> 
                                            </div>
                                            <div className='bg-white h-16 w-full mt-5  rounded flex justify-center items-center gap-2 '>
                                                <span><i class="fa-solid fa-key"></i></span>
                                                <input placeholder='Password' type='email'className=' outline-none'  onChange={(e)=>setPassword(e.target.value)} />
                                                
                                            </div>
                                        </form>
                                        <div className='checbox flex justify-between items-center p-2'>
                                            <div className='form-check'>
                                                <a href='#' className=' underline'> Already Have Account?</a>
                                            </div>
                                        </div>
                                        <div className=' bg-gray-200 hover:bg-black  rounded h-14 flex justify-center items-center p-2'>
                                            <button className='text-black text-lg  hover:text-white font-semibold outline-none border-0'>Register Now
                                                <i class="fa-solid fa-arrow-right mx-2"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <form onSubmit={onLogin}>
                            <div className='form-2'>
                                <div className='max-w-2xl bg-slate-100'>
                                    <img src={Log} alt='image'/>
                                    <div className='login flex bg-slate-100 '>
                                        <div className=' p-2 mt-2 rounded sign-icon flex justify-center items-center h-10 w-10 bg-white'>
                                        </div>
                                        <div className='login-part p-2'>
                                            <h1 className='text-slate-800 text-xl font-bold text-start '>Login Here</h1>
                                            <p className='text-start'>Your personal data will be used to support your experience throughout this website, to manage access to your account.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <form className='p-3'>
                                            <div className='bg-white h-16 w-full rounded flex justify-center items-center gap-2 '>
                                                <span><i class="fa-regular fa-user "></i></span>
                                                <input placeholder='Username/email address' type='email'   className=' outline-none' onChange={(e)=>setEmail(e.target.value)}/>
                                                
                                            </div>
                                            <div className='bg-white h-16 w-full mt-5  rounded flex justify-center items-center gap-2 '>
                                                <span><i class="fa-solid fa-key"></i></span>
                                                <input placeholder='Password' type='email'className=' outline-none'onChange={(e)=>setPassword(e.target.value)}/>
                                                 
                                            </div>
                                        </form>
                                        <div className='checbox flex justify-between items-center p-2'>
                                            <div className='form-check'>
                                                <input type='checkbox' ></input>
                                                <label > Remember me</label>
                                            </div>
                                            <div className='forget'>
                                                <a href='#' className=' underline'>Forget Password</a>
                                            </div>
                                        </div>
                                        <div className=' bg-red-600 rounded h-14 flex justify-center items-center p-2'>
                                            <button className='text-white text-lg font-semibold border-0'>Login Now
                                                <i class="fa-solid fa-arrow-right mx-2"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin

