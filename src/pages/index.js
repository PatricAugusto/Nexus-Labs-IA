// src/pages/index.js

import Head from 'next/head'; // Importando o componente Head
import HeroSection from '../components/HeroSection/HeroSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import PricingSection from '../components/PricingSection/PricingSection';
import ContactSection from '../components/ContactSection/ContactSection';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import AnimatedSection from '../components/AnimatedSection/AnimatedSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nexus Labs IA | Soluções em Desenvolvimento Web</title>
        <meta 
          name="description" 
          content="Nexus Labs IA: Transforme suas ideias em experiências web de alta performance. Desenvolvemos Landing Pages, E-commerces e Sistemas de Gestão personalizados." 
        />
        <meta name="keywords" content="desenvolvimento web, startup, sistemas de gestão, e-commerce, landing page, SPA, Nexus Labs" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Adicionando Dados Estruturados para o Google */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Corporation",
            "name": "Nexus Labs IA",
            "url": "https://www.nexuslabsia.com", // Substitua pela sua URL real
            "logo": "https://www.nexuslabsia.com/images/Nexus-Labs-IA-logo.png", // Substitua pela URL do seu logo
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+55 (49) 99999-9999",
              "contactType": "Sales",
              "areaServed": "BR",
              "email": "contato@nexuslabsia.com"
            },
            "sameAs": [
              "https://www.linkedin.com/company/nexuslabsia",
              "https://twitter.com/nexuslabsia"
            ]
          })
        }} />
      </Head>

      <Navbar />
      <HeroSection />
      
      <AnimatedSection>
        <ServicesSection />
      </AnimatedSection>

      <AnimatedSection>
        <PricingSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>
      
      <Footer />
    </>
  );
}