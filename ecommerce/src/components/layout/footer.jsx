import React from "react";
import { SendHorizontal } from "lucide-react";
import {
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Copyright,
} from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 bg-black text-white p-6">
        <ul className="flex flex-col gap-2">
          <li>
            <h2>Exclusive</h2>
          </li>
          <li>
            <h4>Subscribe</h4>
          </li>
          <li>Get 10% off your first order</li>
          <li className="flex bg-black border border-white p-1 items-center rounded-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none text-white p-2 flex-grow"
            />
            <SendHorizontal className="text-white" />
          </li>
        </ul>

        <ul className="flex flex-col gap-2">
          <li>
            <h2>Support</h2>
          </li>
          <li>
            111 Bijay Sarani, Dhaka
            <br />
            DH 1515, Bangladesh
          </li>
          <li>exclusive@gmail.com</li>
          <li>+88915-88888-9999</li>
        </ul>

        <ul className="flex flex-col gap-2">
          <li>
            <h2>Account</h2>
          </li>
          <li>My Account</li>
          <li>Login/Register</li>
          <li>Cart</li>
          <li>Wishlist</li>
          <li>Shop</li>
        </ul>

        <ul className="flex flex-col gap-2">
          <li>
            <h2>Quick Link</h2>
          </li>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>

        <ul className="flex flex-col gap-2">
          <li>
            <h2>Download App</h2>
          </li>
          <li>Save $3 with App Now User Only</li>
          <div className="flex gap-2">
            <img
              src="/assets/playmarket.png"
              alt="Google Play"
              className="w-20"
            />
            <img src="/assets/appstore.png" alt="App Store" className="w-20" />
          </div>
          <div className="flex gap-4 mt-2">
            <Twitter />
            <Facebook />
            <Instagram />
            <Linkedin />
          </div>
        </ul>
      </div>

      <div className="bg-black text-white text-center p-4 border-t border-gray-700">
        <p className="text-sm">
          <Copyright className="inline-block text-center w-4 h-4" /> Copyright
          Rimel 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
