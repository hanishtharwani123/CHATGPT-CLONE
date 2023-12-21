import React from "react";
import RightPanel from "./rightPanel";
import Header from "./header";
import NewChat from "./newChat";
import PromptChat from "./promptChat";
import "../styles/main.css";

const main = () => {
  return (
    <>
      <div className="container">
        <RightPanel />
        <div className="leftPanel">
          <Header />
          <div className="chat_structure">
            <NewChat />
            <hr className="line" />
            <PromptChat />
          </div>
        </div>
      </div>
    </>
  );
};

export default main;
