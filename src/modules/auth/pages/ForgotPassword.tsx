import { useState } from "react";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import EmailSent from "../components/EmailSent";
import Logo from "../../../shared/ui/Logo";
import Container from "../../../shared/ui/Container";
import ImageContainer from "../../seller/ui/ImageContainer";
import FormContainer from "../../../shared/ui/FormContainer";
import StyledImage from "../../seller/ui/StyledImage";
import { Subtitle, Title } from "../../../shared/ui/Title";

const ForgotPassword: React.FC = () => {
  const [emailSent, setEmailSent] = useState<boolean>(false);

  const handleSendEmail = (): void => {
    setEmailSent(true);
  };

  return (
    <Container>
      <ImageContainer>
        <StyledImage src="/src/assets/images/seller.png" alt="Farmer" />
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
