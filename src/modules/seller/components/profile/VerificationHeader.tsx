import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: var(--color-grey-900);
`;

const StatusLabel = styled.span<{ complete: boolean }>`
  background-color: ${({ complete }) =>
    complete ? "var(--color-green-200)" : "var(--color-grey-200)"};
  color: ${({ complete }) =>
    complete ? "var(--color-green-600)" : "var(--color-grey-600)"};
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  font-size: 0.9rem;
`;

interface VerificationHeaderProps {
  title: string;
  complete?: boolean;
}

export const VerificationHeader: React.FC<VerificationHeaderProps> = ({
  title,
  complete = false,
}) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      <StatusLabel complete={complete}>
        {complete ? "Complete" : "Incomplete"}
      </StatusLabel>
    </HeaderContainer>
  );
};
