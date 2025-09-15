import HeroSection from '../components/HeroSection/HeroSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import PricingSection from '../components/PricingSection/PricingSection';
import ContactSection from '../components/ContactSection/ContactSection';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar'; 

export default function Home() {
  return (
    <>
      <Navbar /> 
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </>
  );
}