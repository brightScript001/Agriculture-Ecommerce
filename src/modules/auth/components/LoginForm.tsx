import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Button from "../../../shared/ui/Button";
import Form from "../../../shared/ui/Form";
import Input from "../../../shared/ui/Input";
import FormRow from "../../../shared/ui/FormRow";
import StyledSelect from "../../seller/ui/StyledSelect";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { setRole } from "../../core/states/authSlice";
import { useNavigate } from "react-router-dom";

interface LoginFormData {
  role: string;
  email: string;
  password: string;
}

const StyledInput = styled(Input)`
  background-color: var(--color-grey-50);
`;

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormData>();

  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Log in");

  const onSubmit: SubmitHandler<LoginFormData> = (data: LoginFormData) => {
    if (!data.email || !data.password) {
      console.log("Form missing email or password");
      return;
    }

    if (!data.role) {
      toast.error("Please select a role to continue");
      return;
    }

    dispatch(setRole(data.role));
    setIsLoading(true);
    setButtonText("Loading...");

    console.log("Form Submitted:", data);

    setTimeout(() => {
      setIsLoading(false);
      setButtonText("Log in");

      navigate(`/${data.role}/dashboard`);
    }, 1000);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Role" error={errors.role?.message}>
        <Controller
          name="role"
          control={control}
          defaultValue=""
          rules={{ required: "Role is required" }}
          render={({ field }) => (
            <StyledSelect {...field} id="role" disabled={isLoading}>
              <option value="">Select role</option>
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </StyledSelect>
          )}
        />
      </FormRow>

      <FormRow label="Email address" error={errors.email?.message}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Invalid email address",
            },
          }}
          render={({ field }) => (
            <StyledInput
              type="email"
              id="email"
              autoComplete="username"
              disabled={isLoading}
              {...field}
            />
          )}
        />
      </FormRow>

      <FormRow label="Password" error={errors.password?.message}>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{ required: "Password is required" }}
          render={({ field }) => (
            <StyledInput
              type="password"
              id="password"
              autoComplete="current-password"
              disabled={isLoading}
              {...field}
            />
          )}
        />
      </FormRow>

      <FormRow>
        <Button disabled={isLoading}>{buttonText}</Button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
