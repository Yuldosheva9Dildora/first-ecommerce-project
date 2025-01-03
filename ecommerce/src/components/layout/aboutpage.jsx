import './about.css';
import { Store, BadgeDollarSign, ShoppingBag, DollarSign, Twitter, Instagram, Linkedin, Truck, HandHelping, SearchCheck } from "lucide-react";
import { Link } from 'react-router-dom';

function About() {
  return (
<div> <h1 className="flex mt-[70px] text-gray-400 ml-[190px] mb-[-90px]">
  <Link to="/showcase">Home /</Link>
   <h2 className="text-black">About</h2>  </h1> 
<div className="about">
<h1 className="aboutone"> </h1>


 <div className="story">
    <div className="storycontent">
  <div className="storytext"> <h1>Our Story</h1>
    <p>Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh.
        Supported by a wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands
      and serves 3 million customers across the region. </p> <br></br>
  <p>Exclusive has more than 1 million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in categories ranging from consumer.</p>
  </div>

  <div className="storyimg"><img src="/assets/SideImage.png" alt="about" /> </div>
 </div>
   <div className="card">
  <div className="cards"> <h1 className='iconbg'></h1>
  <div className="icon"><Store size={40} /></div>
  <h1>10.5k</h1>
   <p>Sellers active on our site</p></div>
   <div className="cards"> <h1 className='iconbg'></h1>
  <div className="icon"><BadgeDollarSign size={40} /></div>
  <h1>33k</h1>
    <p>Monthly Product Sale</p>
  </div>

  <div className="cards"> <h1 className='iconbg'></h1>
  <div className="icon"><ShoppingBag size={40} /></div>
  <h1>45.5k</h1>
  <p>Customer active on our site</p></div>
<div className="cards"> <h1 className='iconbg'></h1>
<div className="icon"><DollarSign size={40} /></div>
  <h1>25k</h1>
  <p>Annual gross sale on our site</p>
  </div>
 </div>

 <div className="people">
   <div className="person">
  <div className="personimg"><img src="/assets/firstface.png" alt="first" /></div>
  <h1>Tom Cruise</h1>
   <p>Founder & Chairman</p>
   <div className="socials">
   <Link to="/twitter"><Twitter /></Link>
   <Link to="/instagram"><Instagram /></Link>
   <Link to="/linkedin"><Linkedin /></Link>
   </div>

   </div>
  <div className="person">
  <div className="personimg"><img src="/assets/secondface.png" alt="second" /></div>
  <h1>Emma Watson</h1>
<p>Managing Director</p>
  <div className="socials">
  <Link to="/twitter"><Twitter /></Link>
  <Link to="/instagram"><Instagram /></Link>
  <Link to="/linkedin"><Linkedin /></Link>
 </div>

  </div>
   <div className="person">
   <div className="personimg"><img src="/assets/thirdface.png" alt="third" /></div>
    <h1>Will Smith</h1>
   <p>Product Designer</p>
 <div className="socials">
<Link to="/twitter"><Twitter /></Link>
<Link to="/instagram"><Instagram /></Link>
<Link to="/linkedin"><Linkedin /></Link>
</div>
</div>

</div>
     
<div className="cardd">


   <div className="cardss"> <h1 className='iconbgg'></h1>
  <div className="icon"><Truck size={40} /></div>
  <h1>FREE AND FAST DELIVERY</h1> 
    <p>Free delivery for all orders over $140</p>
  </div>

  <div className="cardss">  <h1 className='iconbgg'></h1>
  <div className="icon"><HandHelping size={40} /></div>
  <h1>24/7 CUSTOMER SERVICE</h1>
  <p>Friendly 24/7 customer support</p></div>

<div className="cardss">  
<div className="icon"><SearchCheck size={40} /> <h1 className='iconbgg'></h1></div>
  <h1>MONEY BACK GUARANTEE</h1>
  <p>We reurn money within 30 days</p>
  </div>
 </div> </div>
    </div>
</div>
  );
}

export default About;
