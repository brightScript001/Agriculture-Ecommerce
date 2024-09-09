import styled from "styled-components";
import Button from "../../ui/Button";
import { useState } from "react";
import SpinnerMini from "../../ui/SpinnerMini";
import { Subtitle, Title } from "../../ui/Title";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  max-width: 37.5rem;
  margin: 0 auto;
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
      <Title>We sent you an email</Title>
      <Subtitle>
        We've sent a secure link to your email address. Just click the link in
        the email to create a new, strong password.
      </Subtitle>
      <Subtitle>
        Didn't see the email?
        <br />
        <br />
        No worries, it happens! Check your Spam or refresh your email account.
        If that doesn’t work, click the button below to request a new
        verification link, and we will send it again.
      </Subtitle>

      {isSending ? (
        <SpinnerMini />
      ) : (
        <StyledButton
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
