import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Heart } from "lucide-react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white text-black p-4 shadow-md fixed w-full top-0 z-50">
        <div className="flex justify-around items-center">
          <Link to="/" className="text-3xl font-bold">
            Exclusive
          </Link>

          <div className="md:hidden" onClick={toggleMenu}>
            <Menu className="w-8 h-8 text-black cursor-pointer" />
          </div>

          <ul className="hidden md:flex space-x-8 items-center">
            <li>
              <Link to="/" className="hover:text-gray-400 hover:border-b-2">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-gray-400 hover:border-b-2"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-gray-400 hover:border-b-2"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="hover:text-gray-400 hover:border-b-2"
              >
                Sign Up
              </Link>
            </li>
          </ul>

          <div className="hidden md:flex space-x-4 items-center">
            <div className="flex items-center space-x-2 px-4 border bg-gray-200 rounded h-10">
              <input
                type="search"
                placeholder="Search..."
                className="p-2 rounded-lg text-lg w-[200px] bg-transparent border-none outline-none"
              />
              <Search className="h-5 w-5" />
            </div>
            <Link to="/wishlist"> <Heart className="h-5 w-5 cursor-pointer" /></Link>
            <Link to="/cart"> <ShoppingCart className="h-5 w-5 cursor-pointer" /></Link>
          </div>
        </div>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
            <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50 p-4 space-y-6">
              <button
                className="absolute top-4 right-4 text-black"
                onClick={closeMenu}
              >
                <X className="w-8 h-8" />
              </button>
              <ul className="space-y-6 text-center text-xl">
                <li>
                  <Link
                    to="/"
                    className="hover:text-gray-400"
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-gray-400"
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-gray-400"
                    onClick={closeMenu}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="hover:text-gray-400"
                    onClick={closeMenu}
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>

      <div className="pt-[72px]">
        <main></main>
      </div>
    </>
  );
};

export default Navbar;
