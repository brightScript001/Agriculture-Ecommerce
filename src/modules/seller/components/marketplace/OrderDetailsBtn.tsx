import React from "react";
import styled from "styled-components";
import Button from "../../../../shared/ui/Button";
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledButton = styled(Button)`
  @media (max-width: 768px) {
    margin-bottom: 1.25rem;
    border-radius: var(--border-radius-sm);
  }
`;

const StyledButtonDispute = styled(StyledButton)`
  color: var(--color-error);
  background-color: transparent;
  border: 1px solid var(--color-error);
  &:hover {
    background-color: var(--color-error);
    color: var(--color-text-secondary);
  }
`;
