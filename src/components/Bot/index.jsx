'use client';
import React, { useState } from 'react';
import './chatbot.css';
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
import 'https://fonts.googleapis.com/icon?family=Material+Icons';
import $ from 'jquery';

const ChatBot = () => {
  const [index, setIndex] = useState(0);
  const [messages, setMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');

  const handleChatSubmit = (e) => {
    e.preventDefault();
    const msg = chatInput.trim();
    if (msg === '') {
      return false;
    }
    generateMessage(msg, 'self');
    setTimeout(() => {
      generateMessage(msg, 'user');
    }, 1000);
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
    setMessages([...messages, message]);
    if (type === 'self') {
      setChatInput('');
    }
    $('.chat-logs').stop().animate({ scrollTop: $('.chat-logs')[0].scrollHeight }, 1000);
  };

  const generateButtonMessage = (msg, buttons) => {
    const newIndex = index + 1;
    setIndex(newIndex);
    const buttonMessages = buttons.map(button => ({
      name: button.name,
      value: button.value
    }));
    const message = {
      id: newIndex,
      type: 'user',
      msg,
      avatar: "https://i.pinimg.com/564x/92/1f/55/921f557b5e21ceb73a0ccc4b16442a56.jpg",
      buttons: buttonMessages
    };
    setMessages([...messages, message]);
    $('#chat-input').attr('disabled', true);
    $('.chat-logs').stop().animate({ scrollTop: $('.chat-logs')[0].scrollHeight }, 1000);
  };

  const handleButtonClick = (value, name) => {
    $('#chat-input').attr('disabled', false);
    generateMessage(name, 'self');
  };

  const toggleChat = () => {
    $('#chat-circle').toggle('scale');
    $('.chat-box').toggle('scale');
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
          <div className="chat-logs">
            {messages.map(message => (
              <div key={message.id} id={`cm-msg-${message.id}`} className={`chat-msg ${message.type}`}>
                <span className="msg-avatar">
                  <img src={message.avatar} alt="avatar" />
                </span>
                <div className="cm-msg-text">{message.msg}</div>
                {message.buttons && (
                  <div className="cm-msg-button">
                    <ul>
                      {message.buttons.map((button, idx) => (
                        <li key={idx} className="button">
                          <a 
                            href="javascript:;" 
                            className="btn btn-primary chat-btn" 
                            chat-value={button.value}
                            onClick={() => handleButtonClick(button.value, button.name)}
                          >
                            {button.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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
