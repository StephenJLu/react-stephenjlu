import React from "react";
import TextAnim from "./components/TextAnim";
import TextFade from "./components/TextFade";
import '../styles/global.css';
import "./header.css";
import config from "../config.json";

export const Header = () => {    
  const baseText = config.name; 

  return (
    <header>      
      <div className="storybook-header">
        <div className="header-background" />
        <h1 className="animated-text">
          <TextAnim baseText={baseText} />
        </h1>
        <TextFade>
        <span className="subtitle">Author of <em>CSI to CEO</em><br />Retired CSI and Forensic Firearms Examiner
        <br />EMBA | SHRM-CP | Phi Beta Kappa</span>
        </TextFade>        
        </div>      
    </header>
  );
};