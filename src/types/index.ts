export interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export interface ChatState {
  messages: Message[];
  isTyping: boolean;
}

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}