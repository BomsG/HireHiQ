"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/recruiter", label: "For Recruiters" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
  ];

  return (
    <div className="w-full flex justify-center">
      <nav className="fixed  z-50 transition-all duration-300  py-5 mx-5 my-5 bg-[#2a2f4d]/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between gap-50 items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="text-[#25D366] font-bold text-2xl tracking-wider">
                Hire<span className="text-[#25D366]">HiQ</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-[#43c974] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/login"
                className="text-white hover:text-[#43c974] transition-colors"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className=" text-white bg-[#25D366]  hover:from-[#7F00FF]  font-semibold px-4 py-2 rounded hover:bg-[#43c974]/80 transition-colors relative overflow-hidden group"
              >
                <span className="relative z-10">Get Started</span>
                <span className="absolute inset-0 bg-[#91e1ae] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                {isOpen ? (
                  <AiOutlineClose size={24} />
                ) : (
                  <AiOutlineMenu size={24} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mt-4 bg-[#101010]/95 backdrop-blur-md rounded-lg p-4 border border-[#7F00FF]/30">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white hover:text-[#00FFF7] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="pt-2 border-t border-white/10 flex flex-col space-y-2">
                  <Link
                    href="/login"
                    className="text-white hover:text-[#00FFF7] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="bg-[#00FFF7] text-white px-4 py-2 rounded text-center hover:bg-[#7F00FF]/80 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
