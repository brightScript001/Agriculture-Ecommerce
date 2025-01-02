import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { VerifyEmailContent } from "../components/VerifyEmailContent";
import { VerificationSuccessContent } from "../components/VerifySuccessContent";
import Logo from "../../../shared/ui/Logo";
import ImageContainer from "../../seller/ui/ImageContainer";
import Container from "../../../shared/ui/Container";
import axios from "axios";

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

const VerifyEmail: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isVerificationComplete, setIsVerificationComplete] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const token = searchParams.get("token");

  // Handle email verification
  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setError("Verification token is missing.");
        return;
      }

      try {
        await axios.post("/api/auth/verify-email", { token });
        setIsVerificationComplete(true);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || "Failed to verify email.");
        } else {
          setError("An unknown error occurred.");
        }
      }
    };

    verifyEmail();
  }, [token]);

  // Resend verification email
  const handleRequestVerification = async () => {
    try {
      await axios.post("/api/auth/resend-verification-email");
      setError(null);
      alert("A new verification email has been sent to your inbox.");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.message || "Failed to resend verification email."
        );
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  // Redirect to login
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

        {error ? (
          <div style={{ color: "red", marginTop: "1rem" }}>{error}</div>
        ) : null}

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
};

export default VerifyEmail;
