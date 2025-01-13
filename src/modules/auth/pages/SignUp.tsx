import { Link } from "react-router-dom";
import styled from "styled-components";
import SignupForm from "../components/SignUpForm";
import Logo from "../../../shared/ui/Logo";
import FormContainer from "../../../shared/ui/FormContainer";
import { Title, Subtitle } from "../../../shared/ui/Title";
import { AuthLayout } from "../components/AuthLayout";

const Signup: React.FC = () => {
  return (
    <AuthLayout
      imageSrc="/src/assets/images/seller.png"
      imageAlt="seller illustration"
    >
      <FormContainer>
        <Logo />
        <Title>Create an account</Title>
        <Subtitle>
          Already have an account?{" "}
          <StyledLink to="/login">Login here</StyledLink>
        </Subtitle>
        <SignupForm />
      </FormContainer>
    </AuthLayout>
  );
};

export default Signup;

const StyledLink = styled(Link)`
  color: var(--color-green-800);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
