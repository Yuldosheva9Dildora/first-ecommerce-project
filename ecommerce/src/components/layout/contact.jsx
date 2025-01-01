import './cart.css'
import {Phone, Mail  } from "lucide-react";


function Contact() {


  return (
<div className="flex flex-col sm:flex-row justify-center gap-[30px] sm:gap-[70px] min-h-screen min-w-screen font-normal">
<div className="flex flex-col justify-center gap-5 w-full sm:w-[350px] leading-10 shadow-lg p-4 sm:p-8 h-auto my-auto rounded">

    <div className='relative'> <h1 className=' absolute w-[40px] h-[40px] bg-[#DB4444] rounded-full'></h1>
        <h1 className='flex'><Phone size={23} className='text-white mt-[10px] mr-[10px] absolute left-2'/><h1 className='ml-[52px] text-[16px]'>Call To Us</h1></h1>
        <h1 className='text-[14px]'>We are available 24/7, 7 days a week.</h1>
        <h1 className='text-[14px]'>Phone: +8801611112222</h1>
    </div> <h2 className='border'></h2>
    <div className='relative'><h1 className=' absolute w-[40px] h-[40px] bg-[#DB4444] rounded-full'></h1>
    <h1 className='flex'><Mail  size={23} className='text-white mt-[10px] mr-[10px] absolute left-2'/><h1 className='ml-[47px] text-[16px]'>Email To Us</h1></h1>
        <h1 className='text-[14px]'>Fill out our form and we will contact you within 24 hours.</h1>
        <h1 className='text-[14px]'>Emails: customer@exclusive.com</h1>
        <h1 className='text-[14px]'>Emails: support@exclusive.com</h1>
    </div>
</div>

<div className='flex justify-center flex-col shadow-lg p-8 h-[425px] my-auto rounded'>
<div className='flex gap-4 mb-7'>
<input
  className="p-3 rounded w-full sm:w-[235px] h-[50px] bg-[#F5F5F5]" type="text"id="fname" name="fname"placeholder="Your Name" required/><input
  className="p-3 rounded w-full sm:w-[235px] h-[50px] bg-[#F5F5F5]" type="email" id="email" name="email" placeholder="Your Email" required/><input
  className="p-3 rounded w-full sm:w-[235px] h-[50px] bg-[#F5F5F5]"type="tel" id="tel" name="tel" placeholder="Your Phone" required/>
</div>

<div>
 <textarea className="p-3 rounded w-full sm:w-[500px] md:w-[737px] h-[200px] bg-[#F5F5F5]" id="message" name="message"placeholder="Your Message"></textarea>

</div>
<button className="mt-4 bg-[#DB4444] w-full sm:w-[215px] h-[48px] sm:h-[56px] text-white rounded hover:opacity-75 sm:text-[16px] text-[13px]">Send Message</button> </div>
</div>
  );
}

export default Contact;
