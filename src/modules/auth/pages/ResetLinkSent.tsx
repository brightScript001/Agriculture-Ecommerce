import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Button from "@shared/ui/Button";
import { AppState } from "store";
import { AuthLayout } from "../components/AuthLayout";
import { Subtitle, Title } from "@shared/ui/Title";
import FormContainer from "@shared/ui/FormContainer";

export const ResetLinkSent: React.FC = () => {
  const [isSending, setIsSending] = useState(false);
  const email = useSelector((state: AppState) => state.user.email);

  const handleResendLinkClick = async (): Promise<void> => {
    if (!email) return;

    setIsSending(true);

    try {
      await axios.post("http://localhost:5000/api/users/resend-link", {
        email,
      });
    } catch (error) {
      console.error("Failed to resend the password reset link:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <AuthLayout
      imageSrc="/src/assets/images/buyer.png"
      imageAlt="buyer illustration"
    >
      <FormContainer>
        <Title>Password Reset Email Sent</Title>
        <Subtitle>
          We've sent a password reset email to{" "}
          <strong>{email || "your email"}</strong>. Please check your inbox and
          follow the instructions to reset your password.
        </Subtitle>
        <Subtitle>
          If you haven't received the email, you can resend the link.
        </Subtitle>
        <Button onClick={handleResendLinkClick} disabled={isSending}>
          {isSending ? "Sending..." : "Resend Password Reset Link"}
        </Button>
      </FormContainer>
    </AuthLayout>
  );
};
