import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../shared/ui/Button";
import ButtonGroup from "../../../shared/ui/ButtonGroup";
import styled from "styled-components";

const StyledButton = styled(Button)`
  @media (max-width: 768px) {
    border-radius: 5px;
  }
`;
const StyledButtonCancel = styled(StyledButton)`
  color: var(--color-red-700);
  border: 1px solid var(--color-red-300);
`;

const StyledButtonGroup = styled(ButtonGroup)`
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const DisputeActions: React.FC<{ onSubmitDispute: () => void }> = ({
  onSubmitDispute,
}) => {
  const navigate = useNavigate();
  const { orderId } = useParams<{ orderId: string }>();

  const handleCancel = () => {
    navigate(`/order/${orderId}`);
  };

  return (
    <StyledButtonGroup>
      <StyledButtonCancel
        size="medium"
        variation="secondary"
        onClick={handleCancel}
      >
        Cancel
      </StyledButtonCancel>
      <StyledButton size="medium" variation="danger" onClick={onSubmitDispute}>
        Submit Dispute
      </StyledButton>
    </StyledButtonGroup>
  );
};

export default DisputeActions;
