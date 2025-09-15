// src/components/Navbar/Navbar.js

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
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
  color: #fff;
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
`;

const NavLinks = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #ccc;
    border-bottom: 3px solid #fff;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo href="/">Nexus Labs IA</NavLogo>
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
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}