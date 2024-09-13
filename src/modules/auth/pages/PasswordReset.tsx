import { useState } from "react";
import Logo from "../../../shared/ui/Logo";
import Container from "../../../shared/ui/Container";
import ImageContainer from "../../seller/ui/ImageContainer";
import StyledImage from "../../seller/ui/StyledImage";
import FormRow from "../../../shared/ui/FormRow";
import ResetForm from "../components/ResetPasswordForm";
import ResetSuccess from "../components/ResetPasswordSuccess";

function PasswordReset() {
  const [isResetSuccessful, setIsResetSuccessful] = useState<boolean>(false);

  const handleSuccess = () => {
    setIsResetSuccessful(true);
  };

  return (
    <Container>
      <ImageContainer>
        <StyledImage src="/src/assets/images/seller.png" alt="Farmer" />
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
