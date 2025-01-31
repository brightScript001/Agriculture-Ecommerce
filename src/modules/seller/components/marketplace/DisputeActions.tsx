import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../../shared/ui/Button";
import ButtonGroup from "../../../../shared/ui/ButtonGroup";
import styled from "styled-components";

const DisputeActions: React.FC<{ onSubmitDispute: () => void }> = ({
  onSubmitDispute,
}) => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const handleCancel = () => {
    navigate(`/seller/order/${id}`);
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

const StyledButton = styled(Button)`
  @media (max-width: 768px) {
    border-radius: var(--border-radius-sm);
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
