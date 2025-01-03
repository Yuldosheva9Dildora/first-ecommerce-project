
import { Phone, Mail } from "lucide-react";
import React from "react";
import { Link } from 'react-router-dom';
import './cart.css'


const Contact = () => {
return ( <div> <h1 className="flex mt-[70px] text-gray-400 ml-[170px] mb-[-90px]">
  <Link to="/showcase">Home /</Link>
   <h2 className="text-black">Contact</h2>  </h1> 
   <div className="flex flex-col sm:flex-row justify-center flex-wrap gap-[30px] sm:gap-[70px] min-h-screen min-w-screen font-normal p-4 sm:p-8">
 <div className="flex flex-col justify-center gap-5 w-full sm:w-[350px] leading-10 shadow-lg p-4 sm:p-8 h-auto my-auto rounded">
 <div className="relative">
 <h1 className="absolute w-[40px] h-[40px] bg-[#DB4444] rounded-full  hover:opacity-70 cursor-pointer"></h1>
<h1 className="flex items-center">
<Phone size={23} className="text-white mt-[2px] mr-[10px] absolute left-2  hover:opacity-70 cursor-pointer" />

<span className="ml-[52px] text-[16px] hover:underline cursor-pointer">Call To Us</span> </h1><p className="text-[14px]">We are available 24/7, 7 days a week.</p>
<p className="text-[14px]">Phone: +8801611112222</p>
 </div><h2 className="border"></h2>

<div className="relative">
<h1 className="absolute w-[40px] h-[40px] bg-[#DB4444] rounded-full  hover:opacity-70 cursor-pointer "></h1>
  <h1 className="flex items-center">
 <Mail size={23} className="text-white mt-[2px] mr-[10px] absolute left-2  hover:opacity-70 cursor-pointer" />
<span className="ml-[47px] text-[16px] hover:underline cursor-pointer">Email To Us</span></h1>
<p className="text-[14px]">Fill out our form and we will contact you within 24 hours.</p>
<p className="text-[14px]">Emails: customer@exclusive.com</p>
<p className="text-[14px]">Emails: support@exclusive.com</p>
</div>
   </div>

  <form className="flex justify-center w-full sm:w-auto">
 <div className="flex flex-col shadow-lg p-8 w-full sm:w-auto max-w-[737px] h-auto my-auto rounded">
  <div className="flex flex-wrap gap-4 mb-7">
<input className="p-3 rounded w-full sm:w-[235px] h-[50px] bg-[#F5F5F5]"type="text"  id="fname" name="fname" placeholder="Your Name" required/>
  <input className="p-3 rounded w-full sm:w-[235px] h-[50px] bg-[#F5F5F5]" type="email"id="email" name="email" placeholder="Your Email"required/>
            
<input className="p-3 rounded w-full sm:w-[235px] h-[50px] bg-[#F5F5F5]" type="tel" id="tel" name="tel" placeholder="Your Phone"required /> </div>
  <textarea className="p-3 rounded w-full h-[200px] bg-[#F5F5F5]"id="message"name="message"placeholder="Your Message" ></textarea>
<button className="mt-4 bg-[#DB4444] w-full sm:w-[215px] h-[48px] sm:h-[56px] text-white rounded hover:opacity-75 sm:text-[16px] text-[13px]">Send Message </button>
  </div>
   </form>
 </div> </div>

  );
};

export default Contact;
