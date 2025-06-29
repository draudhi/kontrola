import React from "react";
import scheduleImage from "../assets/stats.png";
import {
  MotionA,
  MotionDiv,
  MotionH2,
  MotionImg,
  MotionP,
  MotionSection,
  MotionSpan,
  MotionSvg,
  MotionPath,
} from "./Motion";
import { fadeIn, textVariant } from "../utils/motion";

const SchedulesSection = () => {
  return (
    <MotionSection
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="max-w-7xl mx-auto px-4 py-16 md:py-24"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        {/*Left*/}
        <MotionDiv variants={fadeIn("right", 0.3)} className="md:w-1/2 w-full">
          <MotionImg
            variants={fadeIn("up", 0.4)}
            src={scheduleImage}
            alt="schedule image"
            className="w-full h-full"
          />
        </MotionDiv>

        {/*right*/}
        <MotionDiv variants={fadeIn("left", 0.3)} className="md:w-1/2 w-full">
          <MotionSpan
            variants={fadeIn("up", 0.4)}
            className="text-orange-500 font-semibold"
          >
            SCHEDULE
          </MotionSpan>
          <MotionH2
            variants={textVariant(0.5)}
            className="text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6"
          >
            Streamline Your Business <br /> With Smart Scheduling Solution
          </MotionH2>
          <MotionP variants={fadeIn("up", 0.6)} className="text-gray-600 mb-8">
            Boost productivity and simplify scheduling — automate appointments,
            sync teams, and impress customers effortlessly.
          </MotionP>
          <MotionA
            variants={fadeIn("up", 0.7)}
            href="#"
            className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all "
          >
            Explore scheduling features
            <MotionSvg
              variants={fadeIn("left", 0.8)}
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <MotionPath
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </MotionSvg>
          </MotionA>
        </MotionDiv>
      </div>
    </MotionSection>
  );
};

export default SchedulesSection;
