import React from "react";
import { format } from "date-fns";
import { MessageBubble as Bubble, MessageTime } from "../styles/chatStyles";
import { Message } from "../types/chat";

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  return (
    <Bubble isUser={message.sender === "user"}>
      {message.content}
      <MessageTime>{format(message.timestamp, "h:mm a")}</MessageTime>
    </Bubble>
  );
};

export default MessageBubble;
