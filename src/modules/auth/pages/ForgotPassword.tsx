import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "@shared/ui/Container";
import ImageContainer from "@modules/seller/ui/ImageContainer";
import StyledImage from "@modules/seller/ui/StyledImage";
import FormContainer from "@shared/ui/FormContainer";
import Logo from "@shared/ui/Logo";
import { Subtitle, Title } from "@shared/ui/Title";
import ForgotPasswordForm from "../components/ForgotPasswordForm";

const ForgotPassword: React.FC = () => {
  return (
    <Container>
      <ImageContainer>
        <StyledImage src="/src/assets/images/seller.png" alt="Farmer" />
      </ImageContainer>
      <FormContainer>
        <Logo />
        <Title>Forgot Password</Title>
        <Subtitle>
          We will help you access your account again in a few steps.
        </Subtitle>
        <ForgotPasswordForm />
        <Subtitle>
          return to
          <StyledLink to="/login"> login </StyledLink>
          page?
        </Subtitle>
      </FormContainer>
    </Container>
  );
};

export default ForgotPassword;

const StyledLink = styled(Link)`
  color: var(--color-green-800);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
