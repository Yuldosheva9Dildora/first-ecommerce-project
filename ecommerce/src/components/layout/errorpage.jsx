import './cart.css'
import React from 'react';
import {Link} from 'react-router-dom';



const Error =()=> {


  return (
    <div className='flex flex-col items-center justify-center h-screen w-screen gap-5'>
    <h1 className='xl:text-8xl lg:text-6xl text-4xl'>404 Not Found</h1>
    <h1 className='md:text-2xl sm:text-xl text-base font-extralight'>Your visited page not found. You may go home page.</h1>
    <button className=' font-extralightborder-none bg-[#DB4444] text-white text-xl sm:w-60 w-40 py-2 px-1 h-auto sm:px-5 sm:py-5 rounded hover:opacity-75'>    <Link to ="/showcase">Back to home page</Link></button>
 </div> 
    
  )
}

export default Error;

