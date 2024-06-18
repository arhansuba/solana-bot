import React from 'react';

const CodeSnippet = ({ code }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
      <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: '14px', margin: 0 }}>
        {code}
      </pre>
    </div>
  );
};

export default CodeSnippet;
