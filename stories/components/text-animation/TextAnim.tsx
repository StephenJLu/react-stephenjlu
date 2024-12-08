import React, { useEffect, useState, useRef } from 'react';
import { animate } from 'framer-motion';
import './textAnim.css';

interface TextAnimProps {
  typeText: string;
  delay?: number; // Optional delay in milliseconds
}

const TextAnim: React.FC<TextAnimProps> = ({ typeText, delay = 1000 }) => {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timer = setTimeout(() => {
              setShowText(true);
            }, delay); // Delay before showing the text

            return () => clearTimeout(timer);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (showText) {
      const duration = typeText.length * 0.1; // Example: 0.1 seconds per character

      const controls = animate(count, typeText.length, {
        type: 'tween',
        duration: duration,
        ease: 'easeInOut',
        onUpdate: (latest) => setCount(Math.round(latest)),
      });

      return () => controls.stop();
    }
  }, [showText, typeText]);

  return <span className={'typing-text'} data-bs-theme="dark" ref={textRef}>{typeText.slice(0, count)}</span>;
};

export default TextAnim;
