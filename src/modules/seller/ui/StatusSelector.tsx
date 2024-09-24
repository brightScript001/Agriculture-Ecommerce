import React from "react";
import styled from "styled-components";

const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
  font-size: 14px;
`;

const StatusOption = styled.div<{ readOnly: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: ${({ readOnly }) => (readOnly ? "not-allowed" : "pointer")};
  opacity: ${({ readOnly }) => (readOnly ? 0.6 : 1)};
`;

const Circle = styled.div<{ isSelected: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ isSelected }) =>
    isSelected ? "var(--color-green-600)" : "var(--color-grey-0)"};
  border: 1px solid var(--color-green-600);
`;

interface StatusSelectorProps {
  status: string;
  onChange: (val: string) => void;
  readOnly?: boolean;
}

const StatusSelector: React.FC<StatusSelectorProps> = ({
  status,
  onChange,
  readOnly = false, // Default to false
}) => {
  const handleClick = (newStatus: string) => {
    if (!readOnly) {
      onChange(newStatus); // Only change status if not read-only
    }
  };

  return (
    <StatusWrapper>
      <StatusOption readOnly={readOnly} onClick={() => handleClick("Resolved")}>
        <Circle isSelected={status === "Resolved"} />
        Resolved
      </StatusOption>
      <StatusOption
        readOnly={readOnly}
        onClick={() => handleClick("Unresolved")}
      >
        <Circle isSelected={status === "Unresolved"} />
        Unresolved
      </StatusOption>
    </StatusWrapper>
  );
};

export default StatusSelector;
