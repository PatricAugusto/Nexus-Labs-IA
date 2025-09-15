import styled from 'styled-components';

const ContactContainer = styled.section.attrs({ id: 'contact' })`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 24px;
  background: linear-gradient(135deg, #000, #111);
  color: #fff;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3.5rem);
  margin-bottom: 20px;
`;

const ContactSubtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  max-width: 700px;
  margin-bottom: 60px;
  color: #bbb;
`;

const FormCard = styled.div`
  padding: 40px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  font-size: 1rem;
  margin-bottom: 8px;
  color: #ccc;
`;

const StyledInput = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  outline: none;
  
  &:focus {
    border-color: #fff;
  }
`;

const StyledTextArea = styled.textarea`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  outline: none;
  resize: vertical;
  min-height: 120px;

  &:focus {
    border-color: #fff;
  }
`;

const SubmitButton = styled.button`
  background-color: #fff;
  color: #000;
  padding: 12px 32px;
  font-size: 1.2rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-top: 20px;
  
  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-2px);
  }
`;

export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulário enviado! Entraremos em contato em breve.');
  };

  return (
    <ContactContainer>
      <ContactTitle>Comece a Construir o Futuro do seu Negócio</ContactTitle>
      <ContactSubtitle>
        Nossa equipe de especialistas está pronta para transformar suas ideias em soluções digitais que geram resultados. Fale conosco!
      </ContactSubtitle>
      <FormCard>
        <StyledForm onSubmit={handleSubmit}>
          <InputGroup>
            <StyledLabel htmlFor="name">Nome</StyledLabel>
            <StyledInput type="text" id="name" name="name" required />
          </InputGroup>
          <InputGroup>
            <StyledLabel htmlFor="email">E-mail</StyledLabel>
            <StyledInput type="email" id="email" name="email" required />
          </InputGroup>
          <InputGroup>
            <StyledLabel htmlFor="message">Mensagem</StyledLabel>
            <StyledTextArea id="message" name="message" required />
          </InputGroup>
          <SubmitButton type="submit">Enviar Mensagem</SubmitButton>
        </StyledForm>
      </FormCard>
    </ContactContainer>
  );
}