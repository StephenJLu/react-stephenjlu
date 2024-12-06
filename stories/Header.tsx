import React, { useEffect, useState, useRef } from "react";
import TextAnim from "./components/TextAnim";
import TextFade from "./components/TextFade";
import '../styles/global.css';
import "./header.css";
import config from "../config.json";
import { MenuBar } from "./MenuBar";

export const Header = () => {  
  const [menuBarWidth, setMenuBarWidth] = useState('auto');
  const [isSticky, setIsSticky] = useState(false);
  const baseText = config.name;
  const headerRef = useRef<HTMLDivElement>(null);
  const menuBarRef = useRef<HTMLDivElement>(null);  

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const newWidth = Math.min(98, (scrollPosition / maxScroll) * 150 + 30);
    setMenuBarWidth(`${newWidth}vw`);

    if (menuBarRef.current) {
      const menuBarTop = menuBarRef.current.getBoundingClientRect().top;
      if (menuBarTop <= 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = config.menuItems.map((item) => ({
    ...item,
    onClick: () => eval(item.onClick)
  }));

  return (
    <header ref={headerRef}>      
      <div className="storybook-header">
        <div className="header-background" />
        <h1 className="animated-text">
          <TextAnim baseText={baseText} />
        </h1>
        <TextFade>
        <span className="subtitle">Author of <em>CSI to CEO</em><br />Retired CSI and Forensic Firearms Examiner
        <br />EMBA | SHRM-CP | Phi Beta Kappa</span>
        </TextFade>
        <div className={`menu-bar-container ${isSticky ? 'sticky' : ''}`} ref={menuBarRef} style={{ width: menuBarWidth }}>
          <MenuBar items={menuItems} backgroundColor="#000" />
        </div>
      </div>
    </header>
  );
};