import type React from "react";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { MoreVertical } from "lucide-react";
import type { Message, Conversation, User } from "../../types";
import { MessageBubble } from "../chat/MessageBubble";
import chatService from "../../services/chatService";
import socketService from "../../services/socketService";

const ChatViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  background-color: ${({ theme }) => theme.colors.background};
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderTitle = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
`;

const HeaderSubtitle = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const HeaderActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.divider};
    color: ${({ theme }) => theme.colors.text};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const StatusDropdown = styled.div`
  position: relative;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  z-index: 10;
  min-width: 150px;
  overflow: hidden;
`;

const DropdownItem = styled.button`
  width: 100%;
  text-align: left;
  padding: ${({ theme }) => theme.spacing.md};
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.divider};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  }
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.surface};
`;

const InputContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
  background-color: ${({ theme }) => theme.colors.background};
`;

const InputForm = styled.form`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const TextInput = styled.textarea`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  resize: none;
  min-height: 50px;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const SendButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.border};
    cursor: not-allowed;
  }
`;

const TypingIndicator = styled.div`
  padding: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-style: italic;
`;

interface ChatViewProps {
  conversationId: string;
  currentUser: User;
  onStatusUpdate: (conversationId: string, status: string) => void;
}

export const ChatView: React.FC<ChatViewProps> = ({
  conversationId,
  currentUser,
  onStatusUpdate,
}) => {
  const [conversation, setConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [typingUser, setTypingUser] = useState<string | null>(null);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load conversation and messages
  useEffect(() => {
    const loadConversation = async () => {
      try {
        const conversationData = await chatService.getConversation(
          conversationId
        );
        setConversation(conversationData);

        const messagesData = await chatService.getMessages(conversationId);
        setMessages(messagesData);
      } catch (error) {
        console.error("Error loading conversation:", error);
      }
    };

    loadConversation();
  }, [conversationId]);

  // Set up socket event listeners
  useEffect(() => {
    const messageUnsubscribe = socketService.onMessage((message) => {
      if (message.conversationId === conversationId) {
        setMessages((prev) => [...prev, message]);
      }
    });

    const typingStartUnsubscribe = socketService.onTypingStart((event) => {
      if (
        event.conversationId === conversationId &&
        event.user._id !== currentUser._id
      ) {
        setIsTyping(true);
        setTypingUser(`${event.user.firstName} ${event.user.lastName}`);
      }
    });

    const typingEndUnsubscribe = socketService.onTypingEnd((event) => {
      if (
        event.conversationId === conversationId &&
        event.user._id !== currentUser._id
      ) {
        setIsTyping(false);
        setTypingUser(null);
      }
    });

    return () => {
      messageUnsubscribe();
      typingStartUnsubscribe();
      typingEndUnsubscribe();
    };
  }, [conversationId, currentUser._id]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Mark messages as read
  useEffect(() => {
    const markMessagesAsRead = () => {
      const unreadMessages = messages
        .filter(
          (msg) =>
            msg.sender !== currentUser._id &&
            !msg.readBy.includes(currentUser._id)
        )
        .map((msg) => msg._id);

      if (unreadMessages.length > 0) {
        socketService.markMessagesAsRead(conversationId, unreadMessages);
      }
    };

    markMessagesAsRead();
  }, [messages, conversationId, currentUser._id]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (newMessage.trim()) {
      socketService.sendMessage(conversationId, newMessage.trim());
      setNewMessage("");
    }
  };

  const handleStatusChange = (status: string) => {
    onStatusUpdate(conversationId, status);
    setShowStatusDropdown(false);
  };

  return (
    <ChatViewContainer>
      <ChatHeader>
        <HeaderInfo>
          <HeaderTitle>
            {conversation?.title ||
              `Chat with ${conversation?.participants[0]?.firstName || "User"}`}
          </HeaderTitle>
          <HeaderSubtitle>
            Status:{" "}
            {conversation?.status.charAt(0).toUpperCase() +
              conversation?.status.slice(1)}
          </HeaderSubtitle>
        </HeaderInfo>

        <HeaderActions>
          <StatusDropdown>
            <ActionButton
              onClick={() => setShowStatusDropdown(!showStatusDropdown)}
            >
              <MoreVertical />
            </ActionButton>

            {showStatusDropdown && (
              <DropdownMenu>
                <DropdownItem onClick={() => handleStatusChange("active")}>
                  Mark as Active
                </DropdownItem>
                <DropdownItem onClick={() => handleStatusChange("resolved")}>
                  Mark as Resolved
                </DropdownItem>
                <DropdownItem onClick={() => handleStatusChange("archived")}>
                  Archive Conversation
                </DropdownItem>
              </DropdownMenu>
            )}
          </StatusDropdown>
        </HeaderActions>
      </ChatHeader>

      <MessagesContainer>
        {messages.map((message) => (
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

        {isTyping && (
          <TypingIndicator>
            {typingUser ? `${typingUser} is typing...` : "Someone is typing..."}
          </TypingIndicator>
        )}

        <div ref={messagesEndRef} />
      </MessagesContainer>

      <InputContainer>
        <InputForm onSubmit={handleSendMessage}>
          <TextInput
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message here..."
            rows={2}
          />
          <SendButton type="submit" disabled={!newMessage.trim()}>
            Send
          </SendButton>
        </InputForm>
      </InputContainer>
    </ChatViewContainer>
  );
};
