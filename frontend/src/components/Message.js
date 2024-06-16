import React from 'react';

function Message({ sender, text }) {
  return (
    <div style={{ textAlign: sender === 'user' ? 'right' : 'left' }}>
      <p><strong>{sender}:</strong> {text}</p>
    </div>
  );
}

export default Message;
