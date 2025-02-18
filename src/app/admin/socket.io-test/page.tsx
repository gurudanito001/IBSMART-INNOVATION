"use client"

import React, { useEffect, useState, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

// Define a type for socket events (optional, for stricter typing)
interface ServerToClientEvents {
  update: (data: { senderId: string; receiverId: string; message: string }[]) => void;
  roomUpdate: (data: { message: string; users: { id: string; username: string }[] }) => void;
  userTyping: (data: { username: string, message: string }) => void;
  userStoppedTyping: (data: { username: string, message: string }) => void;
}

interface ClientToServerEvents {
  joinRoom: (data: { room: string; username: string }) => void;
  message: (data: { room: string; username: string; data: { senderId: string; receiverId: string; message: string } }) => void;
  typing: (data: { room: string; username: string; data: string }) => void;
  stopTyping: (data: { room: string; username: string; data: string  }) => void;
}



const App: React.FC = () => {
  const [room, setRoom] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<{ senderId: string; receiverId: string; message: string }[]>([]);
  const [users, setUsers] = useState<{ id: string; username: string }[]>([]);
  const [typingIndicator, setTypingIndicator] = useState<string | null>(null);

  const socketRef = useRef<Socket | null>(null); // Socket reference
  const typingRef = useRef<NodeJS.Timeout | null>(null);
  const serderId = "b80e02f3-4216-422a-84c1-97f37a040076";
  const receiverId = "dfa469ce-12f3-4868-8b19-ae9cfe12a9f0"



  useEffect(() => {
    // Initialize the socket with proper types
    const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io('http://localhost:5000');
    socketRef.current = socket;

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

    joinRoom({ roomId: "b80e02f3-4216-422a-84c1-97f37a040076&&&dfa469ce-12f3-4868-8b19-ae9cfe12a9f0", usernameId: "b80e02f3-4216-422a-84c1-97f37a040076" })

    // Listen for "userTyping" and "userStoppedTyping" events
    socket.on("userTyping", ({ username, message }) => {
      console.log(username, message);
      setTypingIndicator(message);
    });

    socket.on("userStoppedTyping", ({ username, message }) => {
      console.log(username, message);
      setTypingIndicator(message);
    });

    return () => {
      // Cleanup socket listeners on unmount
      socket.disconnect();
      /* socket.off('update');
      socket.off('roomUpdate');
      socket.off("userTyping");
      socket.off("userStoppedTyping") */
    };
  }, []);

  useEffect(() => {
    // Clear the previous timeout if the message state changes
    if (typingRef.current) {
      clearTimeout(typingRef.current);
    }

    // Set a new timeout to perform an action after 2 seconds of inactivity
    typingRef.current = setTimeout(() => {
      socketRef.current?.emit("stopTyping", { 
        room,
        username,
        data: `user ${username} has stopped typing`
      });
    }, 2000);

    // Cleanup function to clear the timeout on component unmount or message change
    return () => {
      if (typingRef.current) {
        clearTimeout(typingRef.current);
      }
    };
  }, [message]); // Restart timeout every time the message state changes


  const joinRoom = ({ roomId, usernameId }: { roomId: string, usernameId: string }) => {
    if (roomId && usernameId && socketRef.current) {
      setRoom(roomId);
      setUsername(usernameId)
      socketRef.current.emit('joinRoom', { room: roomId, username: usernameId });
    }
  };

  const sendMessage = () => {
    if (message.trim() === "") return;
    console.log({ room, username, message })
    if (room && username && message && socketRef.current) {
      socketRef.current.emit('message', {
        room,
        username,
        data: {
          senderId: "b80e02f3-4216-422a-84c1-97f37a040076",
          receiverId: "dfa469ce-12f3-4868-8b19-ae9cfe12a9f0",
          message: message
        }
      });
      setMessage(''); // Clear message input after sending
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    setMessage(event.target.value);
    if(socketRef.current){
      if (event.target.value.length > 0) {
        socketRef.current.emit('typing', {
          room,
          username,
          data: `user ${username} is typing`
        });
      } else {
      }
    }
    
  }


  return (
    <div className='bg-gray-700 h-100 py-28 px-10'>
      <h1>React & Socket.IO Example (TypeScript)</h1>
      <h5>{typingIndicator}</h5>
      <div>
        <input
          type="text"
          placeholder="Message"
          value={message}
          className='text-black'
          onChange={handleChange}
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
