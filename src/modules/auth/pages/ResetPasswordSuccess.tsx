import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../shared/ui/Button";
import { Title, Subtitle } from "@shared/ui/Title";
import { AuthLayout } from "../components/AuthLayout";
import FormContainer from "@shared/ui/FormContainer";

export function ResetPasswordSuccess() {
  const [counter, setCounter] = useState<number>(30);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    if (counter === 0) {
      clearInterval(timer);
      navigate("/login");
    }

    return () => clearInterval(timer);
  }, [counter, navigate]);

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <AuthLayout
      imageSrc="/src/assets/images/buyer.png"
      imageAlt="buyer illustration"
    >
      <FormContainer>
        <Title>Password reset successful</Title>
        <Subtitle>
          Your password has been reset successfully. We will redirect you to
          login to your account.
        </Subtitle>
        <Subtitle>Redirecting in {counter}s</Subtitle>
        <Subtitle>
          If redirection does not work, click the button below to login to your
          account.
        </Subtitle>
        <Button onClick={handleLoginClick}>Login Here</Button>
      </FormContainer>
    </AuthLayout>
  );
}
