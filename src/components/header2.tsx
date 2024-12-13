"use client";
import Link from "next/link";
import { useState } from "react";
import { FaUser, FaSearch, FaShoppingCart, FaEnvelope } from "react-icons/fa";

export default function Header2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative w-full lg:h-[58px]">
      {/* Logo and Desktop Menu */}
      <div className="flex justify-between items-center lg:justify-start p-4 lg:p-0">
        {/* Logo */}
        <h3 className="font-Montserrat font-semibold text-2xl lg:ml-[60px]">
          Bandage
        </h3>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6 ml-[200px]">
          <ul className="flex gap-6 font-Montserrat font-semibold text-gray-500">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/pages">Pages</Link></li>
          </ul>
        </nav>

        {/* Login/Register and Icons */}
        <div className="hidden lg:flex items-center gap-6 ml-auto mr-[50px]">
          <Link href="/login" className="flex items-center text-blue-500">
            <FaUser className="mr-2" />
            Login / Register
          </Link>
          <div className="flex gap-4">
            <FaSearch className="cursor-pointer text-lg" />
            <FaShoppingCart className="cursor-pointer text-lg" />
            <FaEnvelope className="cursor-pointer text-lg" />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu" className="focus:outline-none">
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-gray-800 text-white p-6 z-50 animate-fadeIn">
          <ul className="flex flex-col gap-4 items-center font-Montserrat font-semibold">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/pages">Pages</Link></li>
          </ul>
          <button onClick={toggleMenu} className="mt-4 text-sm text-gray-300">
            Close Menu
          </button>
        </div>
      )}
    </header>
  );
}