import { useState } from "react";
import { fadeIn, textVariant } from "../utils/motion";
import {
  MotionSection,
  MotionDiv,
  MotionH2,
  MotionH3,
  MotionP,
  MotionButton,
  MotionInput,
} from "./Motion";

const PricingSection = () => {
  const [productCount, setProductCount] = useState(1);

  const starterPrice = Math.round(4000 * (productCount / 50));
  const businessPrice = Math.round(7500 * (productCount / 50));

  return (
    <MotionSection
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <MotionH2
          variants={textVariant(0.3)}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Pricing
        </MotionH2>

        <MotionDiv
          variants={fadeIn("up", 0.4)}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {/* Starter Plan */}
          <MotionDiv
            variants={fadeIn("right", 0.5)}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <MotionH3
              variants={fadeIn("up", 0.6)}
              className="text-xl text-gray-600 mb-4"
            >
              Starter
            </MotionH3>
            <MotionP
              variants={fadeIn("up", 0.7)}
              className="text-3xl font-bold mb-6"
            >
              ${starterPrice}/mo
            </MotionP>
          </MotionDiv>

          {/* Business Plan */}
          <MotionDiv
            variants={fadeIn("left", 0.5)}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <MotionH3
              variants={fadeIn("up", 0.6)}
              className="text-xl text-gray-600 mb-4"
            >
              Business
            </MotionH3>
            <MotionP
              variants={fadeIn("up", 0.7)}
              className="text-3xl font-bold mb-6"
            >
              ${businessPrice}/mo
            </MotionP>
          </MotionDiv>
        </MotionDiv>

        {/* Product */}
        <MotionDiv variants={fadeIn("up", 0.8)} className="max-w-xl mx-auto">
          <MotionP
            variants={fadeIn("up", 0.9)}
            className="text-center text-gray-600 mb-4"
          >
            {productCount} products
          </MotionP>

          <MotionDiv variants={fadeIn("up", 1.0)} className="relative px-4">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm text-gray-600">1</span>
              <MotionInput
                type="range"
                min="1"
                max="50"
                value={productCount}
                onChange={(e) => setProductCount(parseInt(e.target.value))}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-xs sm:text-sm text-gray-600">50</span>
            </div>
          </MotionDiv>

          <MotionDiv variants={fadeIn("up", 1.1)} className="text-center mt-12">
            <MotionP
              variants={fadeIn("up", 1.2)}
              className="text-xl text-gray-600 mb-4"
            >
              Ready to get started?
            </MotionP>
            <MotionButton
              variants={fadeIn("up", 1.3)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Get Started
            </MotionButton>
          </MotionDiv>
        </MotionDiv>
      </div>
    </MotionSection>
  );
};

export default PricingSection;
