import React from "react";
import {
  MotionButton,
  MotionDiv,
  MotionH2,
  MotionH3,
  MotionP,
  MotionSection,
} from "../component/Motion";
import { fadeIn, textVariant } from "../utils/motion";

const features = [
  {
    icon: "🔍",
    title: "Find out what you need",
    description: "We present you a proposal and discuss nitty-gritty like",
  },
  {
    icon: "⚙️",
    title: "Work out the details",
    description: "Communication protocols apart from engagement models",
  },
  {
    icon: "🚀",
    title: "We get to work fast",
    description: "Protocols apart from engage models, pricing billing",
  },
];

const FeaturesSection = () => {
  return (
    <MotionSection
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      className="max-w-3xl mx-auto px-4 py-16"
    >
      {/*Heading Text*/}

      <MotionDiv variants={fadeIn("up", 0.2)} className="text-center mb-12">
        <MotionH2
          variants={fadeIn("up", 0.4)}
          className="text-4xl font-bold mb-4"
        >
          How can we help your Business?
        </MotionH2>
        <MotionP variants={fadeIn("up", 0.4)} className="text-gray-600">
          Reselling builds trust — and boosts your reputation and revenue.
        </MotionP>
      </MotionDiv>

      {/*Features Boxs*/}

      <MotionDiv
        variants={fadeIn("up", 0.5)}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <MotionDiv
            key={index}
            variants={fadeIn("up", 0.3 * (index + 1))}
            className="flex flex-col text-center items-center p-6"
          >
            <MotionDiv
              variants={fadeIn("down", 0.4 * (index + 1))}
              className="w-24 h-24 rounded-full mb-6 flex items-center justify-center"
              style={{
                backgroundColor:
                  index === 0 ? "#F1EFFD" : index === 1 ? "#FEE7E7" : "#FFF3E4",
              }}
            >
              <MotionDiv
                variants={fadeIn("up", 0.5 * (index + 1))}
                className="text-3xl"
              >
                {feature.icon}
              </MotionDiv>
            </MotionDiv>

            <MotionH3
              variants={textVariant(0.3)}
              className="text-2xl font-medium mb-3"
            >
              {feature.title}
            </MotionH3>
            <MotionP
              variants={fadeIn("up", 0.6 * (index + 1))}
              className="text-gray-500 text-center"
            >
              {feature.description}
            </MotionP>
          </MotionDiv>
        ))}
      </MotionDiv>

      {/*Button*/}

      <MotionDiv variants={fadeIn("up", 0.7)} className="text-center mt-12">
        <MotionButton
          variants={fadeIn("up", 0.8)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors relative"
        >
          Become a Partner
          <div className="absolute -z-10 w-full h-full rounded-full bg-blue-600/30 blur-xl top-0 left-0"></div>
        </MotionButton>
      </MotionDiv>
    </MotionSection>
  );
};

export default FeaturesSection;
