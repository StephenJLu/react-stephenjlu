import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import TextAnim from "./components/TextAnim";
import '../styles/global.css';
import "./header.css";
import config from "../config.json";
import { MenuBar } from "./MenuBar";

export const Header = () => {
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);
  const [showTextAnim, setShowTextAnim] = useState(false);
  const baseText = config.name;

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const triggerPosition = window.innerHeight * 0.30; // 75vh
    if (scrollPosition >= triggerPosition) {
      setScrollY(scrollPosition);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({
      opacity: 1 - (scrollY - window.innerHeight * 0.30) / 300, // Adjust the denominator to control the speed of the fade
    });
  }, [scrollY, controls]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTextAnim(true);
    }, 2000); // Delay of 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const menuItems = [
    { label: "Home", onClick: () => console.log("Home clicked") },
    { label: "About", onClick: () => console.log("About clicked") },
    { label: "Ledger", onClick: () => console.log("Ledger clicked") },
    { label: "Gallery", onClick: () => console.log("Gallery clicked") },
    { label: "Contact", onClick: () => console.log("Contact clicked") },
  ];

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
 
<motion.div
        className="menu-bar-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }} // Fade in at 3 seconds
      >       
          <MenuBar items={menuItems} backgroundColor="#000" />        
      </motion.div>
      </motion.div>
    </header>
  );
};
