import React, { useState, useEffect } from 'react';
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
export const MenuBar = ({ items, backgroundColor, onSelect, activeItem }: MenuBarProps) => {
  const [localactiveItem, setLocalActiveItem] = useState<string | null>(activeItem || null);

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
    <nav className="storybook-menu-bar" style={{ backgroundColor }}>
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
  );
};