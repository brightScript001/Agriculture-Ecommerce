import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  background: var(--color-background);
  box-shadow: var(--shadow-md);
`;

export const ChatHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: var(--color-primary);
  color: var(--color-text);
`;

export const AgentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const AgentAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const AgentStatus = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin: 0;
    font-size: 1rem;
  }

  span {
    font-size: 0.875rem;
    opacity: 0.9;
  }
`;

export const EndChatButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  padding: 0.5rem 1rem;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

export const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MessageBubble = styled.div<{ isUser: boolean }>`
  max-width: 80%;
  align-self: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
  background: ${(props) => (props.isUser ? "#4CAF50" : "#f0f0f0")};
  color: ${(props) => (props.isUser ? "white" : "#333")};
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  border-bottom-right-radius: ${(props) => (props.isUser ? "0.25rem" : "1rem")};
  border-bottom-left-radius: ${(props) => (!props.isUser ? "0.25rem" : "1rem")};
`;

export const MessageTime = styled.span`
  font-size: 0.75rem;
  color: #666;
  margin-top: 0.25rem;
  display: block;
`;

export const AttachmentOptions = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-top: 1px solid #eee;
`;

export const AttachmentOption = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: #4caf50;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background: rgba(76, 175, 80, 0.1);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const ChatInput = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-top: 1px solid #eee;
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #4caf50;
  }

  &::placeholder {
    color: #999;
  }
`;

export const SendButton = styled.button`
  background: #4caf50;
  border: none;
  padding: 0.75rem 1.5rem;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: #45a049;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export const WelcomeMessage = styled.div`
  padding: 1rem;
  color: #666;
  line-height: 1.5;
  font-size: 0.95rem;
`;
