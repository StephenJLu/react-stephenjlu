import React, { useEffect, useState, useRef } from 'react';
import './menuBar.css';
import config from '../config.json';

export interface MenuItem {
  /** The label of the menu item */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
  action?: string;
  targetID?: string;
  url?: string;
}

export interface MenuBarProps {
  /** Array of menu items */
  items: MenuItem[];
  /** Optional background color for the menu bar */
  backgroundColor?: string;
  /** Callback when a menu item is selected */
  onSelect?: (item: MenuItem) => void;
  /** The currently active item */
  activeItem?: string;
}

/** Primary UI component for navigation */
export const MenuBar: React.FC<MenuBarProps> = ({ items, backgroundColor, onSelect, activeItem }) => {
  const [menuBarWidth, setMenuBarWidth] = useState('0vw');  
  const menuBarRef = useRef<HTMLDivElement>(null);
  const [localActiveItem, setLocalActiveItem] = useState<string | null>(activeItem || 'Home');

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

  useEffect(() => {
    setLocalActiveItem(activeItem || 'Home');
    if (activeItem) {
      const element = document.getElementById(activeItem.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }      
  }, [activeItem]);

    const handleClick = (item: MenuItem) => {
    setLocalActiveItem(item.label);
    if (item.onClick) {
      item.onClick();
    }
    if (onSelect) {
      onSelect(item);
    }
    if (item.action === 'scroll' && item.targetID) {
      const  targetElement = document.getElementById(item.targetID);
      if (targetElement){
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item.action === 'open' && item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={`menu-bar-container`}
      ref={menuBarRef}
      style={{ width: menuBarWidth, backgroundColor }}
      data-bs-theme="dark"
      >
    <nav 
    className={"storybook-menu-bar"}        
    >      
      <ul className="storybook-menu-bar__list">
        {items.map((item, index) => (
          <li key={index} className="storybook-menu-bar__item">
            <button
              type="button"
              onClick={() => handleClick(item)}
              className={`storybook-menu-bar__button ${
                localActiveItem === item.label ? 'storybook-menu-bar__active' : ''
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>      
    </nav>
    </div>
  );
};