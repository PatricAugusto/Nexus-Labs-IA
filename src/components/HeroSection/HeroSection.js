import styled from 'styled-components';
import Image from 'next/image'; 
import { useTheme } from '../../context/ThemeContext';

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
  overflow: hidden; 
`;

const HeroImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; 

  & > span {
    position: fixed !important; 
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const GlassContainer = styled.div`
  padding: 60px;
  border-radius: 20px;
  background: ${(props) => props.theme.glassBackground}; 
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid ${(props) => props.theme.glassBorder}; 
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 80px;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  margin-bottom: 24px;
  line-height: 1.2;
  color: #fff; 
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5); 
`;

const HeroP = styled.p`
  font-size: clamp(1rem, 2vw, 1.5rem);
  margin-bottom: 48px;
  color: #fff; 
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
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

export default function HeroSection() {
  return (
    <HeroContainer>
      <HeroImageWrapper>
        <Image
          src="/images/Nexus-Labs-IA-logo.png"
          alt="Uma equipe de desenvolvedores da Nexus Labs trabalhando em um projeto, com foco em otimização e performance."
          layout="fill"
          objectFit="cover"
          quality={100}
          priority 
        />
      </HeroImageWrapper>
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
      </GlassContainer>
    </HeroContainer>
  );
}