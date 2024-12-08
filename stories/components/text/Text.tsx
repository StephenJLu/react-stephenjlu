import React from 'react';
import './Text.css';

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({ children, className = '' }) => {
  return <div className={`text ${className}`}>{children}</div>;
};

export default Text;