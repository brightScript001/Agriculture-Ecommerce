import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  onTypingStart: () => void;
  onTypingEnd: () => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  onSendMessage,
  onTypingStart,
  onTypingEnd,
}) => {
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle typing events
  useEffect(() => {
    if (message && !isTyping) {
      setIsTyping(true);
      onTypingStart();
    }

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      if (isTyping) {
        setIsTyping(false);
        onTypingEnd();
      }
    }, 1000);

    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, [message, isTyping, onTypingStart, onTypingEnd]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage("");

      // Ensure typing indicator is turned off
      setIsTyping(false);
      onTypingEnd();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <InputContainer>
      <InputForm onSubmit={handleSubmit}>
        <TextInput
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Please, briefly describe your problem"
          rows={1}
        />
        <SendButton type="submit" disabled={!message.trim()}>
          <Send />
        </SendButton>
      </InputForm>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  padding: var(--spacing-md);
  border-top: 1px solid var(--color-divider);
  background-color: var(--color-background);
`;

const InputForm = styled.form`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
`;

const TextInput = styled.textarea`
  flex: 1;
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  resize: none;
  min-height: 50px;
  max-height: 120px;
  font-family: inherit;
  font-size: var(--font-size-md);

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }

  &::placeholder {
    color: var(--color-text-secondary);
  }
`;

const SendButton = styled.button`
  background-color: var(--color-primary);
  color: var(--color-white);
  border: none;
  border-radius: var(--border-radius-md);
  padding: var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-primary-dark);
  }

  &:disabled {
    background-color: var(--color-border);
    cursor: not-allowed;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
