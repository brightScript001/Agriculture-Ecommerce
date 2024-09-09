import { useState } from "react";
import ForgotPasswordForm from "../features/authentication/ForgotPasswordForm";
import EmailSent from "../features/authentication/EmailSent";
import Logo from "../ui/Logo";
import Container from "../ui/Container";
import ImageContainer from "../ui/ImageContainer";
import FormContainer from "../ui/FormContainer";
import StyledImage from "../ui/StyledImage";
import { Subtitle, Title } from "../ui/Title";

const ForgotPassword: React.FC = () => {
  const [emailSent, setEmailSent] = useState<boolean>(false);

  const handleSendEmail = (): void => {
    setEmailSent(true);
  };

  return (
    <Container>
      <ImageContainer>
        <StyledImage src="/Assets/images/seller.png" alt="Farmer" />
      </ImageContainer>
      <FormContainer>
        <Logo />
        {emailSent ? (
          <EmailSent />
        ) : (
          <>
            <Title>Forgot Password</Title>
            <Subtitle>
              We will help you access your account again in a few steps.
            </Subtitle>

            <ForgotPasswordForm onSendEmail={handleSendEmail} />
          </>
        )}
      </FormContainer>
    </Container>
  );
};

export default ForgotPassword;
