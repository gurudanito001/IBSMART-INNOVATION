"use client"

import React, { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

// Define a type for socket events (optional, for stricter typing)
interface ServerToClientEvents {
  update: (data: {senderId: string; receiverId: string; message: string}[]) => void;
  roomUpdate: (data: { message: string; users: { id: string; username: string }[] }) => void;
}

interface ClientToServerEvents {
  joinRoom: (data: { room: string; username: string }) => void;
  message: (data: { room: string; username: string; data: {senderId: string; receiverId: string; message: string} }) => void;
}

// Initialize the socket with proper types
const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io('http://localhost:5000');


const App: React.FC = () => {
  const [room, setRoom] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<{senderId: string; receiverId: string; message: string}[]>([]);
  const [users, setUsers] = useState<{ id: string; username: string }[]>([]);

  useEffect(() => {
    // Listen for updates in the room

    socket.on('update', (data) => {
      console.log(data);
      setMessages(data);
    });

    // Listen for room updates (users joining or leaving)
    socket.on('roomUpdate', (data) => {
      console.log(data.message); // Log room update messages
      setUsers(data.users);
    });

    joinRoom({roomId: "075d8cb4-4f35-4982-afef-5d01f8d3fbc7&&&bce35a49-e5fd-4e84-b96b-8f1f84323487", usernameId: "075d8cb4-4f35-4982-afef-5d01f8d3fbc7"})

    return () => {
      // Cleanup socket listeners on unmount
      socket.off('update');
      socket.off('roomUpdate');
    };
  }, []);

  const joinRoom = ({roomId, usernameId}: {roomId: string, usernameId: string} ) => {
    if (roomId && usernameId) {
      setRoom(roomId);
      setUsername(usernameId)
      socket.emit('joinRoom', { room: roomId, username: usernameId });
    }
  };

  const sendMessage = () => {
    console.log({room, username, message})
    if (room && username && message) {
      socket.emit('message', { 
        room, 
        username, 
        data: {
          senderId: "075d8cb4-4f35-4982-afef-5d01f8d3fbc7",
          receiverId: "bce35a49-e5fd-4e84-b96b-8f1f84323487",
          message: message
        } });
      setMessage(''); // Clear message input after sending
    }
  };

  

  return (
    <div className='bg-gray-700 h-100 py-28 px-10'>
      <h1>React & Socket.IO Example (TypeScript)</h1>
      <div>
        <input
          type="text"
          placeholder="Message"
          value={message}
          className='text-black'
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send Message</button>
      </div>

      {/* Display Messages */}
      <h2>Messages:</h2>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>
            <strong>{msg.senderId}:</strong> {msg.message}
          </li>
        ))}
      </ul>

      {/* Display Users in Room */}
      <h2>Users in Room:</h2>
      <ul>
        {users.map((user, index) => (
          <li key={`${user.id}-${index}`}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
