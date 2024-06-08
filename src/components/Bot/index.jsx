import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { callAI } from '../../lib/function';  // Adjusted import path
import '../../styles/chatbot.css';

const ChatBot = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleToggleChat = () => {
    setChatOpen(!chatOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    addMessage(input, 'self');
    setInput('');
    
    try {
      const response = await callAI(input);
      const botMessage = response.data.message;
      addMessage(botMessage, 'user');
    } catch (err) {
      console.log(err);
      addMessage('Error: Unable to get response from AI', 'user');
    }
  };

  const addMessage = (msg, type) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: prevMessages.length + 1, text: msg, type: type }
    ]);
  };

  return (
    <div>
      <div id="chat-circle" className="btn btn-raised" onClick={handleToggleChat}>
        <i className="material-icons">speaker_phone</i>
      </div>

      {chatOpen && (
        <div className="chat-box">
          <div className="chat-box-body">
            <div className="chat-box-header">
              ChatBot
              <span className="chat-box-toggle" onClick={handleToggleChat}>
                <i className="material-icons">close</i>
              </span>
            </div>

            <div className="chat-logs">
              {messages.map((msg) => (
                <div key={msg.id} className={`chat-msg ${msg.type}`}>
                  <span className="msg-avatar">
                    <img
                      src={
                        msg.type === 'self'
                          ? 'https://i.pinimg.com/564x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg'
                          : 'https://i.pinimg.com/564x/92/1f/55/921f557b5e21ceb73a0ccc4b16442a56.jpg'
                      }
                      alt="avatar"
                    />
                  </span>
                  <div className="cm-msg-text">{msg.text}</div>
                </div>
              ))}
            </div>

            <div className="chat-input">
              <form onSubmit={handleSendMessage}>
                <input
                  type="text"
                  id="chat-input"
                  placeholder="Send a message..."
                  value={input}
                  onChange={handleInputChange}
                />
                <button type="submit" className="chat-submit" id="chat-submit">
                  <i className="material-icons">send</i>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
