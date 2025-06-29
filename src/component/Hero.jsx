import React from "react";
import teamwork from "../assets/teamwork.png";
import { fadeIn, textVariant } from "../utils/motion";
import { MotionDiv, MotionH1, MotionP } from "./Motion"; // ✅ import wrapper

const Hero = () => {
  return (
    <section
      id="home"
      className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-44 pb-6 px-4 sm:px-6 lg:px-8"
    >
      {/* Left Col*/}
      <div className="w-full md:w-1/2 space-y-8">
        {/* Start Badge*/}
        <MotionDiv
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <div className="flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group">
            <span className="text-blue-600 group-hover:text-amber-300 group-hover:scale-110 transition-transform">
              ★
            </span>
            <span className="text-sm font-medium">Jump Start your growth</span>
          </div>
        </MotionDiv>

        <MotionH1
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight"
        >
          We accelerate SaaS growth —{" "}
          <span className="text-blue-600 relative inline-block">
            from bold startups to global enterprises{" "}
          </span>{" "}
        </MotionH1>

        <MotionP
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-gray-600 text-lg md:text-xl max-w-xl"
        >
          No more juggling tools — get leads, training, and conversions in one
          streamlined solution.
        </MotionP>

        <MotionDiv
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView="show"
          className="flex gap-3 max-w-md"
        >
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
          />
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-300">
            →
          </button>
        </MotionDiv>
      </div>

      {/* Right Col */}
      <MotionDiv
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView="show"
        className="w-full md:w-1/2 mt-10 md:mt-0"
      >
        <div className="relative flex justify-center w-full">
          {/* Elemen bulat kanan atas */}
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-100 rounded-full opacity-30 z-0 hidden md:block"></div>

          {/* Elemen bulat kiri bawah */}
          <div className="absolute -bottom-20 -left-5 w-40 h-40 bg-[#F1F6FF] rounded-full z-0"></div>

          {/* Titik kecil kiri atas */}
          <div className="absolute top-0 left-4 w-4 h-4 bg-blue-500 rounded-full z-10"></div>

          {/* Gambar utama */}
          <div className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-lg rounded-xl">
            <img
              src={teamwork}
              alt="teamwork"
              className="w-full h-[420px] object-cover transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>
        </div>
      </MotionDiv>
    </section>
  );
};

export default Hero;
