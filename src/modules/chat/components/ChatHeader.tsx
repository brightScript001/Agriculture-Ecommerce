import React from "react";
import {
  ChatHeader as Header,
  AgentInfo,
  AgentAvatar,
  AgentStatus,
  EndChatButton,
} from "../styles/chatStyles";
import { ChatAgent } from "../types/chat";

interface ChatHeaderProps {
  agent: ChatAgent;
  onEndChat: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ agent, onEndChat }) => {
  return (
    <Header>
      <AgentInfo>
        <AgentAvatar>
          <img src={agent.avatar || "/placeholder.svg"} alt={agent.name} />
        </AgentAvatar>
        <AgentStatus>
          <h3>Customer Service Chat</h3>
          <span>{agent.status === "online" ? "Online" : "Offline"}</span>
        </AgentStatus>
      </AgentInfo>
      <EndChatButton onClick={onEndChat}>End Chat</EndChatButton>
    </Header>
  );
};

export default ChatHeader;
