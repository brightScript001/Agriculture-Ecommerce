import { Link } from "react-router-dom";
import styled from "styled-components";
import FormContainer from "@shared/ui/FormContainer";
import Logo from "@shared/ui/Logo";
import { Subtitle, Title } from "@shared/ui/Title";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import { AuthLayout } from "../components/AuthLayout";

export const ForgotPassword: React.FC = () => {
  return (
    <AuthLayout
      imageSrc="/src/assets/images/seller.png"
      imageAlt="seller illustration"
    >
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
    </AuthLayout>
  );
};

const StyledLink = styled(Link)`
  color: var(--color-green-800);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
