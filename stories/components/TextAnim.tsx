import React, { useEffect, useState } from 'react';
import { animate } from 'framer-motion';

interface TextAnimProps {
  baseText: string;
  trigger: boolean;
}

const TextAnim: React.FC<TextAnimProps> = ({ baseText, trigger }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (trigger) {
    // Calculate the duration based on the length of the text
    const duration = baseText.length * 0.1; // Example: 0.1 seconds per character

    const controls = animate(count, baseText.length, {
      type: 'tween',
      duration: duration,
      ease: 'easeInOut',
      onUpdate: (latest) => setCount(Math.round(latest)),
    });

    return () => controls.stop();
  }
  }, [baseText, trigger]);

  return <span>{baseText.slice(0, count)}</span>;
};

export default TextAnim;
