import React from "react";
import styled from "styled-components";
import Button from "./Button";

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledButton = styled(Button)`
  border: none;
  top: 5px;
  bottom: 5px;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:disabled {
    background-color: var(--color-grey-400);
    cursor: not-allowed;
  }
`;

const QuantityText = styled.span`
  font-size: var(--font-size-md);
`;

const QuantityLabel = styled.span`
  font-size: var(--font-size-md);
  margin-right: 0.5rem;
`;

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
