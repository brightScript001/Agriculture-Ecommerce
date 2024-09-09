import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = styled.input<InputProps>`
  background-color: var(--color-grey-0);
  padding: 1rem;
  font-size: var(--font-size-sm);
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  color: var(--color-grey-700);
  outline: none;

  &:focus {
    border-color: var(--color-green-600);
    box-shadow: 0 0 0 3px var(--color-green-200);
  }
`;

export default Input;
