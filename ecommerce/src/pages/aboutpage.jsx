import './cart.css'
import { Store, BadgeDollarSign, ShoppingBag, DollarSign, Twitter, Instagram, Linkedin, Truck, HandHelping, SearchCheck  } from "lucide-react";


function About() {


  return (
 <div className='flex justify-center flex-col min-h-screen font-normal mt-[200px]'>

<div className='w-[90%] flex ml-auto sm:flex-row flex-col sm:ml-auto'>
<div className='flex flex-col justify-center h-[500px] sm:w-full sm:mr-[160px] mr-[40px]'>
<h1 className='font-bold sm:text-[54px] text-[30px]'>Our Story</h1> <br></br>
  <h1 className='sm:text-[16px] text-[13px]'>Launced in 2015, Exclusive is South Asia’s premier online
    shopping makterplace with an active presense in Bangladesh.
    Supported by wide range of tailored marketing, data and
    service solutions, Exclusive has 10,500 sallers and 300 brands
    and serves 3 millioons customers across the region.
</h1> <br></br>
<h1  className='sm:text-[16px] text-[13px]'>
Exclusive has more than 1 Million products to offer, growing at a
very fast. Exclusive offers a diverse assotment in categories
ranging from consumer.
</h1>
</div>

<div className='sm:my-0 my-[-100px]'>
    <img className='w-[1400px]' src='/img/SideImage.png' alt='about'/>
</div>
</div>

<div className='flex flex-row mt-[140px] w-[80%] mx-auto gap-2 flex-wrap md:flex md:flex-row gap-10 sm:w-[80%] sm:mx-auto sm:justify-between justify-center cursor-pointer gap-[55px] sm:gap-0'>
  <div className='flex flex-col relative border-2 border-gray-300 h-[230px] w-[270px] rounded hover:bg-[#DB4444] hover:text-white hover:border-none'>

  <h2 className='absolute w-[77px] h-[77px] bg-gray-300 rounded-full hover:bg-black cursor-pointer bottom-[115px] mx-[89px] '>
    <h1 className='rounded-full w-[58px] h-[58px] bg-black absolute top-2.5 left-2.5 hover:bg-white'><h1 className='absolute top-2 left-2 co'>  <Store size={40} className="text-white hover:text-black transition-colors duration-200" />
    </h1></h1>
  </h2>

<div className='my-[115px] flex flex-col gap-3 '>
<h1 className='text-center text-[32px] font-bold'>10.5k</h1>
<h1 className='text-[16px] text-center'>Sellers active on our site</h1>
</div>
  </div>

  <div className='flex flex-col relative border-2 border-gray-300 h-[230px] w-[270px] rounded hover:bg-[#DB4444] hover:text-white hover:border-none'>

  <h2 className='absolute w-[77px] h-[77px] bg-gray-300 rounded-full hover:bg-black cursor-pointer bottom-[115px] mx-[89px] '>
    <h1 className='rounded-full w-[58px] h-[58px] bg-black absolute top-2.5 left-2.5 hover:bg-white'><h1 className='absolute top-2 left-2 co'>  <BadgeDollarSign size={40} className="text-white hover:text-black transition-colors duration-200" />
    </h1></h1>
  </h2>

<div className='my-[115px] flex flex-col gap-3 '>
<h1 className='text-center text-[32px] font-bold'>33k</h1>
<h1 className='text-[16px] text-center'>Monthly Produduct Sale</h1>
</div>
  </div>

  <div className='flex flex-col relative border-2 border-gray-300  h-[230px] w-[270px] rounded hover:bg-[#DB4444] hover:text-white hover:border-none'>

<h2 className='absolute w-[77px] h-[77px] bg-gray-300 rounded-full hover:bg-black cursor-pointer bottom-[115px] mx-[89px] '>
  <h1 className='rounded-full w-[58px] h-[58px] bg-black absolute top-2.5 left-2.5 hover:bg-white'><h1 className='absolute top-2 left-2 co'>  <ShoppingBag size={40} className="text-white hover:text-black transition-colors duration-200" />
  </h1></h1>
</h2>

<div className='my-[115px] flex flex-col gap-3 '>
<h1 className='text-center text-[32px] font-bold'>45.5k</h1>
<h1 className='text-[16px] text-center'>Customer active in our site</h1>
</div>
</div>

<div className='flex flex-col relative border-2 border-gray-300 h-[230px] w-[270px] rounded hover:bg-[#DB4444] hover:text-white hover:border-none'>

<h2 className='absolute w-[77px] h-[77px] bg-gray-300 rounded-full hover:bg-black cursor-pointer bottom-[115px] mx-[89px] '>
  <h1 className='rounded-full w-[58px] h-[58px] bg-black absolute top-2.5 left-2.5 hover:bg-white'><h1 className='absolute top-2 left-2 co'>  <DollarSign size={40} className="text-white hover:text-black transition-colors duration-200" />
  </h1></h1>
</h2>

<div className='my-[115px] flex flex-col gap-3 '>
<h1 className='text-center text-[32px] font-bold'>25k</h1>
<h1 className='text-[16px] text-center'>Anual gross sale in our site</h1>
</div>
</div>
  
</div>

<div className='flex flex-col gap-10 mx-auto justify-between w-[80%] py-[100px] sm:flex sm:flex-row'>
<div className='flex flex-col gap-1'>
  <div className='bg-[#F5F5F5] w-[360px] h-[450px] flex-col flex justify-end rounded-lg '><img className='w-[236px] relative left-[60px]' src='/img/firstface.png' alt='first'/></div>
  <h1 className=' text-[32px]'>Tom Cruise</h1>
  <h1 className='text-[16px]'>Founder & Chairman</h1>
  <div className='flex flex-row gap-4'>
  <Twitter />
  <Instagram />
  <Linkedin />
  </div>
</div>

<div className='flex flex-col gap-1'>
  <div className='bg-[#F5F5F5] w-[360px] h-[450px] flex-col flex justify-end rounded-lg '><img className='w-[286px] relative left-[40px]' src='/img/secondface.png' alt='first'/></div>
  <h1 className=' text-[32px]'>Emma Watson</h1>
  <h1 className='text-[16px]'>Managing Director</h1>
  <div className='flex flex-row gap-4'>
  <Twitter />
  <Instagram />
  <Linkedin />
  </div>
</div>

<div className='flex flex-col gap-1'>
  <div className='bg-[#F5F5F5] w-[360px] h-[450px] flex-col flex justify-end rounded-lg '><img className='w-[236px] relative left-[60px] top-[0px]' src='/img/thirdface.png' alt='first'/></div>
  <h1 className=' text-[32px]'>Will Smith</h1>
  <h1 className='text-[16px]'>Product Designer</h1>
  <div className='flex flex-row gap-4'>
  <Twitter />
  <Instagram />
  <Linkedin />
  </div>
</div>
</div>
<h1 className='text-[60px] mx-auto text-gray-400'> . . . . .</h1>

<div className='flex flex-row mt-[80px] w-[80%] mx-auto gap-2 flex-wrap sm:w-[80%] sm:mx-auto sm:justify-evenly justify-center cursor-pointer gap-[55px] sm:gap-0'>
  <div className='flex flex-col relative h-[230px] w-[290px] rounded hover:bg-[#DB4444] hover:text-white hover:border-none'>

  <h2 className='absolute w-[77px] h-[77px] bg-gray-300 rounded-full hover:bg-black cursor-pointer bottom-[115px] mx-[100px] '>
    <h1 className='rounded-full w-[58px] h-[58px] bg-black absolute top-2.5 left-2.5 hover:bg-white'><h1 className='absolute top-2 left-2 co'>  <Truck size={40} className="text-white hover:text-black transition-colors duration-200" />
    </h1></h1>
  </h2>

<div className='my-[127px] flex flex-col gap-3 '>
<h1 className='text-center text-[20px] font-bold'>FREE AND FAST DELIVERY</h1>
<h1 className='text-[16px] text-center'>Free delivery for all orders over $140</h1>
</div>
  </div>

  <div className='flex flex-col relative h-[230px] w-[270px] rounded hover:bg-[#DB4444] hover:text-white hover:border-none'>

  <h2 className='absolute w-[77px] h-[77px] bg-gray-300 rounded-full hover:bg-black cursor-pointer bottom-[115px] mx-[89px] '>
    <h1 className='rounded-full w-[58px] h-[58px] bg-black absolute top-2.5 left-2.5 hover:bg-white'><h1 className='absolute top-2 left-2 co'>  <HandHelping size={40} className="text-white hover:text-black transition-colors duration-200" />
    </h1></h1>
  </h2>

<div className='my-[127px] flex flex-col gap-3 '>
<h1 className='text-center text-[20px] font-bold'>24/7 CUSTOMER SERVICE</h1>
<h1 className='text-[16px] text-center'>Friendly 24/7 customer support</h1>
</div>
  </div>

  <div className='flex flex-col relative h-[230px] w-[270px] rounded hover:bg-[#DB4444] hover:text-white hover:border-none'>

<h2 className='absolute w-[77px] h-[77px] bg-gray-300 rounded-full hover:bg-black cursor-pointer bottom-[115px] mx-[89px] '>
  <h1 className='rounded-full w-[58px] h-[58px] bg-black absolute top-2.5 left-2.5 hover:bg-white'><h1 className='absolute top-2 left-2 co'>  <SearchCheck size={40} className="text-white hover:text-black transition-colors duration-200" />
  </h1></h1>
</h2>

<div className='my-[127px] flex flex-col gap-3 '>
<h1 className='text-center text-[20px] font-bold'>MONEY BACK GUARANTEE</h1>
<h1 className='text-[16px] text-center'>We reurn money within 30 days</h1>
</div>
</div>

  
</div>
 </div>
  )
}

export default About;
