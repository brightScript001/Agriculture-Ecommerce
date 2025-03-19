import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { Message, ChatAgent } from "../types/chat";
import ChatHeader from "./ChatHeader";
import { AttachmentBar } from "./AttachmentBar";
import {
  ChatContainer,
  ChatMessages,
  WelcomeMessage,
} from "../styles/chatStyles";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";

const WELCOME_MESSAGE = `Welcome to OneFarm's Live Chat Support! Our team is here to assist you. Please type your question or concern, and we'll respond as quickly as possible. Feel free to ask about orders, technical issues, or any help you need. Your satisfaction is our priority.`;

const mockAgent: ChatAgent = {
  id: "1",
  name: "Support Agent",
  avatar: "/placeholder.svg?height=40&width=40",
  status: "online",
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: uuidv4(),
      content,
      sender: "user",
      timestamp: new Date(),
      status: "sent",
    };

    setMessages((prev) => [...prev, newMessage]);

    // Simulate agent response
    setTimeout(() => {
      const response: Message = {
        id: uuidv4(),
        content:
          "No worries – we're here to help you with any technical hiccup you're facing. If you're encountering a technical issue, could you share some details with us? Feel free to let us know if you're seeing any error messages, and walk us through what you were doing when the problem occurred. Our tech-savvy team will jump right in and help find the solution. We're committed to making everything work smoothly for you and everyone else on OneFarm. Thanks for your patience and for helping us make things even better!",
        sender: "agent",
        timestamp: new Date(),
        status: "sent",
      };
      setMessages((prev) => [...prev, response]);
    }, 1000);
  };

  const handleEndChat = () => {
    if (window.confirm("Are you sure you want to end this chat session?")) {
      console.log("Chat ended");
    }
  };

  const handlePhotoUpload = () => {
    console.log("Photo upload clicked");
  };

  const handleDocumentUpload = () => {
    console.log("Document upload clicked");
  };

  return (
    <ChatContainer>
      <ChatHeader agent={mockAgent} onEndChat={handleEndChat} />
      <ChatMessages>
        <WelcomeMessage>{WELCOME_MESSAGE}</WelcomeMessage>
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </ChatMessages>
      <AttachmentBar
        onPhotoUpload={handlePhotoUpload}
        onDocumentUpload={handleDocumentUpload}
      />
      <ChatInput onSendMessage={handleSendMessage} />
    </ChatContainer>
  );
};

export default Chat;
