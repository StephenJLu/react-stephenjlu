import React, { useEffect, useState, useRef } from 'react';
import '../styles/global.css';
import './menuBar.css';

export interface MenuItem {
  /** The label of the menu item */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
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
  const [menuBarWidth, setMenuBarWidth] = useState('auto');
  const [isSticky, setIsSticky] = useState(false);
  const menuBarRef = useRef<HTMLDivElement>(null);
  const [localactiveItem, setLocalActiveItem] = useState<string | null>(activeItem || null);

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
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setLocalActiveItem(activeItem || null);
  }, [activeItem]);

  const handleClick = (item: MenuItem) => {
    setLocalActiveItem(item.label);
    if (item.onClick) {
      item.onClick();
    }
    if (onSelect) {
      onSelect(item);
    }
  };

  return (
    <div className={`menu-bar-container ${isSticky ? 'sticky' : ''}`}
      ref={menuBarRef}
      style={{ width: menuBarWidth }}
      >
    <nav 
    className={"storybook-menu-bar"}    
    style={{ backgroundColor }}
    >      
      <ul className="storybook-menu-bar__list">
        {items.map((item, index) => (
          <li key={index} className="storybook-menu-bar__item">
            <button
              type="button"
              onClick={() => handleClick(item)}
              className={`storybook-menu-bar__button ${
                localactiveItem === item.label ? 'storybook-menu-bar__active' : ''
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