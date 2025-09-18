import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../../context/ThemeContext';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  z-index: 999;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  transition: all 0.5s ease;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 480px) {
    padding: 0 16px;
  }
`;

const NavLogo = styled.a`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${(props) => props.theme.text};
  text-decoration: none;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    color: ${(props) => props.theme.text};
    
    &:hover {
      color: #007bff;
    }

    @media screen and (max-width: 480px) {
      font-size: 1.5rem;
    }
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 80px;
`;

const NavLink = styled.a`
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.background};
    position: absolute;
    top: 0;
    left: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
    width: 100%;
    height: 100vh;
    transition: all 0.5s ease-in-out;
    opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
    z-index: 998;
  }
`;

const MobileMenuItem = styled.li`
  margin-bottom: 2rem;
  list-style: none;
`;

const MobileNavLink = styled.a`
  color: ${(props) => props.theme.text};
  font-size: 1.5rem;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  color: ${(props) => props.theme.text};
  padding: 0 1rem;
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavbarContainer>
        <NavLogo href="/">Nexus Labs</NavLogo>
        
        <MobileIcon onClick={toggleMenu} theme={theme}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>

        <NavMenu>
          <NavItem><NavLink href="#services">Serviços</NavLink></NavItem>
          <NavItem><NavLink href="#pricing">Planos</NavLink></NavItem>
          <NavItem><NavLink href="#contact">Contato</NavLink></NavItem>
          <NavItem>
            <IconWrapper onClick={toggleTheme} theme={theme}>
              {theme.background === '#121212' ? <FaSun /> : <FaMoon />}
            </IconWrapper>
          </NavItem>
        </NavMenu>
      </NavbarContainer>

      <MobileMenu $isOpen={isOpen} theme={theme}>
        <MobileMenuItem>
          <MobileNavLink href="#services" onClick={toggleMenu}>Serviços</MobileNavLink>
        </MobileMenuItem>
        <MobileMenuItem>
          <MobileNavLink href="#pricing" onClick={toggleMenu}>Planos</MobileNavLink>
        </MobileMenuItem>
        <MobileMenuItem>
          <MobileNavLink href="#contact" onClick={toggleMenu}>Contato</MobileNavLink>
        </MobileMenuItem>
        <MobileMenuItem>
          <MobileNavLink onClick={() => { toggleTheme(); toggleMenu(); }}>
            {theme.background === '#121212' ? <FaSun /> : <FaMoon />}
          </MobileNavLink>
        </MobileMenuItem>
      </MobileMenu>
    </>
  );
}