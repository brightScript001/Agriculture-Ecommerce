export interface Message {
  id: string;
  content: string;
  sender: "user" | "agent";
  timestamp: Date;
  attachments?: Attachment[];
  status?: "sent" | "delivered" | "read";
}

export interface Attachment {
  id: string;
  type: "image" | "document";
  url: string;
  name: string;
  size?: number;
}

export interface ChatAgent {
  id: string;
  name: string;
  avatar: string;
  status: "online" | "offline";
}
