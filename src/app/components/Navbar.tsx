'use client'
import { useState } from "react";
import { Menu, ShoppingCart, Search, Heart } from 'lucide-react'; 
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

  // Function to close the menu
  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
    setShopDropdownOpen(false); // Close shop dropdown if menu is toggled
  };

  const toggleShopDropdown = () => {
    setShopDropdownOpen(prev => !prev);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Left Side: Menu Icon and Logo */}
        <div className="flex items-center space-x-2">
          <Menu
            size={30}
            className="cursor-pointer sm:hidden"
            onClick={toggleMenu} // Toggle menu
          />
          <Link href="/" className="text-2xl font-bold">E-commerce</Link>
        </div>
        
        {/* Center: Shop Dropdown and Other Buttons (Hidden on Mobile) */}
        <div className="hidden sm:flex space-x-2 mx-auto">
          {/* Shop Dropdown */}
          <div className="relative">
            <button 
              className="px-6 py-2 rounded-full"
              onClick={toggleShopDropdown} // Toggle shop dropdown
            >
              Shop
            </button>
            {shopDropdownOpen && (
              <div className="absolute top-12 left-0 w-full bg-white shadow-md rounded-lg">
                <ul>
                  <li>
                    <Link href="/" className="block px-4 py-2">Clothing</Link>
                  </li>
                  <li>
                    <Link href="/productlist" className="block px-4 py-2">Products</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Other Buttons */}
          <Link href="/" className="px-6 py-2 rounded-full">Home</Link>
          {/* <Link href="/about" className="px-6 py-2 rounded-full">About</Link> */}
          <Link href="/price" className="px-6 py-2 rounded-full">Price</Link>
          <Link href="/contact" className="px-6 py-2 rounded-full">Contact</Link>
          <Link href="/productlist" className="px-6 py-2 rounded-full">ProductList</Link>
        </div>

        {/* Right Side: Login/Register, Icons */}
        <div className="flex items-center space-x-6">
          <Link href="/contact" className="hidden sm:block">Login</Link>
          <Link href="/" className="hidden sm:block">Details</Link>
          <div className="flex items-center space-x-4  sm:flex">
            <Search size={24} className="cursor-pointer" />
            <Link href={"/favorites"}><Heart size={24} className="cursor-pointer" />
            </Link>
            <Link href={"/cart"}><ShoppingCart  size={24} className="cursor-pointer  " />
            </Link>

            
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`sm:hidden ${menuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-center space-y-3 bg-white-600 p-4">
          <Link href="/home" className="text-black" onClick={toggleMenu}>Home</Link>
          <Link href="/productlist" className="text-black" onClick={toggleMenu}>Shop</Link>
          <Link href="/price" className="text-black" onClick={toggleMenu}>Price</Link>
          <Link href="/contact" className="text-black" onClick={toggleMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
