// import { About } from "./components/About";
import { Cta } from "./components/Cta";
// import { FAQ } from "./components/FAQ";
// import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
// import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
// import { Newsletter } from "./components/Newsletter";
// import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
// import { Services } from "./components/Services";
// import { Sponsors } from "./components/Sponsors";
// import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import "./App.css";
import { Clients } from "./components/Clients";
 import { TextAnimate } from "./components/TextAnimate";
import FeatureSection from "./components/FeatureSection";
import ServicesSection from "./components/ServicesSection";
import IndustriesSection from "./components/IndustriesSection";
import PortfolioSection from "./components/PortfolioSection";
import ProcessSection from "./components/ProcessSection";
import FAQSection from "./components/FAQSection";
// import AboutSection from "./components/AboutSection";
 

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <FeatureSection/>
      <ServicesSection/>
      <IndustriesSection/>
      <PortfolioSection/>
      <ProcessSection/>
      {/* <AboutSection/> */}
      {/* <About /> */}
      {/* <Services /> */}
      <Testimonials />
      <TextAnimate />
      <FAQSection/>
      <Cta />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
