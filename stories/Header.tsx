import React, { useEffect, useState, useRef } from "react";
import TextAnim from "./components/TextAnim";
import '../styles/global.css';
import "./header.css";
import config from "../config.json";
import { MenuBar } from "./MenuBar";

export const Header = () => {
  const [showTextAnim, setShowTextAnim] = useState(false);
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

  const menuItems = config.menuItems.map((item) => ({
    ...item,
    onClick: () => eval(item.onClick)
  }));

  return (
    <header ref={headerRef}>
      <div className="storybook-header">
        <div className="header-background" />
        {showTextAnim && (
          <h1>
            <TextAnim baseText={baseText} trigger={showTextAnim} />
          </h1>
        )}
      <div className="menu-bar-container">
        <MenuBar items={menuItems} backgroundColor="#000" />
      </div>
      </div>
    </header>
  );
};
