import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../../../shared/ui/Button";
import Form from "../../../shared/ui/Form";
import Input from "../../../shared/ui/Input";
import FormRow from "../../../shared/ui/FormRow";
import { Title, Subtitle } from "../../../shared/ui/Title";

interface ResetFormData {
  password: string;
  confirmPassword: string;
}

interface ResetFormProps {
  onSuccess: () => void;
}

function ResetForm({ onSuccess }: ResetFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ResetFormData>();
  const password = watch("password");

  // Define the onSubmit handler with type
  const onSubmit: SubmitHandler<ResetFormData> = async (data) => {
    try {
      // Call API to reset password
      console.log("Password reset successfully", data);
      onSuccess();
    } catch (error) {
      console.error("Error resetting password:", error);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <Title>Reset password</Title>
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
              maxLength: {
                value: 20,
                message: "Password cannot exceed 20 characters",
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
    </div>
  );
}

export default ResetForm;
