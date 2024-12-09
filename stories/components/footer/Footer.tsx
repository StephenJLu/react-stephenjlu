import React from 'react';
import './footer.css';
import config from '../../../config.json';
import { TextAnim, InViewport } from "../Components";

const delay = config.delay;

export const Footer = () => {
  return (
    <InViewport>
      {(isInViewport) => (
        <div className="footer" data-bs-theme="dark">
          {isInViewport && (
            <div className="footer-content">
              <span className="date">
                <TextAnim
                  typeText={`© ${new Date().getFullYear()} ${config.name}. All rights reserved.`}
                  delay={delay}
                />
              </span>
            </div>
          )}
        </div>
      )}
    </InViewport>
  );
};