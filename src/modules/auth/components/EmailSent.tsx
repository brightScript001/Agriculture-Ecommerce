import { useState } from "react";
import { useSelector } from "react-redux";
import axios, { AxiosError } from "axios";
import Button from "@shared/ui/Button";
import { AppState } from "store";

interface ApiResponse {
  message: string;
}

const EmailSent: React.FC = () => {
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState<string>("");
  const email = useSelector((state: AppState) => state.user.email);

  const handleResendLinkClick = async (): Promise<void> => {
    if (!email) {
      setMessage("No email found. Please log in again.");
      return;
    }

    setIsSending(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/resend-link",
        { email }
      );

      setMessage(response.data.message);
    } catch (error: unknown) {
      // Handle error responses (e.g., email not found, server error)
      const axiosError = error as AxiosError<ApiResponse>;
      setMessage(
        axiosError.response?.data?.message ||
          "Failed to resend the password reset link."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="email-sent-container">
      {message && <p>{message}</p>}

      <Button onClick={handleResendLinkClick} disabled={isSending}>
        {isSending ? "Sending..." : "Resend Password Reset Link"}
      </Button>
    </div>
  );
};

export default EmailSent;
