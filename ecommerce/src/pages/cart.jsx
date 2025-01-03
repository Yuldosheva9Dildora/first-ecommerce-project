
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './cart.css'



function Cart() {
  const [lcdQuantity, setLcdQuantity] = useState(1);
  const [gamepadQuantity, setGamepadQuantity] = useState(1);
  const handleLcdChange = (e) => {
  const value = parseInt(e.target.value, 10);
 if (value >= 1 && value <= 100) {
  setLcdQuantity(value);
}
  };
  const handleGamepadChange = (e) => {
const value = parseInt(e.target.value, 10);
if (value >= 1 && value <= 100) {
      setGamepadQuantity(value);
}
};
  return (
    <div>
      <div className="flex ml-[170px] text-gray-400 mt-[100px] mb-[20px]">
 <h1>Home/</h1><a className="text-black">Cart</a> </div>
 <div className="flex flex-col justify-center min-h-screen font-normal">
  <div className="flex flex-col p-4 sm:p-6 md:p-8 md:gap-10 gap-6 justify-center mx-auto">
<form className="flex flex-col gap-4 sm:gap-6 md:gap-10"> 
<div className="hover:bg-gray-100 rounded cursor-pointer flex gap-10 sm:gap-6 md:gap-10 shadow-lg justify-between sm:justify-around w-full md:w-[1120px] h-[86px] text-[12px] sm:text-[16px] bg-white px-[35px] sm:p-6 sm:flex">
 <h1 className="mx-2 sm:mx-[20px] md:mx-[60px] sm:py-2 py-5">Product</h1>
 <h1 className="sm:py-2 py-5">Price</h1>
   <h1 className="sm:py-2 py-5">Quantity</h1>
<h1 className="sm:py-2 py-5">Subtotal</h1>
</div>

     <div className="hover:bg-gray-100 rounded cursor-pointer flex gap-4 sm:gap-6 md:gap-10 shadow-lg justify-between sm:justify-around w-full md:w-[1120px] h-[95px] text-[12px] sm:text-[16px] bg-white p-4 sm:p-6 relative">
  <div className="flex gap-3  items-center relative">
  <img className="  w-[40px] sm:w-[59px] h-[40px] sm:h-[54px] my-[-8px]"src="/public/assets/tv_cart.png" alt="LCD Monitor"/>
   <p className="flex bg-red-500 text-white rounded-full w-[20px] h-[20px] px-[5px] absolute top-3 sm:top-1 p-0.5 sm:py-0">X</p>{" "}
<span>LCD Monitor</span>
</div>
<h1 className= "py-6  sm:py-3">$650</h1>
 <input className="h-[36px] sm:h-[40px] w-[60px] sm:w-[72px] rounded text-center border border-gray-300 my-[10px] sm:my-[-5px]"type="number"min="1" max="100" value={lcdQuantity}onChange={handleLcdChange}/>
<h1 className="py-6 sm:py-3">${650 * lcdQuantity}</h1>
</div>

<div className="hover:bg-gray-100 rounded cursor-pointer  flex gap-4 sm:gap-6 md:gap-10 shadow-lg justify-between sm:justify-around w-full md:w-[1120px] h-[95px] text-[12px] sm:text-[16px] bg-white sm:p-6 px-4">
<div className="flex gap-3 items-center">
<img className="w-[40px] sm:w-[59px] h-[40px] sm:h-[54px] my-[-13px]" src="/public/assets/playstation_cart.png"alt="H1 Gamepad"/>
<span>H1 Gamepad</span>
</div>
<h1 className="py-10 sm:py-3">$550</h1>
<input className="h-[36px] sm:h-[40px] w-[60px] sm:w-[72px] rounded text-center border border-gray-300 my-[25px] sm:my-[-5px]" type="number" min="1" max="100"value={gamepadQuantity}onChange={handleGamepadChange} />
<h1 className="py-10 sm:py-3">${550 * gamepadQuantity}</h1>
 </div>

 <div className="hover:bg-gray-100 rounded cursor-pointer flex gap-4 sm:gap-6 md:gap-10 shadow-lg justify-between sm:justify-around w-full md:w-[1120px] h-[95px] text-[12px] sm:text-[16px] bg-white p-4 sm:p-6 relative">
  <div className="flex gap-3  items-center relative">
  <img className="  w-[40px] sm:w-[59px] h-[40px] sm:h-[54px] my-[-8px]"src="/public/assets/laptop.png" alt="LCD Monitor"/>
   <p className="flex bg-red-500 text-white rounded-full w-[20px] h-[20px] px-[5px] absolute top-3 sm:top-1 p-0.5 sm:py-0">X</p>{" "}
<span>ASUS laptop</span>
</div>
<h1 className= "py-6  sm:py-3">$700</h1>
 <input className="h-[36px] sm:h-[40px] w-[60px] sm:w-[72px] rounded text-center border border-gray-300 my-[10px] sm:my-[-5px]"type="number"min="1" max="100" value={lcdQuantity}onChange={handleLcdChange}/>
<h1 className="py-6 sm:py-3">${700 * lcdQuantity}</h1>
</div>


<div className="flex flex-wrap justify-between w-full md:w-[1120px] gap-4 text-[13px] sm:text-[16px]">
  <button className="border border-gray-300 h-[48px] sm:h-[56px] w-[150px] sm:w-[218px] hover:bg-[#DB4444] hover:text-white rounded"> 
    <Link to ="/card">Return To Shop</Link>
    </button>
 <button className="border border-gray-300 h-[48px] sm:h-[56px] w-[150px] sm:w-[218px] hover:bg-[#DB4444] hover:text-white rounded">Update Cart</button>
  </div> </form>
  <br />
 <div className="flex flex-wrap w-full md:w-[1120px] justify-between gap-4">
 <div className="flex flex-col sm:flex-col md:flex-col gap-2 text-[13px] sm:text-[16px]">
 <input className="w-full sm:w-[300px] h-[48px] sm:h-[56px] border border-gray-400 rounded px-5" type="text" placeholder="Coupon Code" />
     <button className="bg-[#DB4444] w-full sm:w-[211px] h-[48px] sm:h-[56px] text-white rounded hover:opacity-75 mt-5"> Apply Coupon</button>
</div>

<form>
<div className="flex flex-col gap-4 sm:gap-5 sm:flex-col md:flex-col border p-8">
   <h1 className="text-[16px] flex sm:text-[20px]">Cart Total</h1>
 <div className="flex justify-between text-[13px] sm:text-[16px]">
    <span>Subtotal:</span>
  <span>${650 * lcdQuantity + 550 * gamepadQuantity}</span>
 </div>
 <div className="border border-gray-400"></div>

<div className="flex justify-between text-[13px] sm:text-[16px]">
    <span>Shipping:</span>
   <span>Free</span> </div>
 <div className="border border-gray-400"></div>

<div className="flex justify-between text-[13px] sm:text-[16px]">
<span>Total:</span>
 <span>${650 * lcdQuantity + 550 * gamepadQuantity}</span></div>
  <button className="bg-[#DB4444] w-full sm:w-[330px] h-[48px] sm:h-[56px] text-white rounded hover:opacity-75 sm:text-[16px] text-[13px] sm:p-2 p-3">Proceed to checkout</button>
   </div>
</form>
  </div>
   </div></div>
    </div>
  );
}

export default Cart;
