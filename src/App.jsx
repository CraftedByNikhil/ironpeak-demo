import Header from "./components/Header";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import WhyChooseUs from "./components/WhyChooseUs";
import Trainers from "./components/Trainers";
import PricingPlans from "./components/PricingPlans";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh" }}>
      <Header />
      <Hero />
      <Programs />
      <WhyChooseUs />
      <Trainers />
      <PricingPlans />
      <Testimonials />
      <CTASection />
      <Contact />
      <Footer />
    </div>
  );
}
