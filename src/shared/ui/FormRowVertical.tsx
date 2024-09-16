import React from "react";
import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
`;

const Label = styled.label`
  font-size: var(--font-size-sm);
`;

const Error = styled.span`
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-red-700);
`;

interface FormRowVerticalProps {
  label?: string;
  error?: string;
  children: React.ReactNode;
}

const FormRowVertical: React.FC<FormRowVerticalProps> = ({
  label,
  error,
  children,
}) => {
  const childElement = React.Children.only(children) as React.ReactElement;
  const childId = childElement.props.id;

  return (
    <StyledFormRow>
      {label && <Label htmlFor={childId}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
};

export default FormRowVertical;
