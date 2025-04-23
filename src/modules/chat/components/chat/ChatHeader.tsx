import React from "react";
import styled from "styled-components";
import { X } from "lucide-react";

interface ChatHeaderProps {
  title: string;
  status: string;
  onClose: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  title,
  status,
  onClose,
}) => {
  return (
    <Header>
      <Title>
        <TitleText>{title}</TitleText>
        <StatusText>{status}</StatusText>
      </Title>
      <CloseButton onClick={onClose} aria-label="Close chat">
        <X />
      </CloseButton>
    </Header>
  );
};
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md);
  background-color: var(--color-primary);
  color: var(--color-white);
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleText = styled.h3`
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-medium);
  margin: 0;
`;

const StatusText = styled.span`
  font-size: var(--font-size-sm);
  opacity: 0.9;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--color-white);
  cursor: pointer;
  padding: var(--spacing-xs);
  border-radius: var(--border-radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
