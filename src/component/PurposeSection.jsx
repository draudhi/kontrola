import React from "react";
import { fadeIn, textVariant } from "../utils/motion";
import { MotionDiv, MotionH2, MotionH3, MotionP } from "./Motion"; // pastikan path-nya sesuai

const PurposeSection = () => {
  const features = [
    {
      icon: "🟣",
      title: "Built for impact",
      description:
        "We discover and grow diverse talents in design, development, and marketing.",
    },
    {
      icon: "🔴",
      title: "In sync with you",
      description:
        "We adapt to your flow and rhythm, becoming an extension of your team for a seamless experience.",
    },
  ];

  return (
    <section id="about" className="w-full bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <MotionDiv
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 grid-cols-1 gap-8"
        >
          <MotionDiv variants={fadeIn("right", 0.3)}>
            <MotionDiv
              variants={fadeIn("up", 0.4)}
              className="text-sm text-purple-600 font-medium mb-2"
            >
              ACHIEVE MORE
            </MotionDiv>
            <MotionH2
              variants={textVariant(0.5)}
              className="text-3xl md:w-4/5 md:text-4xl font-bold text-gray-900"
            >
              Convoys keep teams united and moving safely.
            </MotionH2>
          </MotionDiv>

          <MotionDiv
            variants={fadeIn("left", 0.3)}
            className="col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8"
          >
            {features.map((feature, index) => (
              <MotionDiv
                key={index}
                variants={fadeIn("up", 0.3 * (index + 1))}
                className="flex items-start space-x-4"
              >
                <MotionDiv
                  variants={fadeIn("right", 0.4 * (index + 1))}
                  className="w-12 h-12 flex items-center justify-center rounded-lg"
                >
                  {feature.icon}
                </MotionDiv>
                <MotionDiv variants={fadeIn("left", 0.4 * (index + 1))}>
                  <MotionH3
                    variants={textVariant(0.3)}
                    className="text-xl font-semibold text-gray-900 mb-2"
                  >
                    {feature.title}
                  </MotionH3>
                  <MotionP
                    variants={fadeIn("up", 0.4)}
                    className="text-gray-600"
                  >
                    {feature.description}
                  </MotionP>
                </MotionDiv>
              </MotionDiv>
            ))}
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
};

export default PurposeSection;
