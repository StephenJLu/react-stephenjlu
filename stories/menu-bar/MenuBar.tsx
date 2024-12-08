import React, { useEffect, useState, useRef } from 'react';
import './menuBar.css';
import MenuButton, { MenuItem } from './MenuButton';

export interface MenuBarProps {
  items: MenuItem[];
  backgroundColor?: string;
  onSelect?: (item: MenuItem) => void;
  activeItem?: string;
}

export const MenuBar: React.FC<MenuBarProps> = ({ items, backgroundColor, onSelect, activeItem }) => {
  const [menuBarWidth, setMenuBarWidth] = useState('0vw');
  const menuBarRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const newWidth = Math.min(98, (scrollPosition / maxScroll) * 100);
    setMenuBarWidth(`${newWidth}vw`);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);  

  const handleClick = (item: MenuItem) => {
    if (onSelect) {
      onSelect(item);
    }
  };

  return (
    <div
      className="menu-bar-container"
      ref={menuBarRef}
      style={{ width: menuBarWidth, backgroundColor }}
      data-bs-theme="dark"
    >
      <nav className="menu-bar">
        <ul className="menu-bar-list">
          {items.map((item, index) => (
            <MenuButton
              key={index}
              item={item}
              isActive={activeItem === item.label}
              onClick={handleClick}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};