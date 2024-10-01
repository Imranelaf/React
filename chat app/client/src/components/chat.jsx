import React, { useState } from 'react'


function Chat() {
const [userMessage, setUserMessage] = useState("");

function hundleCLick(){
    console.log(userMessage);
    setUserMessage("")
    
}
  return (
    <div>
        <div className='header'>Hello there!</div>
        <div className='body'></div>
        <div className='footer'>
            <input type="text" placeholder='Hello...' value={userMessage} onChange={(e)=>{setUserMessage(e.target.value)}}/>
            <button onClick={hundleCLick}>&#8618;</button>
        </div>
    </div>
  )
}

export default Chat