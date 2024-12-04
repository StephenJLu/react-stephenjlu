import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './header.css';

export const Header = () => {
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({
      opacity: 1 - scrollY / 300, // Adjust the denominator to control the speed of the fade
    });
  }, [scrollY, controls]);

  return (
    <header>
      <motion.div
        className="storybook-header"
        animate={controls}
        initial={{ opacity: 1 }}
      >
        <div>
          <h1>Stephen J. Lu</h1>
        </div>
      </motion.div>
    </header>
  );
};