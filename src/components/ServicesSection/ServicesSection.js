import styled from 'styled-components';
import { FaCode, FaShoppingCart, FaRocket } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

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

const ServicesContainer = styled.section.attrs({ id: 'services' })`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 24px;
  background: ${(props) => props.theme.background}; 
  color: ${(props) => props.theme.text}; 
  text-align: center;
  transition: background 0.5s ease, color 0.5s ease;
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1100px;
  width: 100%;
  margin-top: 40px;
`;

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

  const { theme } = useTheme(); 

  const iconColor = theme === 'dark' ? '#fff' : '#000';

  const servicesData = [
        {
            title: 'Sistemas de Gestão Personalizados',
            description: 'Desenvolvemos plataformas que otimizam processos internos, melhoram a eficiência e centralizam suas operações de forma segura.',
            icon: <FaCode size={50} color={iconColor} />,
        },
        {
            title: 'E-commerce Estratégico',
            description: 'Crie uma loja online escalável e de alta conversão. Nossa tecnologia garante uma experiência de compra fluida e segura para seus clientes.',
            icon: <FaShoppingCart size={50} color={iconColor} />,
        },
        {
            title: 'Landing Pages e SPAs',
            description: 'Desenvolvemos páginas de alta performance focadas em captar leads e converter visitantes em clientes, com a velocidade e dinamismo das SPAs.',
            icon: <FaRocket size={50} color={iconColor} />,
        },
    ];

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