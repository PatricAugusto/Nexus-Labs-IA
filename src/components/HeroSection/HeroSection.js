import styled from 'styled-components';
import Image from 'next/image';

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    #000,
    #333
  );
  z-index: -1;
`;

const HeroContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 24px;
  color: #fff;
  text-align: center;

  @media screen and (max-width: 480px) {
    padding: 0 16px;
  }
`;

const GlassContainer = styled.div`
  padding: 60px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  max-width: 1100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    gap: 60px;
    padding: 80px;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`;

const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  margin-bottom: 24px;
  line-height: 1.2;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroP = styled.p`
  font-size: clamp(1rem, 2vw, 1.5rem);
  margin-bottom: 48px;
`;

const HeroButton = styled.a`
  background-color: #fff;
  color: #000;
  padding: 12px 32px;
  font-size: 1.2rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-2px);
  }
`;

const HeroImageWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    display: none; 
  }
`;

export default function HeroSection() {
  return (
    <HeroContainer>
      <Background />
      <GlassContainer>
        <HeroContent>
          <HeroH1>
            Transforme suas ideias em experiências web de alta performance.
          </HeroH1>
          <HeroP>
            Desenvolvemos sistemas de gestão, e-commerces e landing pages otimizadas para impulsionar o seu negócio.
          </HeroP>
          <HeroButton href="#">
            Explore Nossos Serviços
          </HeroButton>
        </HeroContent>
        <HeroImageWrapper>
          <Image
            src="/images/Nexus-Labs-IA-logo.png"
            alt="Imagem da equipe da Nexus Labs IA"
            width={400}
            height={400}
            priority={true} 
          />
        </HeroImageWrapper>
      </GlassContainer>
    </HeroContainer>
  );
}