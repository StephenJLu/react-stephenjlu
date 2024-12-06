import React, { useEffect, useState, useRef } from "react";
import TextAnim from "./components/TextAnim";
import '../styles/global.css';
import "./header.css";
import config from "../config.json";
import { MenuBar } from "./MenuBar";

export const Header = () => {
  const [showTextAnim, setShowTextAnim] = useState(false);
  const [menuBarWidth, setMenuBarWidth] = useState('auto');
  const baseText = config.name;
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setShowTextAnim(true);
            }, 1000); // Delay of 1 second
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const newWidth = Math.min(100, (scrollPosition / maxScroll) * 100);
    setMenuBarWidth(`${newWidth}vw`);
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
        {showTextAnim && (
          <h1 className="animated-text">
            <TextAnim baseText={baseText} trigger={showTextAnim} />
          </h1>
        )}
        <div className="menu-bar-container" style={{ width: menuBarWidth }}>
          <MenuBar items={menuItems} backgroundColor="#000" />
        </div>
      </div>
    </header>
  );
};