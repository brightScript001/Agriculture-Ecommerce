import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom"; // Already imported
import styled from "styled-components";
import Button from "../../../shared/ui/Button";
import Form from "../../../shared/ui/Form";
import FormRow from "../../../shared/ui/FormRow";
import Input from "../../../shared/ui/Input";
import StyledSelect from "../../seller/ui/StyledSelect";
import { useDispatch } from "react-redux";
import { createUser } from "../../core/states/userSlice";
import SpinnerMini from "../../../shared/ui/SpinnerMini";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
}

const createUserRequest = async (data: FormValues) => {
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
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm<FormValues>();

  const mutation = useMutation({
    mutationFn: createUserRequest,
    onSuccess: () => {
      navigate("/verify-email");
    },
    onError: (error: Error) => {
      console.error("Error:", error.message);
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { firstName, lastName, email, password } = data;
    dispatch(createUser({ firstName, lastName, email, password }));

    // Make API call
    mutation.mutate(data);
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

      <Button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? <SpinnerMini /> : "Create Account"}
      </Button>
    </Form>
  );
}

export default SignupForm;

const StyledInput = styled(Input)`
  background-color: var(--color-grey-50);
`;
