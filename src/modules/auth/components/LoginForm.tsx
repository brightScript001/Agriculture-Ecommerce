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
import { setRole } from "@core/states/authSlice";
import { useNavigate } from "react-router-dom";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

interface LoginFormData {
  role: string;
  email: string;
  password: string;
}

interface LoginResponse {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  createdAt: string;
  avatar: string;
  token: string;
}

const loginUser = async (data: LoginFormData): Promise<LoginResponse> => {
  const response = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Invalid credentials or server error");
  }

  return response.json();
};

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormData>();
  const [buttonText, setButtonText] = useState<string>("Log in");

  const mutationOptions: UseMutationOptions<
    LoginResponse,
    Error,
    LoginFormData
  > = {
    mutationFn: loginUser,
    onMutate: () => {
      setButtonText("Loading...");
    },
    onSuccess: (data: LoginResponse) => {
      // Store the token and role
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      // Dispatch user role to store for further usage
      dispatch(setRole({ role: data.role, user: data, token: data.token }));

      navigate(`/${data.role}/dashboard`);
    },
    onError: (error: Error) => {
      setButtonText("Log in");
      toast.error(error.message || "Login failed. Please try again.");
    },
  };

  const mutation = useMutation(mutationOptions);

  const onSubmit: SubmitHandler<LoginFormData> = (data: LoginFormData) => {
    if (!data.role) {
      toast.error("Please select a role to continue");
      return;
    }

    mutation.mutate(data); // Trigger the login mutation
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
            <StyledSelect {...field} id="role" disabled={mutation.isPending}>
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
              disabled={mutation.isPending}
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
              disabled={mutation.isPending}
              {...field}
            />
          )}
        />
      </FormRow>

      <FormRow>
        <Button disabled={mutation.isPending}>{buttonText}</Button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;

const StyledInput = styled(Input)`
  background-color: var(--color-grey-50);
`;
