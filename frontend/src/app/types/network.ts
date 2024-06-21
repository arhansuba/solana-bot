// Define the structure of a typical API response
export interface ApiResponse<T> {
    status: 'success' | 'error';
    data: T;
    message?: string;
    error?: string;
  }
  
  // Define the structure of an error response
  export interface ApiError {
    status: 'error';
    message: string;
  }
  
  // Example type for a User object in the application
  export interface User {
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  }
  
  // Example type for an authentication response
  export interface AuthResponse {
    token: string;
    user: User;
  }
  
  // Example type for a paginated response
  export interface PaginatedResponse<T> {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
  }
  
  // Example type for a generic API request
  export interface ApiRequest {
    endpoint: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    headers?: Record<string, string>;
    body?: any;
  }
  
  // Example type for a network configuration
  export interface NetworkConfig {
    baseUrl: string;
    timeout: number;
    headers: Record<string, string>;
  }
  
  // Example type for user login request
  export interface LoginRequest {
    email: string;
    password: string;
  }
  
  // Example type for user registration request
  export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
  }
  