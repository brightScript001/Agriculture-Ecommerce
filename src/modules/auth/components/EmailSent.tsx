import styled from "styled-components";
import Button from "../../../shared/ui/Button";
import { useState } from "react";
import SpinnerMini from "../../../shared/ui/SpinnerMini";
import { Subtitle, Title } from "../../../shared/ui/Title";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 37.5rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    margin: 1rem;
  }
`;

const StyledTitle = styled(Title)`
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const StyledButton = styled(Button)`
  align-self: flex-start;
`;

const EmailSent: React.FC = () => {
  const [isSending, setIsSending] = useState<boolean>(false);

  const handleResendLinkClick = (): void => {
    setIsSending(true);
    console.log("Resend password reset link");
    // Call API logic here
    setIsSending(false);
  };

  return (
    <Container>
      <StyledTitle>We sent you an email</StyledTitle>
      <Subtitle>
        We've sent a secure link to your email address. Just click the link in
        the email to create a new, strong password.
      </Subtitle>
      <Subtitle>
        Didn't see the email?
        <br />
        No worries, it happens! Check your Spam or refresh your email account.
        If that doesn’t work, click the button below to request a new
        verification link, and we will send it again.
      </Subtitle>

      {isSending ? (
        <SpinnerMini />
      ) : (
        <StyledButton
          size="large"
          onClick={handleResendLinkClick}
          aria-label="Resend password reset link"
          disabled={isSending}
        >
          Resend link
        </StyledButton>
      )}
    </Container>
  );
};

export default EmailSent;
