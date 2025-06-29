import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { MotionNav, MotionDiv, MotionButton, MotionA } from "./Motion"; // import wrapper
import { fadeIn } from "../utils/motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, SetIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Our Services" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <MotionNav
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm"
    >
      <MotionDiv className="w-full flex items-center justify-between px-2 md:px-4 lg:px-6 md:h-20 h-16 gap-4">
        {/* Logo */}
        <MotionDiv variants={fadeIn("down", 0.5)}>
          <MotionA href="#home" className="flex items-center cursor-pointer">
            <img
              src="kontrola-logo.png"
              alt="Kontrola Logo"
              className="h-16 md:h-12 lg:h-16 object-contain"
            />
          </MotionA>
        </MotionDiv>

        {/* mobile menu button */}
        <MotionButton
          onClick={() => SetIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <HiX className="size-6" />
          ) : (
            <HiMenu className="size-6" />
          )}
        </MotionButton>

        {/* desktop navitems */}
        <MotionDiv className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <MotionA
              key={index}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${
                activeLink === link.href
                  ? "text-blue-600 after:w-full"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {link.label}
            </MotionA>
          ))}
        </MotionDiv>

        {/* get in touch btn */}
        <MotionButton className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
          <MotionA href="#newsletter">Get In Touch</MotionA>
        </MotionButton>
      </MotionDiv>

      {/* mobile menu */}
      {isMenuOpen && (
        <MotionDiv className="md:hidden bg-white border-t border-gray-100 py-4">
          <MotionDiv className="container mx-auto px-4 space-y-3">
            {navLinks.map((link, index) => (
              <MotionA
                key={index}
                onClick={() => {
                  setActiveLink(link.href);
                  SetIsMenuOpen(false);
                }}
                className={`block text-sm font-medium py-2 ${
                  activeLink === link.href
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                href={link.href}
              >
                {link.label}
              </MotionA>
            ))}

            <MotionButton className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
              <MotionA href="#newsletter">Get In Touch</MotionA>
            </MotionButton>
          </MotionDiv>
        </MotionDiv>
      )}
    </MotionNav>
  );
};

export default Navbar;
