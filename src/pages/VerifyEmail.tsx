import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { VerifyEmailContent } from "../features/authentication/VerifyEmailContent";
import { VerificationSuccessContent } from "../features/authentication/VerifySuccessContent";
import Logo from "../ui/Logo";
import ImageContainer from "../ui/ImageContainer";
// import Container from "../ui/Container";

const StyledImage = styled.img`
  object-fit: cover;
  max-height: 100vh;
  width: 100%;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

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
    <>
      <ImageContainer>
        <StyledImage src="/Assets/images/verify-email.png" alt="Verify Email" />
      </ImageContainer>
      <FormContainer>
        <Logo />
        {!isVerificationComplete ? (
          <VerifyEmailContent
            onRequestVerification={handleRequestVerification}
          />
        ) : (
          <VerificationSuccessContent onLoginRedirect={handleLoginRedirect} />
        )}
      </FormContainer>
    </>
  );
}

export default VerifyEmail;
