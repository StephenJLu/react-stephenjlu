import React from 'react';
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
}

/** Primary UI component for navigation */
export const MenuBar = ({ items, backgroundColor }: MenuBarProps) => {
  return (
    <nav className="storybook-menu-bar" style={{ backgroundColor }}>
      <ul className="storybook-menu-bar__list">
        {items.map((item, index) => (
          <li key={index} className="storybook-menu-bar__item">
            <button type="button" onClick={item.onClick} className="storybook-menu-bar__button">
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};