import React from "react";
import styled from "styled-components";
import Button from "../../../../shared/ui/Button";
import ButtonGroup from "../../../../shared/ui/ButtonGroup";
import SpinnerMini from "@shared/ui/SpinnerMini";

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
  isLoading: boolean;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  onCancel,
  onSave,
  isLoading,
}) => {
  return (
    <StyledButtonGroup>
      <FullWidthButton variation="secondary" onClick={onCancel}>
        Cancel
      </FullWidthButton>
      <FullWidthButton onClick={onSave} disabled={isLoading}>
        {isLoading ? <SpinnerMini /> : "Save Profile Info"}
      </FullWidthButton>
    </StyledButtonGroup>
  );
};
