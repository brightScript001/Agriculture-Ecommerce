import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = styled.input<InputProps>`
  padding: 0.75rem;
  font-size: var(--font-size-sm);
  border: none;
  border-radius: var(--border-radius-sm);
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;

  &:focus {
    border-color: var(--color-green-600);
    box-shadow: 0 0 5px rgba(0, 128, 0, 0.3);
    outline: none;
    transform: scale(1.02);
  }
`;

export default Input;
