import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
const footerLinks = {
  company: [
    { name: "About", href: "#" },
    { name: "Terms of Use", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "How it Works", href: "#" },
    { name: "Contact Us", href: "#" },
  ],
  getHelp: [
    { name: "Support Career", href: "#" },
    { name: "24h Service", href: "#" },
    { name: "Quick Chat", href: "#" },
  ],
  support: [
    { name: "FAQ", href: "#" },
    { name: "Policy", href: "#" },
    { name: "Business", href: "#" },
  ],
  contact: [
    { name: "WhatsApp", href: "#" },
    { name: "Support 24", href: "#" },
  ],
};
import {
  MotionA,
  MotionDiv,
  MotionH3,
  MotionLi,
  MotionP,
  MotionUl,
} from "../component/Motion";
import { fadeIn, textVariant } from "../utils/motion";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <MotionDiv
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8"
      >
        <MotionDiv
          variants={fadeIn("up", 0.3)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12"
        >
          {/* Brand Column */}
          <MotionDiv variants={fadeIn("right", 0.4)} className="lg:col-span-4">
            <MotionDiv
              variants={fadeIn("down", 0.5)}
              className="flex items-center mb-3"
            >
              <img
                src="/kontrola-logo.png"
                alt="Kontrola Logo"
                className="h-10 md:h-8 lg:h-16 w-auto object-contain -ml-7"
              />
            </MotionDiv>
            <MotionP
              variants={fadeIn("up", 0.6)}
              className="text-gray-600 mb-6 md:w-3/4"
            >
              Kontrola is a smart solution for scheduling, team collaboration,
              and work management — all in one platform.
            </MotionP>
            <MotionDiv variants={fadeIn("up", 0.7)} className="flex gap-4">
              <MotionA
                whileHover={{ scale: 1.1 }}
                href="#"
                aria-label="Facebook"
                title="Facebook"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                <FaFacebookF className="size-5" />
              </MotionA>

              <MotionA
                whileHover={{ scale: 1.1 }}
                href="#"
                aria-label="Twitter"
                title="Twitter"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                <FaTwitter className="size-5" />
              </MotionA>

              <MotionA
                whileHover={{ scale: 1.1 }}
                href="#"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                <FaLinkedinIn className="size-5" />
              </MotionA>
            </MotionDiv>
          </MotionDiv>

          {/* footer nav items */}
          <MotionDiv variants={fadeIn("left", 0.4)} className="lg:col-span-8">
            <nav aria-label="Footer Navigation">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {Object.entries(footerLinks).map(
                  ([category, links], categoryIndex) => (
                    <MotionDiv
                      key={category}
                      variants={fadeIn("up", 0.3 * (categoryIndex + 1))}
                    >
                      <MotionH3
                        variants={textVariant(0.2)}
                        className="text-lg font-medium mb-4 uppercase"
                      >
                        {category
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase())}
                      </MotionH3>
                      <MotionUl
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="space-y-3"
                      >
                        {links.map((link, index) => (
                          <MotionLi
                            variants={fadeIn("up", 0.1 * (index + 1))}
                            key={index}
                          >
                            <MotionA
                              whileHover={{ x: 5 }}
                              href={link.href}
                              className="text-gray-600 hover:text-gray-900"
                            >
                              {link.name}
                            </MotionA>
                          </MotionLi>
                        ))}
                      </MotionUl>
                    </MotionDiv>
                  )
                )}
              </div>
            </nav>
          </MotionDiv>
        </MotionDiv>

        {/* Copyright*/}
        <MotionDiv
          variants={fadeIn("up", 0.8)}
          className="border-t border-gray-400 mt-12 pt-8"
        >
          <MotionDiv
            variants={fadeIn("up", 0.9)}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <MotionP
              variants={fadeIn("right", 1.0)}
              className="text-gray-600 text-sm"
            >
              Copyright © {new Date().getFullYear()} Draudhi
            </MotionP>
            <p className="text-gray-600 text-sm">Created by Draudhi </p>
          </MotionDiv>
        </MotionDiv>
      </MotionDiv>
    </footer>
  );
};

export default Footer;
