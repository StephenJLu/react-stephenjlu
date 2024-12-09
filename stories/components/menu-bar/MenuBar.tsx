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
    
  const handleClick = (item: MenuItem) => {
    if (onSelect) {
      onSelect(item);
    }
  };

  return (
    <div
      className="menu-bar-container"      
      style={{ backgroundColor }}
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