import { useState, ChangeEvent, FormEvent } from "react";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FormRowVertical from "../../ui/FormRowVertical";

interface ForgotPasswordFormProps {
  onSendEmail: (email: string) => void;
}

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
      <FormRowVertical>
        <Input
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
