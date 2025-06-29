import React from "react";
import { HiArrowRight } from "react-icons/hi";
import {
  MotionButton,
  MotionDiv,
  MotionH2,
  MotionInput,
  MotionP,
} from "../component/Motion";
import { fadeIn, textVariant } from "../utils/motion";

const NewsletterSection = () => {
  return (
    <section
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      id="newsletter"
    >
      <MotionDiv
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        className="bg-blue-600 rounded-2xl overflow-hidden relative"
      >
        {/* Gradient background */}
        <MotionDiv
          variants={fadeIn("left", 0.4)}
          className="absolute top-0 right-0 w-1/2 h-full bg-blue-700 hidden md:block z-0"
          style={{ clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        />

        {/* Content */}
        <div className="relative z-10 md:px-16 py-16 px-6 md:py-24 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left */}
          <MotionDiv
            variants={fadeIn("right", 0.5)}
            className="text-white max-w-lg text-center md:text-left"
          >
            <MotionH2
              variants={textVariant(0.3)}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4"
            >
              Subscribe Newsletter
            </MotionH2>
            <MotionP
              variants={fadeIn("up", 0.6)}
              className="text-blue-100 text-sm sm:text-base"
            >
              Join our newsletter and be the first to know about new features,
              insights, and special deals.
            </MotionP>
          </MotionDiv>

          {/* Right */}
          <MotionDiv
            variants={fadeIn("up", 0.6)}
            className="flex flex-col sm:flex-row gap-4 sm:gap-0 w-full md:w-auto"
          >
            <MotionInput
              variants={fadeIn("right", 0.7)}
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-white sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none"
            />
            <MotionButton
              variants={fadeIn("left", 0.7)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto cursor-pointer bg-green-500 text-white px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-lg flex items-center gap-2"
            >
              <span>Discover</span>
              <HiArrowRight className="size-5" />
            </MotionButton>
          </MotionDiv>
        </div>
      </MotionDiv>
    </section>
  );
};

export default NewsletterSection;
