export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: "buyer" | "seller" | "admin";
  avatar?: string;
  lastActive?: Date;
}

export interface Conversation {
  _id: string;
  participants: User[];
  title?: string;
  createdAt: Date;
  updatedA: Date;
  lastMessage?: {
    content: string;
    sender: string;
    timestamp: Date;
  };
  status: "active" | "archived" | "archived";
}

export interface Message {
  _id: string;
  conversationId: string;
  sender: User | string;
  content: string;
  attachments?: Attachment[];
  timestamp: Date;
  readBy: string[];
  status: "sent" | "delivered" | "read";
}

export interface Attachment {
  fileUrl: string;
  fileName: string;
  fileType: string;
  fileSize: number;
}

export interface ChatStats {
  totalConversations: number;
  activeConversations: number;
  resolvedConversations: number;
  totalMessages: number;
  recentMessages: number;
  averageResponseTime: number;
  messageCount: {
    total: number;
    last24Hours: number;
  };
  eventStats: {
    _id: string;
    count: number;
  }[];
}

//WebSocket event types
export interface TypingEvent {
  user: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  conversationId: string;
}

export interface RoadReceiptEvent {
  reader: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  messageIds: string[];
  conversationId: string;
}

export interface UserPresenceEvent {
  user: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  conversationId: string;
}

export interface MessageStatusEvent {
  messageId: string;
  status: "delivered" | "read";
}
