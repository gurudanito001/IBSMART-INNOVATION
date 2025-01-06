"use client"

import React, { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

// Define a type for socket events (optional, for stricter typing)
interface ServerToClientEvents {
  serverMessage: (data: object) => void;
}

interface ClientToServerEvents {
  message: (data: object) => void;
}

// Initialize the socket with proper types
const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io('http://localhost:5000');

const App: React.FC = () => {
  const [serverResponse, setServerResponse] = useState<object>([]);

  useEffect(() => {
    // Listen for messages from the server
    socket.on('serverMessage', (data: object) => {
      setServerResponse(data);
      console.log(data)
    });

    // Cleanup the socket listener on component unmount
    return () => {
      socket.off('serverMessage');
    };
  }, []);

  const sendMessage = () => {
    // Send a message to the server
    socket.emit('message', {
      senderId: "075d8cb4-4f35-4982-afef-5d01f8d3fbc7",
      receiverId: "bce35a49-e5fd-4e84-b96b-8f1f84323487",
      message: "My bro, I'm good. I'm so happy to see you. "
    });
  };

  return (
    <div className='bg-gray-700 h-100 py-28 px-10'>
      <h1>React & Socket.IO Example (TypeScript)</h1>
      <button className='btn btn-primary ' onClick={sendMessage}>Send Message to Server</button>
      <p>Server Response: </p>
    </div>
  );
};

export default App;
