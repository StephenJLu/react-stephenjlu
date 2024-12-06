import React, { useEffect, useState, useRef } from 'react';
import './footer.css';
import config from '../config.json';
import TextAnim from "./components/TextAnim";
 
export const Footer = () => {
    
  return (
    <div className="storybook-footer">
      <div className="footer-content">
        <span className="date animated-text">
          <TextAnim baseText={`© ${new Date().getFullYear()} ${config.name}. All rights reserved.`} />            
          </span>        
      </div>
    </div>
  );
};