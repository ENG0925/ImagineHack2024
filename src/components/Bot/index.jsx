import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './chatbot.css';

export const callAI = async (msg) => {
  try {
    const response = await axios.post("/api/callAI", { msg });
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const ChatBot = () => {
  const [index, setIndex] = useState(0);
  const [messages, setMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const chatLogsRef = useRef(null);

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    const msg = chatInput.trim();
    if (msg === '') {
      return false;
    }
    generateMessage(msg, 'self');
    const aiResponse = await callAI(msg);
    if (aiResponse) {
      generateMessage(aiResponse, 'user');
    }
  };

  const generateMessage = (msg, type) => {
    const newIndex = index + 1;
    setIndex(newIndex);
    const message = {
      id: newIndex,
      type,
      msg,
      avatar: type === 'self' 
        ? "https://i.pinimg.com/564x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg" 
        : "https://i.pinimg.com/564x/92/1f/55/921f557b5e21ceb73a0ccc4b16442a56.jpg"
    };
    setMessages(prevMessages => [...prevMessages, message]);
    if (type === 'self') {
      setChatInput('');
    }
    scrollToBottom();
  };

  const scrollToBottom = () => {
    if (chatLogsRef.current) {
      chatLogsRef.current.scrollTop = chatLogsRef.current.scrollHeight;
    }
  };

  const toggleChat = () => {
    const chatCircle = document.getElementById('chat-circle');
    const chatBox = document.querySelector('.chat-box');
    chatCircle.classList.toggle('scale');
    chatBox.classList.toggle('scale');
  };

  return (
    <div>
      <div id="chat-circle" className="btn btn-raised" onClick={toggleChat}>
        <i className="material-icons">speaker_phone</i>
      </div>
      <div className="chat-box">
        <div className="chat-box-body">
          <div className="chat-box-header">
            ChatBot
            <span className="chat-box-toggle" onClick={toggleChat}><i className="material-icons">close</i></span>
          </div>
          <div className="chat-logs" ref={chatLogsRef}>
            {messages.map(message => (
              <div key={message.id} id={`cm-msg-${message.id}`} className={`chat-msg ${message.type}`}>
                <span className="msg-avatar">
                  <img src={message.avatar} alt="avatar" />
                </span>
                <div className="cm-msg-text">{message.msg}</div>
              </div>
            ))}
            <div className="chat-box-overlay"></div>
          </div>
          <div className="chat-input">
            <form onSubmit={handleChatSubmit}>
              <input 
                type="text" 
                id="chat-input" 
                placeholder="Send a message..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
              />
              <button type="submit" className="chat-submit" id="chat-submit">
                <i className="material-icons">send</i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
