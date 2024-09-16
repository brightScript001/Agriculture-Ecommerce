import styled from "styled-components";
import Button from "../../../shared/ui/Button";
import { Subtitle, Title } from "../../../shared/ui/Title";
import { useSelector } from "react-redux";
import { AppState } from "../../../store";

interface VerifyEmailContentProps {
  onRequestVerification: () => void;
}

const Container = styled.div`
  max-width: 37.5rem;
  margin-left: 1.875rem;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Span = styled.span`
  font-weight: 600;
`;

export function VerifyEmailContent({
  onRequestVerification,
}: VerifyEmailContentProps) {
  const user = useSelector((store: AppState) => store.user.firstName);
  return (
    <Container>
      <Title>Verify Your Email</Title>
      <Subtitle>
        <Span>Hi {user}, </Span>
        <br /> We're thrilled to welcome you to the Onefarm Tech community! To
        access all the amazing features waiting for you, simply verify your
        email address. We just sent a verification link straight to your inbox -
        (Check your Spam folder just in case).
      </Subtitle>
      <Subtitle>
        <Span>Having trouble finding the email? </Span>
        <br /> No worries! Simply click the button below to request a new
        verification link.
      </Subtitle>

      <Button size="large" onClick={onRequestVerification}>
        Request Verification Link
      </Button>
    </Container>
  );
}
