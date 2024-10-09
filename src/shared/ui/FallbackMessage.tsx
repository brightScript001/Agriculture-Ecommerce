import React from "react";
import styled from "styled-components";

const FallbackText = styled.p`
  color: var(--color-red-600);
  font-size: var(--font-size-md);
`;

interface FallbackMessageProps {
  message: string;
}

export const FallbackMessage: React.FC<FallbackMessageProps> = ({
  message,
}) => {
  return <FallbackText>{message}</FallbackText>;
};
