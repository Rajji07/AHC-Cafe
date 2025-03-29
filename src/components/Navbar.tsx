import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Coffee, Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "../pages/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="fixed w-full bg-[#1a0f07]/90 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-[#d4a574]" />
            <span className="text-2xl font-bold text-white">AHC-Cafe</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-[#d4a574] transition">
              Home
            </Link>
            <Link
              to="/menu"
              className="text-white hover:text-[#d4a574] transition"
            >
              Menu
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-[#d4a574] transition"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-[#d4a574] transition"
            >
              Contact
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-white hover:text-[#d4a574] transition" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#d4a574] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-white" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#d4a574] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              className="text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-white hover:text-[#d4a574] transition"
              >
                Home
              </Link>
              <Link
                to="/menu"
                className="text-white hover:text-[#d4a574] transition"
              >
                Menu
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-[#d4a574] transition"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-[#d4a574] transition"
              >
                Contact
              </Link>
              <Link
                to="/cart"
                className="text-white hover:text-[#d4a574] transition"
              >
                Cart
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
