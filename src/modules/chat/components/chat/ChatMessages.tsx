import React from "react";
import styled from "styled-components";
import { format } from "date-fns";
import type { Message, User } from "../../types";
import { MessageBubble } from "./MessageBubble";

interface ChatMessagesProps {
  messages: Message[];
  currentUser: User;
  isTyping: boolean;
  typingUser: string | null;
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

export const ChatMessages: React.FC<ChatMessagesProps> = ({
  messages,
  currentUser,
  isTyping,
  typingUser,
  messagesEndRef,
}) => {
  const WELCOME_MESSAGE = `Welcome to OneFarm's Live Chat Support! Our team is here to assist you. Please type your question or concern, and we'll respond as quickly as possible. Feel free to ask about orders, technical issues, or any help you need. Your satisfaction is our priority.`;

  // Group messages by date
  const groupedMessages: { [date: string]: Message[] } = {};

  messages.forEach((message) => {
    const date = format(new Date(message.timestamp), "yyyy-MM-dd");
    if (!groupedMessages[date]) {
      groupedMessages[date] = [];
    }
    groupedMessages[date].push(message);
  });

  return (
    <MessagesContainer>
      <WelcomeMessage>{WELCOME_MESSAGE}</WelcomeMessage>

      {Object.entries(groupedMessages).map(([date, dateMessages]) => (
        <React.Fragment key={date}>
          <DateSeparator>
            <span>{format(new Date(date), "MMMM d, yyyy")}</span>
          </DateSeparator>

          {dateMessages.map((message) => (
            <MessageBubble
              key={message._id}
              message={message}
              isCurrentUser={
                typeof message.sender === "string"
                  ? message.sender === currentUser._id
                  : message.sender._id === currentUser._id
              }
            />
          ))}
        </React.Fragment>
      ))}

      {isTyping && (
        <TypingIndicator>
          {typingUser ? `${typingUser} is typing` : "Someone is typing"}
        </TypingIndicator>
      )}

      <div ref={messagesEndRef} />
    </MessagesContainer>
  );
};

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const WelcomeMessage = styled.div`
  padding: var(--spacing-md);
  background-color: var(--color-surface);
  border-radius: var(--border-radius-md);
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin-bottom: var(--spacing-md);
`;

const DateSeparator = styled.div`
  display: flex;
  align-items: center;
  margin: var(--spacing-md) 0;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid var(--color-border);
  }

  span {
    padding: 0 var(--spacing-md);
    font-size: var(--font-size-xs);
    color: var(--color-text-secondary);
  }
`;

const TypingIndicator = styled.div`
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--color-surface);
  border-radius: var(--border-radius-md);
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  align-self: flex-start;
  margin-top: var(--spacing-xs);

  &::after {
    content: "...";
    animation: ellipsis 1.5s infinite;
  }

  @keyframes ellipsis {
    0% {
      content: ".";
    }
    33% {
      content: "..";
    }
    66% {
      content: "...";
    }
  }
`;
