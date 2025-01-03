import Navbar from "./navbar";
import Footer from "./footer";
import Homepage from "../../pages/hompage";
import AboutPage from "../../pages/about-page";
import { Route, Routes } from "react-router-dom";

import { Advertisement, Card1, Card2, Card3, Card4, Line, Showcase, Card5, Card6} from "./components/showcase.jsx"
import { Details, Details1, } from "./components/details.jsx"

import { Route, Routes } from "react-router-dom"
import { WishlistCards, WishlistCards1 } from "./components/wishlist.jsx"

export const Wishlist = () => {
  return(
    <div>
      <WishlistCards/>
      <WishlistCards1/>
    </div>
  )
}
export const CardDetails = () => {
  return(
    <div>
      <Details />
      <Details1/>
    </div>
)}

export const Home = () => {
  return(
<div>
 <Showcase/>
 <Card1/>
 <Line/>
 <Card2/>
 <Card3/>
 <Advertisement/>
 <Card4/>
 <Card5/>
 <Card6/>
</div>
  )
}

function Layout() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
         <Route path="details/:id" element={<CardDetails />} />
        <Route path="wishlist" element={<Wishlist/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default Layout;
