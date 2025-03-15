import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = styled.input<InputProps>`
  padding: 0.75rem;
  font-size: var(--font-size-sm);
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-sm);
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;

  &:focus {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-sm);
    outline: none;
    transform: scale(1.02);
  }
`;

export default Input;
