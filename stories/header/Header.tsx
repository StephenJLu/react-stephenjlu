import React from "react";
import { TextAnim, TextFade } from "../components/Components";
import '../../styles/global.css';
import "./header.css";
import config from "../../config.json";

export const Header = () => {    
  const typeText = config.name;
  const fadeText = config.roles;
  const delay = config.delay;

  return (
    <header>      
      <div className="storybook-header" data-bs-theme="dark">
        <div className="header-background" />
        <h1>
          <TextFade fadeText={typeText} delay={delay}/>
        </h1>        
        <span className="subtitle">
         {fadeText.map((text, index) => (
            <React.Fragment key={index}>
              <TextAnim typeText={text} delay={delay}/>
              <br />
            </React.Fragment>
          ))}
          </span>                
        </div>      
    </header>
  );
};