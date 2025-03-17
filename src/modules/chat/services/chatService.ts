import api from "./api";
import type { Conversation, Message, ChatStats } from "../types";

const chatService = {
  // Conversation endpoints
  getConversations: async (): Promise<Conversation[]> => {
    const response = await api.get("/conversations");
    return response.data;
  },

  getConversation: async (id: string): Promise<Conversation> => {
    const response = await api.get(`/conversations/${id}`);
    return response.data;
  },

  createConversation: async (
    participantIds: string[],
    title?: string
  ): Promise<Conversation> => {
    const response = await api.post("/conversations", {
      participantIds,
      title,
    });
    return response.data;
  },

  updateConversation: async (
    id: string,
    data: { title?: string; status?: string }
  ): Promise<Conversation> => {
    const response = await api.put(`/conversations/${id}`, data);
    return response.data;
  },

  archiveConversation: async (id: string): Promise<{ message: string }> => {
    const response = await api.delete(`/conversations/${id}`);
    return response.data;
  },

  // Message endpoints
  getMessages: async (conversationId: string): Promise<Message[]> => {
    const response = await api.get(`/conversations/${conversationId}/messages`);
    return response.data;
  },

  sendMessage: async (
    conversationId: string,
    content: string
  ): Promise<Message> => {
    const response = await api.post(
      `/conversations/${conversationId}/messages`,
      { content }
    );
    return response.data;
  },

  markMessageAsRead: async (messageId: string): Promise<Message> => {
    const response = await api.put(`/messages/${messageId}/read`);
    return response.data;
  },

  // File upload
  uploadAttachment: async (messageId: string, file: File): Promise<any> => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await api.post(
      `/messages/${messageId}/attachments`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  },

  // Admin endpoints
  getAdminConversations: async (filters?: {
    status?: string;
    user?: string;
  }): Promise<Conversation[]> => {
    const response = await api.get("/admin/conversations", { params: filters });
    return response.data;
  },

  getChatStats: async (): Promise<ChatStats> => {
    const response = await api.get("/admin/stats");
    return response.data;
  },
};

export default chatService;
