import React from 'react';

const Message = ({ text, sender, timestamp }) => {
  return (
    <div style={{ marginBottom: '10px', padding: '5px', borderRadius: '8px', backgroundColor: sender === 'bot' ? '#f0f0f0' : '#e6f7ff', maxWidth: '80%', alignSelf: sender === 'bot' ? 'flex-start' : 'flex-end' }}>
      <p style={{ margin: 0, fontSize: '14px', fontWeight: 'normal', color: '#333' }}>{text}</p>
      <span style={{ fontSize: '10px', color: '#999', marginTop: '5px', display: 'block', textAlign: sender === 'bot' ? 'left' : 'right' }}>{sender === 'bot' ? 'Bot' : 'You'} • {new Date(timestamp).toLocaleTimeString()}</span>
    </div>
  );
};

export default Message;
