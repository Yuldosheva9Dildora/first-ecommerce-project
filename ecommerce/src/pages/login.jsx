import React from 'react';
import { Link } from 'react-router-dom';
import './cart.css'


const Login = () => {
  return (
<div className='flex justify-center flex-col md:flex-row gap-5 min-h-screen font-normal mt-10'>
<div className='hidden md:flex justify-center ml-[-120px] mt-[10px] mr-[100px]'>
  <img src='public/assets/Signup.jpeg'  alt='signup'  className='w-full md:w-[700px] lg:w-[800px] h-auto md:h-[600px] lg:h-[706px]'  /> </div>

  <div className='flex mt-[70px] flex-col gap-5 w-full sm:w-[430px] h-[611px] leading-10 p-4 sm:p-8 h-auto my-auto rounded'>
 <h1 className='text-[36px] mt-6'>Log in to Exclusive</h1>
  <h1>Enter your details below:</h1>
<form className='flex flex-col gap-4'>
 <input className="p-3 rounded w-full sm:w-[365px] border-b-2 border-gray-400 focus:outline-none focus:border-black py-2 h-[56px]"type="email"id="email"name="email"placeholder="Email or Phone Number *"required/>
<input className="p-3 rounded w-full sm:w-[365px] border-b-2 border-gray-400 focus:outline-none focus:border-black py-2 h-[56px]"type="password"id="password"name="password" placeholder="Password *"required />

<div className='flex flex-col gap-4'>
<button className="mt-4 bg-[#DB4444] w-full sm:w-[365px] h-[56px] text-white rounded hover:opacity-75 sm:text-[16px] text-[13px]"> Login </button>

<h1 className='mt-2 text-center hover:underline cursor-pointer text-red-400'> <Link to="/error">Forgot Password?</Link> </h1> </div>
<h1 className='flex mx-auto justify-center mt-4 gap-1'>Don't have an account?  <Link to="/signup" className='underline'>Create an account</Link> </h1>
</form>
  </div>
    </div>
  );
};

export default Login;
