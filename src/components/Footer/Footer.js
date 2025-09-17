// src/components/Footer/Footer.js

import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const FooterContainer = styled.footer`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  padding: 60px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.5s ease;
`;

const FooterContent = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`;

const FooterBrand = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: ${(props) => props.theme.text};
`;

const FooterLinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLinkItem = styled.li`
  margin-bottom: 10px;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.text};
  transition: color 0.3s ease;
  &:hover {
    color: #007bff;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

const SocialIconLink = styled.a`
  font-size: 1.5rem;
  color: ${(props) => props.theme.text};
  transition: color 0.3s ease;
  &:hover {
    color: #007bff;
  }
`;

const Copyright = styled.p`
  margin-top: 40px;
  font-size: 0.9rem;
  color: #888;
`;

export default function Footer() {
  const { theme } = useTheme();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterBrand>Nexus Labs IA</FooterBrand>
          <p>Soluções digitais que transformam ideias em realidade.</p>
          <SocialIcons>
            <SocialIconLink href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink href="#" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialIconLink>
            <SocialIconLink href="mailto:contato@nexuslabs.ia" aria-label="Email">
              <FaEnvelope />
            </SocialIconLink>
          </SocialIcons>
        </FooterSection>

        <FooterSection>
          <h3>Links Rápidos</h3>
          <FooterLinkList>
            <FooterLinkItem>
              <FooterLink href="#services">Serviços</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLink href="#pricing">Planos</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLink href="#contact">Contato</FooterLink>
            </FooterLinkItem>
          </FooterLinkList>
        </FooterSection>
      </FooterContent>
      <Copyright>&copy; {new Date().getFullYear()} Nexus Labs IA. Todos os direitos reservados.</Copyright>
    </FooterContainer>
  );
}