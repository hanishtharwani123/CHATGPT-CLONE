import React from "react";
import "../styles/newChat.css";
import chat from "../assets/message.png";
import plus from "../assets/pluse.png";
import delet from "../assets/delete.png";

const newChat = () => {
  return (
    <>
      <div className="new_chat">
        <div className="generator">
          <h1 className="text">Text Generator</h1>
          <div className="grid">
            <div className="bex">
              <img src={chat} alt="chat" className="messages" />
              <p className="headline">Impact of AI on User Experiences</p>
            </div>
            <div className="bex">
              <img src={chat} alt="chat" className="messages" />
              <p className="headline">Impact of AI on User Experiences</p>
            </div>
            <div className="bex">
              <img src={chat} alt="chat" className="messages" />
              <p className="headline">Impact of AI on User Experiences</p>
            </div>
            <div className="bex">
              <img src={chat} alt="chat" className="messages" />
              <p className="headline">Impact of AI on User Experiences</p>
            </div>
            <div className="bex">
              <img src={chat} alt="chat" className="messages" />
              <p className="headline">Impact of AI on User Experiences</p>
            </div>
          </div>
        </div>
        <div className="news">
          <div className="new_chats">
            <img src={plus} alt="plus" className="plus" />
            <p className="abt">New Chat</p>
          </div>
          <div className="clear_cons">
            <img src={delet} alt="plus" className="" />
            <p className="abt1">Clear Conversation</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default newChat;
