import React, { useEffect, useState, useRef } from 'react';
import { animate } from 'framer-motion';
import './textAnim.css';

interface TextAnimProps {
  typeText: string;
}

const TextAnim: React.FC<TextAnimProps> = ({ typeText }) => {
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
            }, 1000); // Delay of 1 second

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

  return <span ref={textRef}>{typeText.slice(0, count)}</span>;
};

export default TextAnim;
