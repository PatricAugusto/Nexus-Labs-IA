import styled from 'styled-components';

const plansData = [
  {
    name: 'Plano Essencial',
    price: '$499/projeto',
    features: [
      'Desenvolvimento de Landing Page',
      'Design Responsivo',
      'Otimização de SEO Básico',
      'Entrega em 7 dias úteis',
    ],
  },
  {
    name: 'Plano Profissional',
    price: '$1.499/projeto',
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 24px;
  background: linear-gradient(135deg, #1a1a1a, #000); 
  color: #fff;
  text-align: center;
`;

const PricingTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3.5rem);
  margin-bottom: 20px;
`;

const PricingSubtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  max-width: 700px;
  margin-bottom: 60px;
  color: #bbb;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  width: 100%;
  max-width: 1200px;
`;

const PricingCard = styled.div`
  padding: 40px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const PlanName = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

const PlanPrice = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #fff;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 30px;
  flex-grow: 1;
`;

const FeatureItem = styled.li`
  margin-bottom: 10px;
  font-size: 1rem;
  color: #ccc;
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