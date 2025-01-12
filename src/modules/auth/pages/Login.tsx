import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import Logo from "../../../shared/ui/Logo";
import FormContainer from "../../../shared/ui/FormContainer";
import { Title, Subtitle } from "@shared/ui/Title";
import { AuthLayout } from "../components/AuthLayout";

const Login: React.FC = () => {
  return (
    <AuthLayout
      imageSrc="/src/assets/images/buyer.png"
      imageAlt="buyer image illustration"
    >
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
    </AuthLayout>
  );
};

export default Login;

const StyledLink = styled(Link)`
  color: var(--color-green-800);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
