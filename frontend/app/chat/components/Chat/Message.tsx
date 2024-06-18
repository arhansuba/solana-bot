// src/components/Chat/Message.tsx

import React from 'react';

interface MessageProps {
  message: string;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  return (
    <div className="message">
      <p>{message}</p>
    </div>
  );
};

export default Message;
