import { useState, useEffect } from 'react';
import { Message, Participant } from './interface';

// Example initial chat data
const initialMessages: Message[] = [
  { id: '1', content: 'Hello!', sender: 'Alice', timestamp: Date.now() },
  { id: '2', content: 'Hi there!', sender: 'Bob', timestamp: Date.now() },
];

// Example initial participants
const initialParticipants: Participant[] = [
  { id: 'alice', name: 'Alice' },
  { id: 'bob', name: 'Bob' },
];

// Custom hook to manage chat state and functionality
const useChatHook = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [participants, setParticipants] = useState<Participant[]>(initialParticipants);

  // Function to add a new message to the chat
  const addMessage = (content: string, sender: string) => {
    const newMessage: Message = {
      id: String(messages.length + 1),
      content,
      sender,
      timestamp: Date.now(),
    };
    setMessages([...messages, newMessage]);
  };

  // Function to update participants list
  const updateParticipants = (updatedParticipants: Participant[]) => {
    setParticipants(updatedParticipants);
  };

  // Example effect to simulate incoming messages
  useEffect(() => {
    const interval = setInterval(() => {
      const randomSender = Math.random() < 0.5 ? 'Alice' : 'Bob';
      const randomMessage = Math.random() < 0.5 ? 'Hello!' : 'Hi there!';
      addMessage(randomMessage, randomSender);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Return state and functions for external use
  return {
    messages,
    participants,
    addMessage,
    updateParticipants,
  };
};

export default useChatHook;
