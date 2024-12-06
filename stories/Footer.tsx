import React, { useEffect, useState, useRef } from 'react';
import './footer.css';
import config from '../config.json';
import TextAnim from "./components/TextAnim";
 
export const Footer = () => {
  const [trigger, setTrigger] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setTrigger(true);
            }, 1000); // Delay of 1 second
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);
    
  return (
    <div className="storybook-footer" ref={footerRef}>
      <div className="footer-content">
        <span className="date animated-text">
          <TextAnim baseText={`© ${new Date().getFullYear()} ${config.name}. All rights reserved.`} trigger={trigger} />            
          </span>        
      </div>
    </div>
  );
};