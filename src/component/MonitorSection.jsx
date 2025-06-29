import {
  MotionSection,
  MotionDiv,
  MotionSpan,
  MotionH2,
  MotionP,
  MotionA,
  MotionImg,
  MotionSvg,
  MotionPath,
} from "./Motion";
import { fadeIn, textVariant } from "../utils/motion";
import "swiper/css";
import "swiper/css/navigation";
import monitorCardBg from "../assets/monitor-card.png";

const MonitorSection = () => {
  return (
    <MotionSection
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }} // ✅ Perbaikan penting agar animasi berjalan saat scroll
      className="max-w-7xl mx-auto px-4 py-16 md:py-24"
    >
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left side - Content */}
        <MotionDiv variants={fadeIn("right", 0.3)} className="w-full md:w-1/2">
          <MotionSpan
            variants={fadeIn("up", 0.4)}
            className="text-emerald-500 font-semibold"
          >
            MONITOR
          </MotionSpan>
          <MotionH2
            variants={textVariant(0.5)}
            className="text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6 md:w-4/5"
          >
            Experience the best mobile carousels — designed to engage, built to
            perform.
          </MotionH2>
          <MotionP
            variants={fadeIn("up", 0.6)}
            className="text-gray-600 mb-8 md:w-4/5"
          >
            Experience the Best Mobile Carousels — Designed to Engage, Built to
            Perform Present your content with smooth, responsive, and
            touch-friendly carousels — optimized for mobile. Fast, seamless, and
            built to keep users engaged on any device.
          </MotionP>
          <MotionA
            variants={fadeIn("up", 0.7)}
            href="#"
            className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
          >
            Learn more about monitoring
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

        {/* Right side - Swiper with background */}
        <MotionDiv
          variants={fadeIn("left", 0.3)}
          className="w-full md:w-1/2 relative"
        >
          <MotionDiv variants={fadeIn("up", 0.4)} className="p-4">
            <MotionImg
              variants={fadeIn("up", 0.5)}
              src={monitorCardBg}
              alt="Dashboard statistics"
              className="w-full h-auto rounded-lg"
            />
          </MotionDiv>
        </MotionDiv>
      </div>
    </MotionSection>
  );
};

export default MonitorSection;
