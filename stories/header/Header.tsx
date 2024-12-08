import React from "react";
import { TextAnim, TextFade } from "../components/Components";
import '../../styles/global.css';
import "./header.css";
import config from "../../config.json";

export const Header = () => {    
  const typeText = config.name;
  const fadeText1 = 'Author of CSI to CEO';
  const fadeText2 = 'Retired CSI and Forensic Firearms Examiner';
  const fadeText3 = 'EMBA | SHRM-CP | Phi Beta Kappa';

  return (
    <header>      
      <div className="storybook-header" data-bs-theme="dark">
        <div className="header-background" />
        <h1 className="animated-text">
          <TextAnim typeText={typeText} />
        </h1>        
        <span className="subtitle">
          <TextFade fadeText={fadeText1} /><br />
          <TextFade fadeText={fadeText2} /><br />
          <TextFade fadeText={fadeText3} /><br />
          </span>                
        </div>      
    </header>
  );
};