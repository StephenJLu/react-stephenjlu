import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import TextAnim from './components/TextAnim';
import './header.css';
import config from '../config.json';



export const Header = () => {
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);
  const [showTextAnim, setShowTextAnim] = useState(false);
  const baseText = config.name;

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTextAnim(true);
    }, 2000); // Delay of 2 seconds
    return () => clearTimeout(timer);
  }, []);  

  return (
    <header>
      <motion.div
        className="storybook-header"
        animate={controls}
        initial={{ opacity: 1 }}
      >
        <motion.div
          className="header-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.45 }}
          transition={{ delay: 1, duration: 1 }}
        />      
         {showTextAnim && (
          <h1 className="animated-text">
            <TextAnim baseText={baseText} />
          </h1>
        )}
        </motion.div>      
    </header>
  );
};