import React, { useState } from 'react';
import { Rotation, MenuBar, Header, Footer } from '../components/Components';
import './page.css';
import config from "../../config.json";

export const Page: React.FC = () => {  
  const [activeItem, setActiveItem] = useState<string>('Home');
  const [isActive, setIsActive] = useState<boolean>(true);

  const menuItems = config.menuItems.map((item) => ({
    ...item,
    onClick: () => {
      setActiveItem(item.label);
      setIsActive(isActive);                
    }
  }));
    return (    
    <div data-bs-theme="dark">            
      <Rotation />
      <MenuBar
      items={menuItems}
      backgroundColor="#000"
      activeItem={activeItem}
      onSelect={(item) => {
       setActiveItem(item.label);
       setIsActive(true);}} 
       />
       <div>         
      {activeItem === 'Home' && (
        <>
          <Header />
      <section className="page container-lg" id="home">        
        <h2>Hi! This new website is still under construction. Check back soon!</h2>
        <p>
          In the meantime, you can find me at <a href="https://www.StephenJLu.com/" target='_blank' rel='noopener noreferrer'>StephenJLu.com</a> or on <a href="https://www.linkedin.com/in/stephenjlu/" target='_blank' rel='noopener noreferrer'>LinkedIn</a>.
          </p>
      </section>
      </ >
      )}
      {activeItem === 'About' && (
        <>          
      <section className="page" id="about">
        <h1>About Me</h1>
        <h2>Hi! This new website is still under construction. Check back soon!</h2>
        <p>
          In the meantime, you can find me at <a href="https://www.StephenJLu.com/" target='_blank' rel='noopener noreferrer'>StephenJLu.com</a> or on <a href="https://www.linkedin.com/in/stephenjlu/" target='_blank' rel='noopener noreferrer'>LinkedIn</a>.
          </p>
      </section>
      </ >
      )}
      {activeItem === 'Ledger' && (
        <>          
      <section className="page">        
        <h2>You've navigated away from the page, but I'm still here!</h2>
      </section>
      </ >
      )}
      {activeItem === 'Projects' && (
        <>          
      <section className="page" id="projects">
        <h1>My Projects</h1>
        <h2>Hi! This new website is still under construction. Check back soon!</h2>
        <p>
          In the meantime, you can find me at <a href="https://www.StephenJLu.com/" target='_blank' rel='noopener noreferrer'>StephenJLu.com</a> or on <a href="https://www.linkedin.com/in/stephenjlu/" target='_blank' rel='noopener noreferrer'>LinkedIn</a>.
          </p>
      </section>
      </ >
      )}
      {activeItem === 'Contact' && (
        <>          
      <section className="page">        
        <h2>You've navigated away from the page, but I'm still here!</h2>
      </section>
      </ >
      )}
      <Footer />
      </div>           
    </div>
  );
};
