import React from "react";
import styled from "styled-components";

interface QuantityControlProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export const QuantityControl: React.FC<QuantityControlProps> = ({
  quantity,
  setQuantity,
}) => {
  const increment = () => {
    setQuantity((prevQty) => prevQty + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQty) => prevQty - 1);
    }
  };

  return (
    <QuantityContainer>
      <StyledButton onClick={decrement} disabled={quantity <= 1}>
        -
      </StyledButton>
      <QuantityText>
        <QuantityLabel>Qty:</QuantityLabel> {quantity}
      </QuantityText>
      <StyledButton onClick={increment}>+</StyledButton>
    </QuantityContainer>
  );
};

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const StyledButton = styled.button`
  background-color: var(--color-green-600);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  font-size: var(--font-size-lg);
  color: var(--color-white-100);
  cursor: pointer;
  border-radius: var(--border-radius-md);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  transition: background-color 0.3s ease;

  &:disabled {
    background-color: var(--color-grey-400);
    cursor: not-allowed;
  }

  &:hover {
    background-color: var(--color-green-500);
  }

  &:active {
    background-color: var(--color-green-700);
  }
`;

const QuantityText = styled.span`
  font-size: var(--font-size-md);
`;

const QuantityLabel = styled.span`
  font-size: var(--font-size-md);
  margin-right: 0.5rem;
`;