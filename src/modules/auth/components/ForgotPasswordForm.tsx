import { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import Form from "../../../shared/ui/Form";
import Input from "../../../shared/ui/Input";
import Button from "../../../shared/ui/Button";
import FormRowVertical from "../../../shared/ui/FormRowVertical";
import { toast } from "react-hot-toast";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import SpinnerMini from "@shared/ui/SpinnerMini";

interface ApiResponse {
  message: string;
}

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, seLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    seLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        { email }
      );
      toast.success(response.data.message || "Password reset link sent!");
      setEmail(""); // Clear input after success
      navigate("/reset-link-sent");
    } catch (error: unknown) {
      const axiosError = error as AxiosError<ApiResponse>;
      toast.error(
        axiosError.response?.data?.message ||
          "Failed to send reset link. Try again."
      );
    }finally {
      seLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Enter your registered email address">
        <StyledInput
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button type="submit" disabled={loading}>
          {loading ? <SpinnerMini/> : 'Send Password Reset Link'}
        </Button>
      </FormRowVertical>
    </Form>
  );
};

export default ForgotPasswordForm;

const StyledInput = styled(Input)`
  background-color: var(--color-grey-50);
`;
