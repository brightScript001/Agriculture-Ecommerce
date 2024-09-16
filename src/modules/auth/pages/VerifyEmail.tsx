import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { VerifyEmailContent } from "../components/VerifyEmailContent";
import { VerificationSuccessContent } from "../components/VerifySuccessContent";
import Logo from "../../../shared/ui/Logo";
import ImageContainer from "../../seller/ui/ImageContainer";
import Container from "../../../shared/ui/Container";

const StyledImage = styled.img`
  object-fit: cover;
  max-height: 100vh;
  width: 100%;
`;

const Wrapper = styled.div`
  margin-left: 1.875rem;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const FormContainer = styled.div``;

function VerifyEmail() {
  const navigate = useNavigate();
  const [isVerificationComplete, setIsVerificationComplete] = useState(false);

  const handleRequestVerification = () => {
    console.log("Requesting new verification link...");
    // TODO: Backend to verify user email not implemented yet....
    setIsVerificationComplete(true);
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <Container>
      <ImageContainer>
        <StyledImage
          src="/src/assets/images/verify-email.png"
          alt="Verify Email"
        />
      </ImageContainer>
      <FormContainer>
        <Wrapper>
          <Logo />
        </Wrapper>

        {!isVerificationComplete ? (
          <VerifyEmailContent
            onRequestVerification={handleRequestVerification}
          />
        ) : (
          <VerificationSuccessContent onLoginRedirect={handleLoginRedirect} />
        )}
      </FormContainer>
    </Container>
  );
}

export default VerifyEmail;
