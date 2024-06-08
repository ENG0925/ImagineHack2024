'use client'
import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';
import { callAI } from '@/lib/function';

const ChatBot = () => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [loading, setLoading] = useState(false);
    const chatEndRef = useRef(null);

    const handleSend = async () => {
        if (message.trim() === '') return;

        setLoading(true);

        const newChatHistory = [...chatHistory, { sender: 'user', text: message, timestamp: new Date() }];
        setChatHistory(newChatHistory);

        try {
            const aiResponse = await callAI(message);
            console.log('aiResponse:', aiResponse);

            if (aiResponse && aiResponse.data && aiResponse.data.data) {
                setChatHistory([...newChatHistory, { sender: 'ai', text: aiResponse.data.data, timestamp: new Date() }]);
            } else {
                console.error('Invalid response format:', aiResponse);
                setChatHistory([...newChatHistory, { sender: 'ai', text: 'Sorry, I didn\'t understand that.', timestamp: new Date() }]);
            }
        } catch (error) {
            console.error('Error calling AI:', error);
            setChatHistory([...newChatHistory, { sender: 'ai', text: 'Error occurred while processing your message.', timestamp: new Date() }]);
        } finally {
            setLoading(false);
        }

        setMessage('');
    };

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chatHistory]);

    return (
        <div className="chat-container">
            <div className="chat-header">
                <h2>Chat with AI</h2>
            </div>
            <div className="chat-box">
                {chatHistory.map((chat, index) => (
                    <div key={index} className={`chat-message ${chat.sender}`}>
                        <div className="chat-bubble">
                            <p>{chat.text}</p>
                            <span className="chat-timestamp">{chat.timestamp.toLocaleTimeString()}</span>
                        </div>
                    </div>
                ))}
                <div ref={chatEndRef} />
            </div>
            <div className="input-box">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    disabled={loading}
                />
                <button onClick={handleSend} disabled={loading}>Send</button>
            </div>
        </div>
    );
};

export default ChatBot;
