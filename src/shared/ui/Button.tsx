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
    color: var(--color-white);
    background-color: var(--color-primary);

    &:hover {
      background-color: var(--color-primary-dark);
    }
  `,
  secondary: css`
    color: var(--color-text-dark);
    background: transparent;
    border: 1px solid var(--color-border);

    &:hover {
      background-color: var(--color-secondary-dark);
    }
  `,
  danger: css`
    color: var(--color-white);
    background-color: var(--color-error);

    &:hover {
      background-color: var(--color-error-dark);
    }
  `,
  unstyled: css`
    all: unset;
    cursor: pointer;
  `,
};

const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease-in-out;

  &:active {
    transform: scale(0.98);
  }

  ${(props) => sizes[props.size || "medium"]}
  ${(props) => variations[props.variation || "primary"]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
