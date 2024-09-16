import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import Logo from "../../../shared/ui/Logo";
import Container from "../../../shared/ui/Container";
import ImageContainer from "../../seller/ui/ImageContainer";
import StyledImage from "../../seller/ui/StyledImage";
import FormContainer from "../../../shared/ui/FormContainer";
import { Title, Subtitle } from "../../../shared/ui/Title";

const StyledLink = styled(Link)`
  color: var(--color-green-800);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// const Wrapper = styled.div`
//   margin-left: 1.875rem;
// `;

const Login: React.FC = () => {
  return (
    <Container>
      <ImageContainer>
        <StyledImage src="/src/assets/images/buyer.png" alt="Buyer" />
      </ImageContainer>
      <FormContainer>
        <Logo />
        <Title>Login to your account</Title>
        <Subtitle>
          Don’t have an account?{" "}
          <StyledLink to="/homepage">Sign up here</StyledLink>
        </Subtitle>
        <LoginForm />

        <Subtitle>
          Forgot password?
          <StyledLink to="/forgot-password">Click here</StyledLink>
        </Subtitle>
      </FormContainer>
    </Container>
  );
};

export default Login;
