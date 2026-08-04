import "../styles/chatbox.css";
import API from "../services/axios";
import { useState, useEffect } from "react";

function AiChatBox({ closeChat }) {
  const [messages, setMessages] = useState([
    {
      type: "ai",
      message: `👋 Welcome to SONYX Electronics!
                  🤖 I'm your AI Shopping Assistant. How can I help you today?`,
    },
  ]);

  const [input, setInput] = useState("");

  




  const handleSend = async () => {
    try {
      const userMessage = input;
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "user", message: userMessage },
      ])
      setInput("")
      const response = await API.post("/chatbot/messages/", {
        message: userMessage,
      });
      console.log(response.data);
      setMessages((prevMessages)=>([
        ...prevMessages,
        { type: "ai", message: response.data.response },
      ]))
      
    } catch (err) {
      console.log(err.response.data);
    }
  };


  return (
    <div className="chatbox">
      <div className="chatbox-header">
        <div className="ai-icon">
          <i className="fa-solid fa-robot"></i>
        </div>
        <div className="content-container">
          <div className="content-div">
            <span className="content">SONYX Smart Assistant</span>
          </div>
          <div className="chatbox-close-div">
            <button onClick={closeChat} className="chatbox-close-btn">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="chatbox-content">
        {messages.map((message, index) => (
          <div
            className={`message ${
              message.type === "user" ? "user-message" : "ai-message"
            }`}
            key={index}
          >
            {message.message}
          </div>
        ))}
      </div>
      <div className="chatbox-footer">
        <input
          type="text"
          value={input}
          placeholder="Type your message..."
          className="message-input"
          onChange={(e)=>setInput(e.target.value)}
        />
        <button className="send-btn" onClick={handleSend}>
          <i class="fa-solid fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
}

export default AiChatBox;
