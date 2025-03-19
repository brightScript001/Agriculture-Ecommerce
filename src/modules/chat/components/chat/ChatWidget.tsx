import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { MessageCircle } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { ChatHeader } from "./ChatHeader";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";
import { AttachmentBar } from "./AttachmentBar";
import type { Message } from "../../types";
import chatService from "../../services/chatService";
import socketService from "../../services/socketService";
import { AppState } from "store";
import {
  incrementUnreadCount,
  setActiveConversation,
  toggleChatWidget,
} from "@modules/core/states/chatSlice";

export const ChatWidget: React.FC = () => {
  const dispatch = useDispatch();
  const { isWidgetOpen, unreadCount, activeConversation } = useSelector(
    (state: AppState) => state.chat
  );
  const { user } = useSelector((state: AppState) => state.auth);

  const [messages, setMessages] = React.useState<Message[]>([]);
  const [isTyping, setIsTyping] = React.useState(false);
  const [typingUser, setTypingUser] = React.useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Connect to socket when component mounts
  useEffect(() => {
    socketService.connect();

    // Cleanup on unmount
    return () => {
      if (activeConversation) {
        socketService.leaveConversation(activeConversation);
      }
      socketService.disconnect();
    };
  }, [activeConversation]);

  // Set up socket event listeners
  useEffect(() => {
    if (!user) return;

    const messageUnsubscribe = socketService.onMessage((message) => {
      setMessages((prev) => [...prev, message]);

      // If the chat is not open, increment unread count
      if (!isWidgetOpen && message.sender !== user.id) {
        dispatch(incrementUnreadCount());
      }
    });

    const typingStartUnsubscribe = socketService.onTypingStart((event) => {
      if (event.user && event.user._id !== user.id) {
        setIsTyping(true);
        setTypingUser(`${event.user.firstName} ${event.user.lastName}`);
      }
    });

    const typingEndUnsubscribe = socketService.onTypingEnd((event) => {
      if (event.user && event.user._id !== user.id) {
        setIsTyping(false);
        setTypingUser(null);
      }
    });

    return () => {
      messageUnsubscribe();
      typingStartUnsubscribe();
      typingEndUnsubscribe();
    };
  }, [user, isWidgetOpen, dispatch]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Initialize or get existing conversation
  useEffect(() => {
    const initializeConversation = async () => {
      if (!user) return;

      try {
        // Get user's conversations
        const conversations = await chatService.getConversations();

        // Find a conversation with an admin, or create one if it doesn't exist
        let conversation = conversations.find(
          (conv) =>
            conv.status === "active" &&
            conv.participants.some((p) => p.role === "admin")
        );

        if (!conversation) {
          // Find admin users to create a conversation with
          // This is a simplified approach - in a real app, you'd have a way to find available admins
          const adminId = "admin-user-id"; // Replace with actual admin ID or API call
          conversation = await chatService.createConversation(
            [adminId],
            "Customer Support"
          );
        }

        dispatch(setActiveConversation(conversation._id));
        socketService.joinConversation(conversation._id);

        // Load messages for this conversation
        const conversationMessages = await chatService.getMessages(
          conversation._id
        );
        setMessages(conversationMessages);

        // Mark messages as read if the chat is open
        if (isWidgetOpen) {
          const unreadMessages = conversationMessages
            .filter(
              (msg) => msg.sender !== user.id && !msg.readBy.includes(user.id)
            )
            .map((msg) => msg._id);

          if (unreadMessages.length > 0) {
            socketService.markMessagesAsRead(conversation._id, unreadMessages);
          }
        } else {
          // Calculate unread count
          const newUnreadCount = conversationMessages.filter(
            (msg) => msg.sender !== user.id && !msg.readBy.includes(user.id)
          ).length;

          // Use Redux to update unread count
          if (newUnreadCount > 0) {
            for (let i = 0; i < newUnreadCount; i++) {
              dispatch(incrementUnreadCount());
            }
          }
        }
      } catch (error) {
        console.error("Error initializing conversation:", error);
      }
    };

    initializeConversation();
  }, [user, dispatch, isWidgetOpen]);

  // Handle opening the chat widget
  const handleToggleWidget = () => {
    const newIsOpen = !isWidgetOpen;
    dispatch(toggleChatWidget(newIsOpen));

    // Mark messages as read when opening the chat
    if (newIsOpen && activeConversation && unreadCount > 0 && user) {
      const unreadMessages = messages
        .filter(
          (msg) => msg.sender !== user.id && !msg.readBy.includes(user.id)
        )
        .map((msg) => msg._id);

      if (unreadMessages.length > 0) {
        socketService.markMessagesAsRead(activeConversation, unreadMessages);
      }
    }
  };

  // Handle sending a message
  const handleSendMessage = (content: string) => {
    if (!activeConversation) return;

    // Send message through socket
    socketService.sendMessage(activeConversation, content);
  };

  // Handle file uploads
  const handleFileUpload = async (file: File) => {
    if (!activeConversation) return;

    try {
      // First send a message
      const message = await chatService.sendMessage(
        activeConversation,
        "Attachment"
      );

      // Then upload the attachment to that message
      await chatService.uploadAttachment(message._id, file);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  // Handle typing events
  const handleTypingStart = () => {
    if (activeConversation) {
      socketService.startTyping(activeConversation);
    }
  };

  const handleTypingEnd = () => {
    if (activeConversation) {
      socketService.stopTyping(activeConversation);
    }
  };

  // Don't render if no user is logged in
  if (!user) return null;

  return (
    <WidgetContainer isOpen={isWidgetOpen}>
      {isWidgetOpen ? (
        <>
          <ChatHeader
            title="Customer Service Chat"
            status="Online"
            onClose={handleToggleWidget}
          />
          <ChatMessages
            messages={messages}
            currentUser={user}
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
