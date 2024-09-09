import { useState } from "react";
import Logo from "../ui/Logo";
import Container from "../ui/Container";
import ImageContainer from "../ui/ImageContainer";
import StyledImage from "../ui/StyledImage";
import FormRow from "../ui/FormRow";
import ResetForm from "../features/authentication/ResetPasswordForm";
import ResetSuccess from "../features/authentication/ResetPasswordSuccess";

function PasswordReset() {
  const [isResetSuccessful, setIsResetSuccessful] = useState<boolean>(false);

  const handleSuccess = () => {
    setIsResetSuccessful(true);
  };

  return (
    <Container>
      <ImageContainer>
        <StyledImage src="/Assets/images/seller.png" alt="Farmer" />
      </ImageContainer>
      <FormRow>
        <Logo />
        {isResetSuccessful ? (
          <ResetSuccess />
        ) : (
          <ResetForm onSuccess={handleSuccess} />
        )}
      </FormRow>
    </Container>
  );
}

export default PasswordReset;
