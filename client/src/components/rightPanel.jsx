import React from "react";
import "../styles/rightPanel.css";
import logo from "../assets/logo.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import icon7 from "../assets/icon7.png";

const rightPanel = () => {
  return (
    <>
      <div className="RightPanel">
        <div className="logo">
          <img src={logo} alt="logo" className="logo_img" />
        </div>
        <h1 className="log_name">LOGO</h1>
        <div className="icons">
          <img src={icon1} alt="icons" className="icons_panel" />
          <img src={icon2} alt="icons" className="icons_panel" />
          <img src={icon3} alt="icons" className="icons_panel" />
          <img src={icon4} alt="icons" className="icons_panel" />
          <img src={icon5} alt="icons" className="icons_panel" />
          <img src={icon6} alt="icons" className="icons_panel" />
          <img src={icon7} alt="icons" className="icons_panel" />
        </div>
      </div>
    </>
  );
};

export default rightPanel;
