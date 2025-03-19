import React from "react";
import styled from "styled-components";
import { format } from "date-fns";
import { Check, CheckCheck } from "lucide-react";
import type { Message } from "../../types";

interface MessageBubbleProps {
  message: Message;
  isCurrentUser: boolean;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({
  message,
  isCurrentUser,
}) => {
  const renderMessageStatus = () => {
    if (!isCurrentUser) return null;

    switch (message.status) {
      case "sent":
        return (
          <MessageStatus>
            <Check />
          </MessageStatus>
        );
      case "delivered":
        return (
          <MessageStatus>
            <CheckCheck />
          </MessageStatus>
        );
      case "read":
        return (
          <MessageStatus>
            <CheckCheck color="#81C784" />
          </MessageStatus>
        );
      default:
        return null;
    }
  };

  return (
    <Bubble isUser={isCurrentUser}>
      <MessageContent>{message.content}</MessageContent>

      {message.attachments && message.attachments.length > 0 && (
        <AttachmentContainer>
          {message.attachments.map((attachment, index) => (
            <Attachment
              key={index}
              href={attachment.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AttachmentName>{attachment.fileName}</AttachmentName>
            </Attachment>
          ))}
        </AttachmentContainer>
      )}

      <MessageMeta isUser={isCurrentUser}>
        <MessageTime>
          {format(new Date(message.timestamp), "h:mm a")}
        </MessageTime>
        {renderMessageStatus()}
      </MessageMeta>
    </Bubble>
  );
};

const Bubble = styled.div<{ isUser: boolean }>`
  max-width: 80%;
  align-self: ${({ isUser }) => (isUser ? "flex-end" : "flex-start")};
  background-color: ${({ isUser }) =>
    isUser ? "var(--color-primary)" : "var(--color-surface)"};
  color: ${({ isUser }) =>
    isUser ? "var(--color-white)" : "var(--color-text)"};
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--border-radius-lg);
  border-bottom-right-radius: ${({ isUser }) =>
    isUser ? "var(--spacing-xs)" : "var(--border-radius-lg)"};
  border-bottom-left-radius: ${({ isUser }) =>
    !isUser ? "var(--spacing-xs)" : "var(--border-radius-lg)"};
  box-shadow: var(--shadow-sm);
  position: relative;
`;

const MessageContent = styled.div`
  word-break: break-word;
  white-space: pre-wrap;
`;

const MessageMeta = styled.div<{ isUser: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ isUser }) => (isUser ? "flex-end" : "flex-start")};
  margin-top: var(--spacing-xs);
  font-size: var(--font-size-xs);
  color: ${({ isUser }) =>
    isUser ? "rgba(255, 255, 255, 0.8)" : "var(--color-text-secondary)"};
`;

const MessageTime = styled.span`
  margin-right: var(--spacing-xs);
`;

const MessageStatus = styled.span`
  display: flex;
  align-items: center;

  svg {
    width: 14px;
    height: 14px;
  }
`;

const AttachmentContainer = styled.div`
  margin-top: var(--spacing-sm);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
`;

const Attachment = styled.a`
  display: flex;
  align-items: center;
  padding: var(--spacing-sm);
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: var(--border-radius-sm);
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const AttachmentName = styled.span`
  margin-left: var(--spacing-sm);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
