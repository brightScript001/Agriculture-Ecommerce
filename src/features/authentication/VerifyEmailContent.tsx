import styled from "styled-components";
import Button from "../../ui/Button";
import { Subtitle, Title } from "../../ui/Title";
import { useSelector } from "react-redux";
import { AppState } from "../../store";

interface VerifyEmailContentProps {
  onRequestVerification: () => void;
}

const Container = styled.div`
  max-width: 37.5rem;
  margin: 0 auto;
  padding: 1.25rem;
`;

export function VerifyEmailContent({
  onRequestVerification,
}: VerifyEmailContentProps) {
  const user = useSelector((store: AppState) => store.user.firstName);
  return (
    <Container>
      <Title>Verify Your Email</Title>
      <Subtitle>Hi {user},</Subtitle>
      <Subtitle>
        We're thrilled to welcome you to the Onefarm Tech community! To access
        all the amazing features waiting for you, simply verify your email
        address. We just sent a verification link straight to your inbox -
        (Check your Spam folder just in case).
        <br />
        Having trouble finding the email?
        <br />
        No worries! Simply click the button below to request a new verification
        link.
      </Subtitle>
      <Button onClick={onRequestVerification}>Request Verification Link</Button>
    </Container>
  );
}
