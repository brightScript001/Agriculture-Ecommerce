import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios, { AxiosError } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@shared/ui/Button";
import Form from "@shared/ui/Form";
import Input from "@shared/ui/Input";
import FormRow from "@shared/ui/FormRow";
import { Title, Subtitle } from "@shared/ui/Title";
import FormContainer from "@shared/ui/FormContainer";
import { AuthLayout } from "../components/AuthLayout";

interface ResetFormData {
  password: string;
  confirmPassword: string;
}

interface ApiResponse {
  message: string;
}

export const ResetPasswordForm = () => {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ResetFormData>();
  const password = watch("password");

  const onSubmit: SubmitHandler<ResetFormData> = async (data) => {
    try {
      const response = await axios.patch<ApiResponse>(
        `http://localhost:5000/api/auth/reset-password/${token}`,
        { password: data.password }
      );
      toast.success(response.data.message || "Password reset successful!");
      navigate("/password-reset-successful");
    } catch (error: unknown) {
      const axiosError = error as AxiosError<ApiResponse>;
      toast.error(
        axiosError.response?.data?.message ||
          "Failed to reset password. Please try again."
      );
    }
  };

  return (
    <AuthLayout
      imageSrc="/src/assets/images/buyer.png"
      imageAlt="buyer illustration"
    >
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormRow>
            <Title>Reset Password</Title>
            <Subtitle>
              Create a strong password to keep your account secure.
            </Subtitle>
          </FormRow>
          <FormRow label="New Password" error={errors.password?.message}>
            <Input
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                pattern: {
                  value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/,
                  message:
                    "Password must include upper and lower case letters, a number, and a special character",
                },
              })}
            />
          </FormRow>
          <FormRow
            label="Confirm Password"
            error={errors.confirmPassword?.message}
          >
            <Input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
          </FormRow>
          <FormRow>
            <Button type="submit">Reset Password</Button>
          </FormRow>
        </Form>
      </FormContainer>
    </AuthLayout>
  );
};
