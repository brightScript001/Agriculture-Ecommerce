import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import SignupForm from "../components/SignUpForm";
import Container from "../../../shared/ui/Container";
import Logo from "../../../shared/ui/Logo";
import StyledImage from "../../seller/ui/StyledImage";
import ImageContainer from "../../seller/ui/ImageContainer";
import FormContainer from "../../../shared/ui/FormContainer";
import { Title, Subtitle } from "../../../shared/ui/Title";
import { useMemo } from "react";

const StyledLink = styled(Link)`
  color: var(--color-green-800);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

interface LocationState {
  accountType: "buyer" | "seller";
}

const Signup: React.FC = () => {
  const location = useLocation();
  const state = location.state as LocationState | undefined;
  const accountType = state?.accountType;

  const { imageSrc, altText } = useMemo(() => {
    const isBuyer = accountType === "buyer";
    return {
      imageSrc: isBuyer
        ? "/src/assets/images/buyer.png"
        : "/src/assets/images/seller.png",
      altText: isBuyer ? "Buyer" : "Farmer",
    };
  }, [accountType]);

  return (
    <Container>
      <ImageContainer>
        <StyledImage src={imageSrc} alt={altText} />
      </ImageContainer>
      <FormContainer>
        <Logo />
        <Title>Create an account</Title>
        <Subtitle>
          Already have an account?{" "}
          <StyledLink to="/login">Login here</StyledLink>
        </Subtitle>
        <SignupForm />
      </FormContainer>
    </Container>
  );
};

export default Signup;
