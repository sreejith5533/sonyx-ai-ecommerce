import { useState } from "react";
import AiChatBox from "./AiChatbox";
import '../styles/chatbox.css'
function ChatWidjet() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {!isOpen && (
        <button className="chat-icon-btn" onClick={() => setOpen(true)}>
          <i className="fa-solid fa-comments"></i>
        </button>
      )}

      {isOpen && <AiChatBox closeChat = {() => setOpen(false)} />}
    </>
  );
}


export default ChatWidjet