import React from "react";
import { TextAnim, TextFade, DecoderText } from "../components/Components";
import "./header.css";
import config from "../../config.json";

export const Header = () => {    
  const fadeText = config.name;
  const codeText = config.roles;
  const delay = config.delay;
  const asciiText = config.ascii;

  return (
    <header>      
      <div className="header" data-bs-theme="dark">
        <div className="header-background" />
        <h1>
          <TextFade fadeText={fadeText} delay={delay}/>
        </h1>
        <span className="subtitle">
         {codeText.map((text, index) => (
            <React.Fragment key={index}>
              <DecoderText text={`${text}`} delay={delay} />
              <br />
            </React.Fragment>
          ))}
          </span>                                  
        </div>      
    </header>
  );
};