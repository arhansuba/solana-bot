// src/App.js

import React from 'react';
import { Chat, ChatProvider } from './components/Chat';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Chat App</h1>
      </header>
      <main className="App-main">
        <ChatProvider>
          <Chat />
        </ChatProvider>
      </main>
    </div>
  );
}

export default App;
