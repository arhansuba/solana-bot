// src/components/Chat/Chat.tsx

import React, { useState, useEffect } from 'react';
import ChatSideBar from './ChatSideBar';
import Message from './Message';
import { useChatHook } from './useChatHook';

const Chat: React.FC = () => {
  const { messages, sendMessage } = useChatHook();
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      sendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-container">
      <ChatSideBar />
      <div className="chat-main">
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
