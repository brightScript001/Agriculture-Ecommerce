import { io, type Socket } from "socket.io-client";
import authService from "./authService";
import type {
  Message,
  TypingEvent,
  ReadReceiptEvent,
  UserPresenceEvent,
  MessageStatusEvent,
} from "../types";

const SOCKET_URL = "http://localhost:5000/api";

class SocketService {
  private socket: Socket | null = null;
  private messageListeners: ((message: Message) => void)[] = [];
  private typingListeners: ((event: TypingEvent) => void)[] = [];
  private typingEndListeners: ((event: TypingEvent) => void)[] = [];
  private readReceiptListeners: ((event: ReadReceiptEvent) => void)[] = [];
  private userJoinedListeners: ((event: UserPresenceEvent) => void)[] = [];
  private userLeftListeners: ((event: UserPresenceEvent) => void)[] = [];
  private messageStatusListeners: ((event: MessageStatusEvent) => void)[] = [];
  private errorListeners: ((error: any) => void)[] = [];

  connect(): void {
    if (this.socket) return;

    const token = authService.getToken();
    if (!token) {
      console.error("No authentication token found");
      return;
    }

    this.socket = io(SOCKET_URL, {
      auth: {
        token,
      },
      transports: ["websocket"],
    });

    this.setupListeners();
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  private setupListeners(): void {
    if (!this.socket) return;

    this.socket.on("connect", () => {
      console.log("Socket connected");
    });

    this.socket.on("disconnect", () => {
      console.log("Socket disconnected");
    });

    this.socket.on("connect_error", (error) => {
      console.error("Socket connection error:", error);
      this.errorListeners.forEach((listener) => listener(error));
    });

    this.socket.on("error", (error) => {
      console.error("Socket error:", error);
      this.errorListeners.forEach((listener) => listener(error));
    });

    this.socket.on("receive_message", (message: Message) => {
      this.messageListeners.forEach((listener) => listener(message));
    });

    this.socket.on("user_typing", (event: TypingEvent) => {
      this.typingListeners.forEach((listener) => listener(event));
    });

    this.socket.on("user_typing_end", (event: TypingEvent) => {
      this.typingEndListeners.forEach((listener) => listener(event));
    });

    this.socket.on("messages_read", (event: ReadReceiptEvent) => {
      this.readReceiptListeners.forEach((listener) => listener(event));
    });

    this.socket.on("user_joined", (event: UserPresenceEvent) => {
      this.userJoinedListeners.forEach((listener) => listener(event));
    });

    this.socket.on("user_left", (event: UserPresenceEvent) => {
      this.userLeftListeners.forEach((listener) => listener(event));
    });

    this.socket.on("message_status_update", (event: MessageStatusEvent) => {
      this.messageStatusListeners.forEach((listener) => listener(event));
    });
  }

  // Event emitters
  joinConversation(conversationId: string): void {
    if (this.socket) {
      this.socket.emit("join_conversation", conversationId);
    }
  }

  leaveConversation(conversationId: string): void {
    if (this.socket) {
      this.socket.emit("leave_conversation", conversationId);
    }
  }

  sendMessage(
    conversationId: string,
    content: string,
    attachments: any[] = []
  ): void {
    if (this.socket) {
      this.socket.emit("send_message", {
        conversationId,
        content,
        attachments,
      });
    }
  }

  startTyping(conversationId: string): void {
    if (this.socket) {
      this.socket.emit("typing_start", conversationId);
    }
  }

  stopTyping(conversationId: string): void {
    if (this.socket) {
      this.socket.emit("typing_end", conversationId);
    }
  }

  markMessagesAsRead(conversationId: string, messageIds: string[]): void {
    if (this.socket) {
      this.socket.emit("mark_read", { conversationId, messageIds });
    }
  }

  // Event listeners
  onMessage(callback: (message: Message) => void): () => void {
    this.messageListeners.push(callback);
    return () => {
      this.messageListeners = this.messageListeners.filter(
        (listener) => listener !== callback
      );
    };
  }

  onTypingStart(callback: (event: TypingEvent) => void): () => void {
    this.typingListeners.push(callback);
    return () => {
      this.typingListeners = this.typingListeners.filter(
        (listener) => listener !== callback
      );
    };
  }

  onTypingEnd(callback: (event: TypingEvent) => void): () => void {
    this.typingEndListeners.push(callback);
    return () => {
      this.typingEndListeners = this.typingEndListeners.filter(
        (listener) => listener !== callback
      );
    };
  }

  onReadReceipt(callback: (event: ReadReceiptEvent) => void): () => void {
    this.readReceiptListeners.push(callback);
    return () => {
      this.readReceiptListeners = this.readReceiptListeners.filter(
        (listener) => listener !== callback
      );
    };
  }

  onUserJoined(callback: (event: UserPresenceEvent) => void): () => void {
    this.userJoinedListeners.push(callback);
    return () => {
      this.userJoinedListeners = this.userJoinedListeners.filter(
        (listener) => listener !== callback
      );
    };
  }

  onUserLeft(callback: (event: UserPresenceEvent) => void): () => void {
    this.userLeftListeners.push(callback);
    return () => {
      this.userLeftListeners = this.userLeftListeners.filter(
        (listener) => listener !== callback
      );
    };
  }

  onMessageStatusUpdate(
    callback: (event: MessageStatusEvent) => void
  ): () => void {
    this.messageStatusListeners.push(callback);
    return () => {
      this.messageStatusListeners = this.messageStatusListeners.filter(
        (listener) => listener !== callback
      );
    };
  }

  onError(callback: (error: any) => void): () => void {
    this.errorListeners.push(callback);
    return () => {
      this.errorListeners = this.errorListeners.filter(
        (listener) => listener !== callback
      );
    };
  }
}

// Create singleton instance
const socketService = new SocketService();
export default socketService;
