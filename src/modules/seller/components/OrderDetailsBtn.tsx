import React from "react";
import styled from "styled-components";
import Button from "../../../shared/ui/Button";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledButton = styled(Button)`
  @media (max-width: 768px) {
    margin-bottom: 20px;
    border-radius: 5px;
  }
`;

const StyledButtonDispute = styled(StyledButton)`
  color: var(--color-red-700);
  background-color: var(--color-grey-50);
  border: 1px solid var(--color-red-300);
  &:hover {
    background-color: var(--color-red-600);
    color: var(--color-grey-50);
  }
`;

interface ButtonProp {
  onDispute: () => void;
  onApprove: () => void;
}

export const Buttons: React.FC<ButtonProp> = ({ onDispute, onApprove }) => {
  return (
    <ButtonContainer>
      <StyledButton size="large" variation="primary" onClick={onApprove}>
        Approve Order
      </StyledButton>
      <StyledButton size="large" variation="secondary">
        Message Customer
      </StyledButton>
      <StyledButtonDispute
        size="large"
        variation="secondary"
        onClick={onDispute}
      >
        Dispute Order
      </StyledButtonDispute>
    </ButtonContainer>
  );
};
