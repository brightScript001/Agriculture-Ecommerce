import { useForm } from "react-hook-form";
import Button from "../../../shared/ui/Button";
import Form from "../../../shared/ui/Form";
import FormRow from "../../../shared/ui/FormRow";
import Input from "../../../shared/ui/Input";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../../store";
import { createUser } from "../../core/states/userSlice";
import { useDispatch } from "react-redux";
import styled from "styled-components";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const StyledInput = styled(Input)`
  background-color: var(--color-grey-50);
`;

function SignupForm() {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
    getValues,
  } = useForm<FormValues>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { firstName, lastName, email, password } = watch();

  function onSubmit() {
    if (!firstName || !lastName || !email || !password) return;
    dispatch(createUser(firstName, lastName, email, password));
    navigate("/verify-email");
  }

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
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Re-enter password"
        error={errors.confirmPassword?.message}
      >
        <StyledInput
          type="password"
          id="passwordConfirm"
          {...register("confirmPassword", {
            required: "This field is required",
            validate: (value) =>
              value === getValues("password") || "Passwords need to match",
          })}
        />
      </FormRow>

      <Button type="submit">Create Account</Button>
    </Form>
  );
}

export default SignupForm;
