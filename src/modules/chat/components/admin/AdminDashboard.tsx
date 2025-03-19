import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Conversation, ChatStats, User } from "../../types";
import chatService from "../../services/chatService";
import socketService from "../../services/socketService";
import { ConversationList } from "./ConversationList";
import { ChatView } from "./ChatView";
import { StatsPanel } from "./StatsPanel";

interface AdminDashboardProps {
  currentUser: User;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  currentUser,
}) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<
    string | null
  >(null);
  const [chatStats, setChatStats] = useState<ChatStats | null>(null);
  const [filter, setFilter] = useState<{ status?: string; search?: string }>(
    {}
  );

  // Connect to socket when component mounts
  useEffect(() => {
    socketService.connect();

    // Cleanup on unmount
    return () => {
      socketService.disconnect();
    };
  }, []);

  // Load conversations
  useEffect(() => {
    const loadConversations = async () => {
      try {
        const data = await chatService.getAdminConversations(filter);
        setConversations(data);
      } catch (error) {
        console.error("Error loading conversations:", error);
      }
    };

    loadConversations();
  }, [filter]);

  // Load chat statistics
  useEffect(() => {
    const loadStats = async () => {
      try {
        const stats = await chatService.getChatStats();
        setChatStats(stats);
      } catch (error) {
        console.error("Error loading chat stats:", error);
      }
    };

    loadStats();

    // Refresh stats every 5 minutes
    const interval = setInterval(loadStats, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  // Handle conversation selection
  const handleSelectConversation = (conversationId: string) => {
    setSelectedConversation(conversationId);

    // Join the conversation room via socket
    socketService.joinConversation(conversationId);

    // If we were in another conversation, leave it
    if (selectedConversation && selectedConversation !== conversationId) {
      socketService.leaveConversation(selectedConversation);
    }
  };

  // Handle conversation status update
  const handleStatusUpdate = async (conversationId: string, status: string) => {
    try {
      await chatService.updateConversation(conversationId, { status });

      // Update the conversation in the list
      setConversations((prev) =>
        prev.map((conv) =>
          conv._id === conversationId
            ? { ...conv, status: status as any }
            : conv
        )
      );
    } catch (error) {
      console.error("Error updating conversation status:", error);
    }
  };

  // Handle search and filter
  const handleFilterChange = (newFilter: {
    status?: string;
    search?: string;
  }) => {
    setFilter({ ...filter, ...newFilter });
  };

  return (
    <DashboardContainer>
      <ConversationList
        conversations={conversations}
        selectedConversationId={selectedConversation}
        onSelectConversation={handleSelectConversation}
        onFilterChange={handleFilterChange}
        filter={filter}
      />

      {selectedConversation ? (
        <ChatView
          conversationId={selectedConversation}
          currentUser={currentUser}
          onStatusUpdate={handleStatusUpdate}
        />
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          Select a conversation to start chatting
        </div>
      )}

      <StatsPanel stats={chatStats} />
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr 300px;
  height: 100vh;
  overflow: hidden;
`;
