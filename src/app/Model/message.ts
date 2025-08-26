export interface Chat {
  id: string;
  title: string;
  userId: string;
  updatedAt?: string;
  createdAt?: string;
  lastMessageAt?: string;
}

export type MessageRole = 'user' | 'model';

export interface Message {
  id: string;
  chatId: string;
  replyOf?: string | null;
  userId?: string;
  role: MessageRole;
  content: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface NewMessageResponse {
  chat: Chat;
  messages: Message[];
}

export interface MessageInChatResponse {
  messages: Message[];
}

export interface ChatInfo {
  id: string;
  title: string;
  userId: string;
  lastMessageAt?: string;
  createdAt?: string;
  updatedAt?: string;
  _count?: {
    messages: number;
  };
}
