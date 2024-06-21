import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import axios from 'axios';
import { Chat, ChatProvider } from './components/Chat';
import Header from './Header';
import { ThemeProvider } from './Themes/ThemeProvider';

const config = {
  baseUrl: 'https://api.example.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const apiClient = axios.create({
  baseURL: config.baseUrl,
  timeout: config.timeout,
  headers: config.headers,
});

export const login = async (credentials) => {
  try {
    const response = await apiClient.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    const apiError = {
      status: 'error',
      message: error.message,
    };
    throw apiError;
  }
};

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main className="App-main">
          <ChatProvider>
            <Chat />
          </ChatProvider>
        </main>
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;

