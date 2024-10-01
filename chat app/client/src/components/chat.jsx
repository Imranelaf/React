import React, { useState } from 'react';
import './chat.css';

function Chat() {
  const [userMessage, setUserMessage] = useState("");

  function handleClick() {
    console.log(userMessage);
    setUserMessage("");
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleClick();
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
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleClick}>&#8618;</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
