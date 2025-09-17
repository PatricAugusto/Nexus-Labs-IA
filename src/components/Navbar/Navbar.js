import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const Nav = styled.nav.attrs({ 'aria-label': 'Navegação principal do site' })`
  background: ${(props) => props.theme.background};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  transition: background 0.5s ease;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

const NavLogo = styled(Link)`
  color: ${(props) => props.theme.text};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
`;

const NavItem = styled.li`
  height: 80px;
  display: flex; 
  align-items: center;
  justify-content: center;
`;

const NavLinks = styled.a`
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #ccc;
    border-bottom: 3px solid ${(props) => props.theme.text};
  }
`;

const ThemeToggleButton = styled.button`
    background: transparent;
    border: none;
    color: ${(props) => props.theme.text};
    font-size: 1.5rem;
    cursor: pointer;
    margin-left: 20px;
    transition: color 0.3s ease;
    display: flex; 
    align-items: center; 

    &:hover {
        color: #bbb;
    }
`;

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo href="/" aria-label="Página inicial Nexus Labs IA">Nexus Labs IA</NavLogo>
        <NavMenu>
          <NavItem>
            <NavLinks href="#services">Serviços</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks href="#pricing">Planos</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks href="#contact">Contato</NavLinks>
          </NavItem>
          <NavItem>
            <ThemeToggleButton onClick={toggleTheme} aria-label="Alternar tema">
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </ThemeToggleButton>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}