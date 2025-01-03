import Navbar from "./navbar";
import Footer from "./footer";
import Homepage from "../../pages/hompage";
import AboutPage from "../../pages/aboutpage";
import { Route, Routes } from "react-router-dom";
import Contact from "../../pages/contact";

import {
  Advertisement,
  Card1,
  Card2,
  Card3,
  Card4,
  Line,
  Showcase,
  Card5,
  Card6,
} from "./showcase.jsx";
import { Details, Details1 } from "./details.jsx";
import { WishlistCards, WishlistCards1 } from "./wishlist.jsx";

export const Wishlist = () => {
  return (
    <div>
      <WishlistCards />
      <WishlistCards1 />
    </div>
  );
};
export const CardDetails = () => {
  return (
    <div>
      <Details />
      <Details1 />
    </div>
  );
};

export const Home = () => {
  return (
    <div>
      <Showcase />
      <Card1 />
      <Line />
      <Card2 />
      <Card3 />
      <Advertisement />
      <Card4 />
      <Card5 />
      <Card6 />
    </div>
  );
};

function Layout() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="details/:id" element={<CardDetails />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Layout;
