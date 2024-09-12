import React from "react";
import styled from "styled-components";
import Button from "../../../ui/Button";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface ButtonProp {
  onDispute: () => void;
  onApprove: () => void;
}

export const Buttons: React.FC<ButtonProp> = ({ onDispute, onApprove }) => {
  return (
    <ButtonContainer>
      <Button size="large" variation="primary" onClick={onApprove}>
        Approve Order
      </Button>
      <Button size="large" variation="secondary">
        Message Customer
      </Button>
      <Button size="large" variation="danger" onClick={onDispute}>
        Dispute Order
      </Button>
    </ButtonContainer>
  );
};
