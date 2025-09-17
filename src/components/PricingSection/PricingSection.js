import styled from 'styled-components';
import { useTheme } from '../../context/ThemeContext';

const plansData = [
  {
    name: 'Plano Essencial',
    price: '$899/projeto',
    features: [
      'Desenvolvimento de Landing Page',
      'Design Responsivo',
      'Otimização de SEO Básico',
      'Entrega em 7 dias úteis',
    ],
  },
  {
    name: 'Plano Profissional',
    price: '$1.999/projeto',
    features: [
      'Desenvolvimento de SPA ou E-commerce',
      'Integração de Pagamento',
      'Painel de Gestão Personalizado',
      'Suporte Prioritário',
    ],
  },
  {
    name: 'Plano Empresarial',
    price: 'Sob Consulta',
    features: [
      'Solução de Software Customizada',
      'Desenvolvimento de Múltiplas Aplicações',
      'Consultoria Estratégica',
      'Suporte Dedicado 24/7',
    ],
  },
];

const PricingContainer = styled.section.attrs({ id: 'pricing' })`
  padding: 80px 24px;
  background: ${(props) => props.theme.background}; 
  color: ${(props) => props.theme.text}; 
  text-align: center;
  transition: background 0.5s ease, color 0.5s ease;
`;

const PricingTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 16px;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: center;
  }
`;

const PricingSubtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: center;
  }
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 1000px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
`;

const PricingCard = styled.div`
  background: ${(props) => props.theme.cardBackground};
  border: 1px solid ${(props) => props.theme.cardBorder}; 
  border-radius: 10px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const PlanName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: ${(props) => props.theme.text}; 
`;

const PlanPrice = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${(props) => props.theme.text}; 
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 30px;
  flex-grow: 1;
`;

const FeatureItem = styled.li`
  color: ${(props) => props.theme.text};
`;
const CallToActionButton = styled.a`
  background-color: #fff;
  color: #000;
  padding: 12px 32px;
  font-size: 1.2rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  margin-top: auto; 

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-2px);
  }
`;

export default function PricingSection() {
  const { theme } = useTheme();

  return (
    <PricingContainer>
      <PricingTitle>Escolha o seu Plano de Desenvolvimento</PricingTitle>
      <PricingSubtitle>
        Nossas soluções são escaláveis e se adaptam às suas necessidades. Comece com o plano ideal para você.
      </PricingSubtitle>
      <PricingGrid>
        {plansData.map((plan, index) => (
          <PricingCard key={index}>
            <PlanName>{plan.name}</PlanName>
            <PlanPrice>{plan.price}</PlanPrice>
            <FeaturesList>
              {plan.features.map((feature, idx) => (
                <FeatureItem key={idx}>{feature}</FeatureItem>
              ))}
            </FeaturesList>
            <CallToActionButton href="#">
              Começar Agora
            </CallToActionButton>
          </PricingCard>
        ))}
      </PricingGrid>
    </PricingContainer>
  );
}