import React, { useState } from 'react';
import Message from './Message';

function ChatBox({ messages, onSendMessage }) {
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender} text={msg.text} />
        ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default ChatBox;
