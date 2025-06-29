import React from "react";
import { BsStack } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BiTime } from "react-icons/bi";
import {
  MotionA,
  MotionButton,
  MotionDiv,
  MotionH2,
  MotionH3,
  MotionP,
  MotionSection,
} from "../component/Motion";
import { fadeIn, textVariant } from "../utils/motion";

const ServicesSection = () => {
  const services = [
    {
      icon: <BsStack className="w-8 h-8 text-indigo-600" />,
      title: "Web Design",
      description: "One for all and all for one, Muskehounds are always ready.",
      link: "#learn-more",
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
      title: "Ad-Creatives",
      description: "Alphabet Village and the subline of her own road.",
      link: "#learn-more",
    },
    {
      icon: <FiSettings className="w-8 h-8 text-red-400" />,
      title: "Automation",
      description: "Little Blind Text should turn around and return.",
      link: "#learn-more",
    },
    {
      icon: <BiTime className="w-8 h-8 text-cyan-400" />,
      title: "Infographics",
      description: "Nothing the copy said could convince her.",
      link: "#learn-more",
    },
  ];

  return (
    <MotionSection
      id="services"
      className="py-20 container mx-auto px-4 sm:px-6 lg:px-8"
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      <MotionDiv className="flex flex-col md:flex-row items-stretch justify-between gap-12 lg:gap-24">
        {/* Header */}
        <MotionDiv
          variants={fadeIn("right", 0.4)}
          className="w-full md:w-[80%] p-4"
        >
          <MotionH2
            variants={textVariant(0.2)}
            className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5"
          >
            Future of support with new shape
          </MotionH2>
          <MotionP
            variants={fadeIn("up", 0.5)}
            className="text-gray-600 text-lg mb-4 md:w-4/5"
          >
            Discuss your goals, determine success metrics, identify problems
          </MotionP>
          <MotionDiv variants={fadeIn("up", 0.6)} className="space-y-3">
            {["UX design content strategy", "Development bring"].map(
              (item, i) => (
                <MotionDiv
                  key={i}
                  variants={fadeIn("right", 0.7 + i * 0.1)}
                  className="flex items-center gap-2"
                >
                  <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
                  </div>
                  <span className="text-gray-600">{item}</span>
                </MotionDiv>
              )
            )}
          </MotionDiv>
          <MotionButton
            variants={fadeIn("up", 0.9)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-indigo-600 text-white px-8 py-3 cursor-pointer rounded-full hover:bg-indigo-700 transition-colors"
          >
            Get started
          </MotionButton>
        </MotionDiv>

        {/* Services Grid */}
        <MotionDiv
          variants={fadeIn("left", 0.3)}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <MotionDiv
              key={index}
              variants={fadeIn("up", 0.3 * (index + 1))}
              whileHover={{ scale: 1.05 }}
              className="bg-white cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <MotionH3
                variants={textVariant(0.3)}
                className="text-xl font-semibold mb-2"
              >
                {service.title}
              </MotionH3>
              <MotionP
                variants={fadeIn("up", 0.3 * (index + 1))}
                className="text-gray-600 mb-4"
              >
                {service.description}
              </MotionP>
              <MotionA
                variants={fadeIn("up", 0.3 * (index + 1))}
                href={service.link}
                className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
              >
                LEARN MORE
              </MotionA>
            </MotionDiv>
          ))}
        </MotionDiv>
      </MotionDiv>
    </MotionSection>
  );
};

export default ServicesSection;
