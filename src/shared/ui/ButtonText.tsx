import styled from "styled-components";

interface ButtonTextProps {
  color?: string;
  fontWeight?: number;
  fontSize?: string;
}

const ButtonText = styled.button<ButtonTextProps>`
  color: ${({ color }) => color || "var(--color-grey-500)"};
  font-weight: ${({ fontWeight }) => fontWeight || 500};
  font-size: ${({ fontSize }) => fontSize || "inherit"};
  text-align: center;
  transition: all 0.3s;
  background: none;
  border: none;
  cursor: pointer;

  &:hover,
  &:active {
    color: var(--color-grey-700);
  }
`;

export default ButtonText;
