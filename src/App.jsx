import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import CompanyLogo from "./component/CompanyLogo";
import PurposeSection from "./component/PurposeSection";
import FeaturesSection from "./component/FeaturesSection";
import SchedulesSection from "./component/SchedulesSection";
import MonitorSection from "./component/MonitorSection";
import PricingSection from "./component/PricingSection";
import ServiceSection from "./component/ServiceSection";
import TestimonialSection from "./component/TestimonialSection";
import NewsletterSection from "./component/NewsletterSection";
import Footer from "./component/Footer";

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <CompanyLogo />
        <PurposeSection />
        <FeaturesSection />
        <SchedulesSection />
        <MonitorSection />
        <PricingSection />
        <ServiceSection />
        <TestimonialSection />
        <NewsletterSection />
        <Footer />
      </div>
    </main>
  );
}

export default App;
