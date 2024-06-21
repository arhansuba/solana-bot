// interface.ts

// Interface for a chat message
export interface Message {
    id: string;
    content: string;
    sender: string;
    timestamp: number;
  }
  
  // Interface for chat participant
  export interface Participant {
    id: string;
    name: string;
    avatarUrl?: string;
  }
  
  // Interface for chat context
  export interface ChatContext {
    currentParticipant: Participant;
    participants: Participant[];
    messages: Message[];
  }
  
  // Interface for theme settings
  export interface ThemeSettings {
    theme: 'light' | 'dark';
    fontSize: number;
    fontFamily: string;
  }
  
  // Interface for API response
  export interface ApiResponse<T> {
    status: number;
    data: T;
  }
  
  // Interface for configuration options
  export interface AppConfig {
    apiUrl: string;
    maxMessagesPerPage: number;
    defaultTheme: ThemeSettings;
  }
  
  // Interface for HTTP headers
  export interface HttpHeaders {
    'Content-Type': string;
    Authorization?: string;
  }
  
  // Interface for user authentication
  export interface User {
    id: string;
    username: string;
    email: string;
    token: string;
    roles: string[];
  }
  
  // Interface for form input data
  export interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }
  
  // Extendable interface for errors
  export interface ErrorDetails {
    code: string;
    message: string;
    details?: any;
  }
  