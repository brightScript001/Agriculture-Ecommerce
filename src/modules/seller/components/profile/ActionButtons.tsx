import React from "react";
import styled from "styled-components";
import Button from "../../../../shared/ui/Button";
import ButtonGroup from "../../../../shared/ui/ButtonGroup";

const StyledButtonGroup = styled(ButtonGroup)`
  justify-content: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const FullWidthButton = styled(Button)`
  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0;
  }
`;

interface ActionButtonsProps {
  onCancel: () => void;
  onSave: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  onCancel,
  onSave,
}) => {
  return (
    <StyledButtonGroup>
      <FullWidthButton variation="secondary" onClick={onCancel}>
        Cancel
      </FullWidthButton>
      <FullWidthButton onClick={onSave}>Save Profile Info</FullWidthButton>
    </StyledButtonGroup>
  );
};
