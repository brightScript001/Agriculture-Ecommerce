import React from "react";
import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: var(--color-grey-600);
`;

const Error = styled.span`
  margin-top: 0.5rem;
  color: var(--color-red-700);
  font-size: 1rem;
  font-weight: 600;
`;

interface FormRowProps {
  label?: string;
  error?: string;
  children: React.ReactNode;
}

const FormRow: React.FC<FormRowProps> = ({ label, error, children }) => {
  return (
    <StyledFormRow>
      {label && (
        <Label htmlFor={(children as React.ReactElement).props.id}>
          {label}
        </Label>
      )}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
};

export default FormRow;
