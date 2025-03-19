import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { MessageCircle } from "lucide-react";
import { ChatHeader } from "./ChatHeader";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";
import { AttachmentBar } from "./AttachmentBar";
import type { Message, User } from "../../types";
import chatService from "../../services/chatService";
import socketService from "../../services/socketService";

interface ChatWidgetProps {
  currentUser: User;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [conversation, setConversation] = useState<string | null>(null);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typingUser, setTypingUser] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Connect to socket when component mounts
  useEffect(() => {
    socketService.connect();

    // Cleanup on unmount
    return () => {
      if (conversation) {
        socketService.leaveConversation(conversation);
      }
      socketService.disconnect();
    };
  }, []);

  // Set up socket event listeners
  useEffect(() => {
    const messageUnsubscribe = socketService.onMessage((message) => {
      setMessages((prev) => [...prev, message]);

      // If the chat is not open, increment unread count
      if (!isOpen && message.sender !== currentUser._id) {
        setUnreadCount((prev) => prev + 1);
      }
    });

    const typingStartUnsubscribe = socketService.onTypingStart((event) => {
      if (event.user._id !== currentUser._id) {
        setIsTyping(true);
        setTypingUser(`${event.user.firstName} ${event.user.lastName}`);
      }
    });

    const typingEndUnsubscribe = socketService.onTypingEnd((event) => {
      if (event.user._id !== currentUser._id) {
        setIsTyping(false);
        setTypingUser(null);
      }
    });

    return () => {
      messageUnsubscribe();
      typingStartUnsubscribe();
      typingEndUnsubscribe();
    };
  }, [currentUser._id, isOpen]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Initialize or get existing conversation
  useEffect(() => {
    const initializeConversation = async () => {
      try {
        // Get user's conversations
        const conversations = await chatService.getConversations();

        // Find a conversation with an admin, or create one if it doesn't exist
        let activeConversation = conversations.find(
          (conv) =>
            conv.status === "active" &&
            conv.participants.some((p) => p.role === "admin")
        );

        if (!activeConversation) {
          // Find admin users to create a conversation with
          // This is a simplified approach - in a real app, you'd have a way to find available admins
          const adminId = "admin-user-id"; // Replace with actual admin ID or API call
          activeConversation = await chatService.createConversation(
            [adminId],
            "Customer Support"
          );
        }

        setConversation(activeConversation._id);
        socketService.joinConversation(activeConversation._id);

        // Load messages for this conversation
        const conversationMessages = await chatService.getMessages(
          activeConversation._id
        );
        setMessages(conversationMessages);

        // Mark messages as read if the chat is open
        if (isOpen) {
          const unreadMessages = conversationMessages
            .filter(
              (msg) =>
                msg.sender !== currentUser._id &&
                !msg.readBy.includes(currentUser._id)
            )
            .map((msg) => msg._id);

          if (unreadMessages.length > 0) {
            socketService.markMessagesAsRead(
              activeConversation._id,
              unreadMessages
            );
          }
        } else {
          // Set unread count
          setUnreadCount(
            conversationMessages.filter(
              (msg) =>
                msg.sender !== currentUser._id &&
                !msg.readBy.includes(currentUser._id)
            ).length
          );
        }
      } catch (error) {
        console.error("Error initializing conversation:", error);
      }
    };

    if (currentUser && currentUser._id) {
      initializeConversation();
    }
  }, [currentUser]);

  // Handle opening the chat widget
  const handleToggleWidget = () => {
    setIsOpen(!isOpen);

    // Mark messages as read when opening the chat
    if (!isOpen && conversation && unreadCount > 0) {
      const unreadMessages = messages
        .filter(
          (msg) =>
            msg.sender !== currentUser._id &&
            !msg.readBy.includes(currentUser._id)
        )
        .map((msg) => msg._id);

      if (unreadMessages.length > 0) {
        socketService.markMessagesAsRead(conversation, unreadMessages);
        setUnreadCount(0);
      }
    }
  };

  // Handle sending a message
  const handleSendMessage = (content: string) => {
    if (!conversation) return;

    // Send message through socket
    socketService.sendMessage(conversation, content);
  };

  // Handle file uploads
  const handleFileUpload = async (file: File) => {
    if (!conversation) return;

    try {
      // First send a message
      const message = await chatService.sendMessage(conversation, "Attachment");

      // Then upload the attachment to that message
      await chatService.uploadAttachment(message._id, file);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  // Handle typing events
  const handleTypingStart = () => {
    if (conversation) {
      socketService.startTyping(conversation);
    }
  };

  const handleTypingEnd = () => {
    if (conversation) {
      socketService.stopTyping(conversation);
    }
  };

  return (
    <WidgetContainer isOpen={isOpen}>
      {isOpen ? (
        <>
          <ChatHeader
            title="Customer Service Chat"
            status="Online"
            onClose={handleToggleWidget}
          />
          <ChatMessages
            messages={messages}
            currentUser={currentUser}
            isTyping={isTyping}
            typingUser={typingUser}
            messagesEndRef={messagesEndRef}
          />
          <AttachmentBar onFileUpload={handleFileUpload} />
          <ChatInput
            onSendMessage={handleSendMessage}
            onTypingStart={handleTypingStart}
            onTypingEnd={handleTypingEnd}
          />
        </>
      ) : (
        <WidgetButton onClick={handleToggleWidget}>
          <MessageCircle />
          {unreadCount > 0 && (
            <NotificationBadge>{unreadCount}</NotificationBadge>
          )}
        </WidgetButton>
      )}
    </WidgetContainer>
  );
};

const WidgetContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  bottom: ${({ isOpen }) => (isOpen ? "0" : "20px")};
  right: 20px;
  width: ${({ isOpen }) => (isOpen ? "380px" : "auto")};
  height: ${({ isOpen }) => (isOpen ? "600px" : "auto")};
  background-color: var(--color-background);
  border-radius: ${({ isOpen }) =>
    isOpen
      ? "var(--border-radius-lg) var(--border-radius-lg) 0 0"
      : "var(--border-radius-round)"};
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  z-index: var(--z-index-modal);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
`;

const WidgetButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: var(--color-white);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: var(--shadow-md);
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--color-primary-dark);
    transform: scale(1.05);
  }

  svg {
    width: 28px;
    height: 28px;
  }
`;

const NotificationBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: var(--color-error);
  color: var(--color-white);
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
`;
