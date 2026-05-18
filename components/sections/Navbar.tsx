"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <span className="text-xl font-bold text-[#8B5E3C]">Sip & Bloom</span>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <a
              href="#menu"
              className="text-sm text-gray-700 hover:text-[#8B5E3C]"
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-sm text-gray-700 hover:text-[#8B5E3C]"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#reviews"
              className="text-sm text-gray-700 hover:text-[#8B5E3C]"
            >
              Reviews
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-sm text-gray-700 hover:text-[#8B5E3C]"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Order Now Button */}
        <button className="hidden md:block bg-[#8B5E3C] text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-[#7a5235] transition-colors">
          Order Now
        </button>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-[#8B5E3C]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#FAF7F2] px-6 py-4 flex flex-col gap-4">
          <a
            href="#menu"
            className="text-sm text-gray-700 hover:text-[#8B5E3C]"
            onClick={() => setIsOpen(false)}
          >
            Menu
          </a>
          <a
            href="#about"
            className="text-sm text-gray-700 hover:text-[#8B5E3C]"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#reviews"
            className="text-sm text-gray-700 hover:text-[#8B5E3C]"
            onClick={() => setIsOpen(false)}
          >
            Reviews
          </a>
          <a
            href="#contact"
            className="text-sm text-gray-700 hover:text-[#8B5E3C]"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <button className="bg-[#8B5E3C] text-white text-sm font-medium px-5 py-2 rounded-full w-full hover:bg-[#7a5235] transition-colors">
            Order Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
