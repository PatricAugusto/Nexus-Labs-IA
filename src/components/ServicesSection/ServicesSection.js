import styled from 'styled-components';
import { FaCode, FaShoppingCart, FaRocket, FaMobileAlt, FaPalette, FaMicrochip } from 'react-icons/fa';
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
  {
    title: 'Desenvolvimento Mobile',
    description: 'Criamos aplicativos nativos e híbridos para iOS e Android, com foco em usabilidade e desempenho, expandindo seu negócio para o mundo mobile.',
    icon: <FaMobileAlt size={50} />,
  },
  {
    title: 'Consultoria e UI/UX',
    description: 'Trabalhamos na arquitetura de informação e no design de interface para garantir que a sua solução seja intuitiva e visualmente atraente para o seu público.',
    icon: <FaPalette size={50} />,
  },
  {
    title: 'Integração de APIs',
    description: 'Integramos sua aplicação com serviços externos, como sistemas de pagamento, CRM, e-mails ou outras plataformas, para automatizar fluxos de trabalho.',
    icon: <FaMicrochip size={50} />,
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

  @media screen and (max-width: 450px) {
    padding: 60px 16px; 
  }
`;

const ServicesTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3.5rem);
  margin-bottom: 20px;
  line-height: 1.2;

  @media screen and (max-width: 450px) {
    font-size: 2.2rem; 
  }
`;

const ServicesSubtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  max-width: 700px;
  margin-bottom: 60px;
  color: ${(props) => props.theme.text};

  @media screen and (max-width: 450px) {
    font-size: 1rem; 
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1100px;
  width: 100%;
  margin-top: 40px;

  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr; 
  }
`;

const ServiceCard = styled.div`
  padding: 40px;
  border-radius: 15px;
  background: ${(props) => props.theme.glassBackground};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid ${(props) => props.theme.glassBorder};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: translateY(-10px);
  }

  @media screen and (max-width: 450px) {
    padding: 30px 20px;
  }
`;

const IconWrapper = styled.div`
  color: ${(props) => props.theme.text};
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin: 20px 0 10px;
  color: ${(props) => props.theme.text};
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.text};
`;

export default function ServicesSection() {
  const { theme } = useTheme();

  return (
    <ServicesContainer>
      <ServicesTitle>Nossas Soluções de Desenvolvimento</ServicesTitle>
      <ServicesSubtitle>
        Da criação de sites institucionais à automação de processos internos, transformamos desafios de negócio em soluções digitais que geram resultados.
      </ServicesSubtitle>
      <ServicesGrid>
        {servicesData.map((service, index) => (
          <ServiceCard key={index} theme={theme}>
            <IconWrapper theme={theme}>{service.icon}</IconWrapper>
            <CardTitle>{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  );
}