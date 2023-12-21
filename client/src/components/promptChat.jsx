import React, { useEffect, useState, useRef } from "react";
import "../styles/promptChat.css";
import mic from "../assets/mic.png";
import send from "../assets/send.png";
import attach from "../assets/attach_file.png";
import axios from "axios";

const PromptChat = () => {
  const [prompt, setPrompt] = useState("");
  const [input, setInput] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getData");
      setInput(response.data);
      scrollToBottom();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/prompt", {
        prompt,
      });
      console.log(response.data);

      setPrompt("");

      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="prompt_chat">
        <div className="above_part">
          {input.map((item) => (
            <div className="part" key={item.id}>
              <div className="card1">
                <p className="time">{item.timestamp}</p>
                <p className="question">{item.input}</p>
              </div>
              <div className="card2">
                <p className="time">{item.timestamp}</p>
                <p className="question">{item.output}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="below_part">
          <form action="" className="inp" onSubmit={handleSubmit}>
            <img src={attach} alt="attach" className="attach" />
            <input
              type="text"
              className="prompt_input"
              placeholder="Send a message"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <div className="send_icons_mic">
              <img src={mic} alt="mic" className="mic" />
              <button type="submit">
                <img src={send} alt="send" className="send" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PromptChat;
