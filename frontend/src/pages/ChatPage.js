import React, { useState } from 'react';
import axios from 'axios';
import ChatBox from '../components/ChatBox';

function ChatPage() {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (message) => {
    const response = await axios.post('http://localhost:5000/chat', { message });
    setMessages([...messages, { sender: 'user', text: message }, { sender: 'bot', text: response.data.response }]);
  };

  return (
    <div>
      <h1>SolanaBot</h1>
      <ChatBox messages={messages} onSendMessage={sendMessage} />
    </div>
  );
}

export default ChatPage;
