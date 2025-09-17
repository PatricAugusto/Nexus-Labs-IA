import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../context/ThemeContext';

const ContactContainer = styled.section.attrs({ id: 'contact' })`
  padding: 80px 24px;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  text-align: center;
  transition: background 0.5s ease, color 0.5s ease;
`;

const ContactTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 16px;
`;

const ContactSubtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FormCard = styled.div`
  background: ${(props) => props.theme.glassBackground};
  border: 1px solid ${(props) => props.theme.glassBorder};
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 10px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormLabel = styled.label`
  font-size: 1.1rem;
  text-align: left;
`;

const FormInput = styled.input`
  padding: 12px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  background: ${(props) => props.theme.inputBackground || '#fff'};
  color: ${(props) => props.theme.text};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const FormTextArea = styled.textarea`
  padding: 12px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  background: ${(props) => props.theme.inputBackground || '#fff'};
  color: ${(props) => props.theme.text};
  transition: all 0.3s ease;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const FormButton = styled.button`
  padding: 12px 24px;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export default function ContactSection() {
  const { theme } = useTheme();

  return (
    <ContactContainer>
      <ContactTitle>Comece a Construir o Futuro do seu Negócio</ContactTitle>
      <ContactSubtitle>
        Nossa equipe de especialistas está pronta para transformar suas ideias em soluções digitais que geram resultados. Fale conosco!
      </ContactSubtitle>
      <FormCard>
        <StyledForm
          action="https://formspree.io/f/xvgbjwra" 
          method="POST"
        >
          <FormLabel htmlFor="name">Nome</FormLabel>
          <FormInput
            type="text"
            id="name"
            name="name" 
            placeholder="Seu nome"
            required
          />
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput
            type="email"
            id="email"
            name="email" 
            placeholder="seu@email.com"
            required
          />
          <FormLabel htmlFor="message">Mensagem</FormLabel>
          <FormTextArea
            id="message"
            name="message" 
            rows="5"
            placeholder="Escreva sua mensagem aqui..."
            required
          />
          <FormButton type="submit">Enviar Mensagem</FormButton>
        </StyledForm>
      </FormCard>
    </ContactContainer>
  );
}