import React, { useState } from 'react';

const CodeGenerator = () => {
  const [code, setCode] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to generate code
  const generateCode = async () => {
    setLoading(true);
    setError(null);

    try {
      // Replace with actual API call or code generation logic
      const generatedCode = await fetch('https://api.example.com/generate-code');
      const codeResponse = await generatedCode.json();
      
      setCode(codeResponse.code);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Code Generator</h2>
      <button onClick={generateCode} disabled={isLoading}>
        {isLoading ? 'Generating...' : 'Generate Code'}
      </button>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <pre>{code}</pre>
    </div>
  );
};

export default CodeGenerator;
