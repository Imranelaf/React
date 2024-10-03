import React, { useEffect, useState } from 'react';
import './chat.css';
import { io } from 'socket.io-client';

function Chat() {
  const [socket, setSocket] = useState(null);
  const [userMessage, setUserMessage] = useState('');

  useEffect(() => {
    //  Create a new socket connection
    const connection = io('http://localhost:4000');
    //  Store the connection in state
    setSocket(connection);
    //  Set up event listener
    connection.on("the message", (data) => {
      console.log("Message from server:", data);
    });
    // Cleanup function
    return () => connection.close();
  }, []);

  async function handleSubmit() {
    if (userMessage !== '') {
      const messageData = {
        message: userMessage,
        time: new Date().getHours() + ':' + new Date().getMinutes(),
      };

      setUserMessage('');
      await socket.emit('send_message', messageData);
    }
  }

  return (
    <div className='container'>
      <div className='chat-box'>
        <div className='header'>Hello there!</div>
        <div className='body'>
          <ul>
            <li>hello there!</li>
            <li>how are you?</li>
          </ul>
        </div>
        <div className='footer'>
          <input
            type="text"
            placeholder='Hello...'
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            onKeyPress={(e) => e.code === 'Enter' && handleSubmit()}
          />
          <button onClick={handleSubmit}>&#8618;</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
