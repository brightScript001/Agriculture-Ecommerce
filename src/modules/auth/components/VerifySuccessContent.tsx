import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Subtitle, Title } from "@shared/ui/Title";
import Button from "@shared/ui/Button";
import { AppState } from "store";
interface VerificationSuccessContentProps {
  onLoginRedirect: () => void;
}

export function VerificationSuccessContent({
  onLoginRedirect,
}: VerificationSuccessContentProps) {
  const [counter, setCounter] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    if (counter === 0) {
      clearInterval(timer);
      onLoginRedirect();
    }

    return () => clearInterval(timer);
  }, [counter, onLoginRedirect]);

  const user = useSelector((store: AppState) => store.user.firstName);

  return (
    <Container>
      <Title>Email Verification Successful</Title>
      <Subtitle>Hi {user}</Subtitle>
      <Subtitle>
        Your email has been verified successfully. We will be redirecting you to
        login to your dashboard and start selling your farm products.
      </Subtitle>
      <Subtitle>
        Redirecting in <span>{counter} seconds...</span>
      </Subtitle>
      <Subtitle>
        You have not been redirected yet? No worries! Simply click the button
        below to log in to your account.
      </Subtitle>
      <Button size="large" onClick={onLoginRedirect}>
        Login
      </Button>
    </Container>
  );
}

const Container = styled.div`
  max-width: 37.5rem;
  margin-left: 1.875rem;
`;
