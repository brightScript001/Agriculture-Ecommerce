import { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import Form from "../../../shared/ui/Form";
import Input from "../../../shared/ui/Input";
import Button from "../../../shared/ui/Button";
import FormRowVertical from "../../../shared/ui/FormRowVertical";

interface ForgotPasswordFormProps {
  onSendEmail: (email: string) => void;
}

const StyledInput = styled(Input)`
  background-color: var(--color-grey-50);
`;

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({
  onSendEmail,
}) => {
  const [email, setEmail] = useState<string>("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSendEmail(email);
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
        <Button type="submit">Send Password Reset Link</Button>
      </FormRowVertical>
    </Form>
  );
};

export default ForgotPasswordForm;
