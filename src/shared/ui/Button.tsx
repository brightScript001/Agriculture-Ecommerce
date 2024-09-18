import styled, { css } from "styled-components";

interface ButtonProps {
  size?: keyof typeof sizes;
  variation?: keyof typeof variations;
}

const sizes = {
  small: css`
    font-size: var(--font-size-sm);
    padding: 0.4rem 0.8rem;
    font-weight: 100;
    text-align: center;
  `,
  medium: css`
    font-size: var(--font-size-sm);
    padding: 0.7rem 1.4rem;
    font-weight: 300;
    white-space: nowrap;
  `,
  large: css`
    font-size: var(--font-size-md);
    padding: 0.7rem 2.4rem;
    font-weight: 500;
    min-width: 18.75rem;
    white-space: nowrap;
  `,
};

const variations = {
  primary: css`
    color: var(--color-grey-0);
    background-color: var(--color-green-700);

    &:hover {
      background-color: var(--color-green-800);
    }
  `,
  secondary: css`
    color: var(--color-green-700);
    background-color: var(--color-grey-50);
    border: 1px solid var(--color-green-300);

    &:hover {
      background-color: var(--color-grey-300);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: background-color 0.3s;

  ${(props) => sizes[props.size || "medium"]}
  ${(props) => variations[props.variation || "primary"]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
