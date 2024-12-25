import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../shared/ui/Button";
import Form from "../../../shared/ui/Form";
import FormRow from "../../../shared/ui/FormRow";
import Input from "../../../shared/ui/Input";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const createUser = async (data: FormValues & { accountType: string }) => {
  const response = await fetch("http://localhost:5000/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create account");
  }

  return response.json();
};

function SignupForm() {
  const navigate = useNavigate();
  const location = useLocation();

  const accountType = location.state?.accountType as "buyer" | "seller";
  console.log("Received accountType:", accountType);

  // Redirect if `accountType` is missing
  React.useEffect(() => {
    if (!accountType) {
      console.log("Account type is missing, redirecting to homepage...");
      navigate("/homepage");
    }
  }, [accountType, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormValues>();

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      navigate("/verify-email");
    },
    onError: (error: Error) => {
      console.error("Error:", error.message);
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    mutation.mutate({ ...data, accountType });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="First Name" error={errors.firstName?.message}>
        <StyledInput
          type="text"
          id="firstName"
          {...register("firstName", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Last Name" error={errors.lastName?.message}>
        <StyledInput
          type="text"
          id="lastName"
          {...register("lastName", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Email Address" error={errors.email?.message}>
        <StyledInput
          type="email"
          id="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow label="Password" error={errors.password?.message}>
        <StyledInput
          type="password"
          id="password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Re-enter Password"
        error={errors.confirmPassword?.message}
      >
        <StyledInput
          type="password"
          id="passwordConfirm"
          {...register("confirmPassword", {
            required: "This field is required",
            validate: (value) =>
              value === getValues("password") || "Passwords do not match",
          })}
        />
      </FormRow>

      <Button type="submit" disabled={mutation.status === "pending"}>
        {mutation.status === "pending"
          ? "Creating Account..."
          : "Create Account"}
      </Button>
    </Form>
  );
}

export default SignupForm;

const StyledInput = styled(Input)`
  background-color: var(--color-grey-50);
`;
