import React, { useEffect, useState } from 'react'
import {user} from '../Join/Join'
import socketIO from "socket.io-client";
import sendLogo from "../../images/send.png";
import closeIcon from "../../images/closeIcon.png";
import './Chat.css'

let socket;
const Chat = () => {
  
  const user = localStorage.getItem('user');
  const [id, setid] = useState("");
  const [messages, setMessages] = useState([])

  const send = () => {
    const message = document.getElementById('chatInput').value;
    socket.emit('message', { message, id });
    document.getElementById('chatInput').value = "";
}
  
  useEffect(() => {
    const ENDPOINT = "http://localhost:4500/";
    // Initialize socket connection
    socket = socketIO(ENDPOINT, {
      transports: ['websocket'], // Force WebSocket for better compatibility
      reconnection: true, // Enable automatic reconnection
    });

    socket.on('connect', () => {
      alert('connected')
      console.log('Socket connected');
    });
    socket.emit('joined', { user });

    socket.on('welcome', (data) => {
        // setMessages([...messages, data]);
        console.log(data.user, data.message);
    })

    // socket.on('userJoined', (data) => {
    //     setMessages([...messages, data]);
    //     console.log(data.user, data.message);
    // })

    socket.on('leave', (data) => {
        // setMessages([...messages, data]);
        console.log(data.user, data.message)
    })

    return () => {
      socket.off(); // Remove all event listeners
  };
  }, []); // Run only once on mount

  useEffect(() => {
    socket.on('sendMessage', (data) => {
        // setMessages([...messages, data]);
        console.log(data.user, data.message, data.id);
    })
    return () => {
      
    }
}, [])

  return (
    <div className="chatPage">
            <div className="chatContainer">
                <div className="header">
                    <h2>C CHAT</h2>
                    <a href="/"> <img src={closeIcon} alt="Close" /></a>
                </div>
                {/* <ReactScrollToBottom className="chatBox">
                    {messages.map((item, i) => <Message user={item.id === id ? '' : item.user} message={item.message} 

                    classs={item.id === id ? 'right' : 'left'} />)}
                </ReactScrollToBottom> */}
                <div className="inputBox">
                    <input 
                    onKeyPress={(event) => event.key === 'Enter' ? send() : null} 
                    type="text" id="chatInput" />
                    <button 
                    onClick={send} 
                    className="sendBtn">
                    <img 
                    src={sendLogo} 
                    alt="Send" /></button>
                </div>
            </div>

        </div>
  )
}

export default Chat
