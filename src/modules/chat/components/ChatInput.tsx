import React, { useState } from "react";
import { ChatInput as Input, SendButton } from "../styles/chatStyles";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Please, briefly describe your problem"
        />
        <SendButton type="submit" disabled={!message.trim()}>
          Send
        </SendButton>
      </Input>
    </form>
  );
};

export default ChatInput;
