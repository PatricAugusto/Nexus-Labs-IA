// src/components/ServicesSection/ServicesSection.js

import styled from 'styled-components';
import { FaCode, FaShoppingCart, FaRocket } from 'react-icons/fa';

// Dados de exemplo para os serviços
const servicesData = [
  {
    title: 'Sistemas de Gestão Personalizados',
    description: 'Desenvolvemos plataformas que otimizam processos internos, melhoram a eficiência e centralizam suas operações de forma segura.',
    icon: <FaCode size={50} />,
  },
  {
    title: 'E-commerce Estratégico',
    description: 'Crie uma loja online escalável e de alta conversão. Nossa tecnologia garante uma experiência de compra fluida e segura para seus clientes.',
    icon: <FaShoppingCart size={50} />,
  },
  {
    title: 'Landing Pages e SPAs',
    description: 'Desenvolvemos páginas de alta performance focadas em captar leads e converter visitantes em clientes, com a velocidade e dinamismo das SPAs.',
    icon: <FaRocket size={50} />,
  },
];

// Contêiner principal da seção
const ServicesContainer = styled.section.attrs({ id: 'services' })`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 24px;
  background: #111;
  color: #fff;
  text-align: center;
`;

const ServicesTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3.5rem);
  margin-bottom: 20px;
  line-height: 1.2;
`;

const ServicesSubtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  max-width: 700px;
  margin-bottom: 60px;
  color: #bbb;
`;

// Grade para os cards
const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  width: 100%;
  max-width: 1200px;
  
  // Adicionando Media Query para telas menores
  @media screen and (max-width: 768px) {
    gap: 20px;
  }
`;

// Card com o estilo Glassmorphism
const ServiceCard = styled.div`
  padding: 40px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const IconWrapper = styled.div`
  color: #fff;
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 16px;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #ccc;
`;

export default function ServicesSection() {
  return (
    <ServicesContainer>
      <ServicesTitle>Nossas Soluções de Desenvolvimento</ServicesTitle>
      <ServicesSubtitle>
        Da criação de sites institucionais à automação de processos internos, transformamos desafios de negócio em soluções digitais que geram resultados.
      </ServicesSubtitle>
      <ServicesGrid>
        {servicesData.map((service, index) => (
          <ServiceCard key={index}>
            <IconWrapper>{service.icon}</IconWrapper>
            <CardTitle>{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  );
}