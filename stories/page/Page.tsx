import React, { useState } from 'react';
import { Header, Footer } from '../Stories';
import { Rotation, MenuBar } from '../components/Components';
import '../../styles/global.css';
import './page.css';
import config from "../../config.json";
import progress from './progress.mdx'


export const Page: React.FC = () => {  
  const [activeItem, setActiveItem] = useState<string>('Home');
  const [isActive, setIsActive] = useState<boolean>(true);

  const menuItems = config.menuItems.map((item) => ({
    ...item,
    onClick: () => {
      setActiveItem(item.label);
      setIsActive(true);                
    }
  }));
    return (    
    <div data-bs-theme="dark" className="scroll-container">            
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
        <section>
          <Header />
      <section className="storybook-page container-lg" id="home">        
        <h2>Hi! This new website is still under construction. Check back soon!</h2>
        <p>
          In the meantime, you can find me at <a href="https://www.StephenJLu.com/" target='_blank' rel='noopener noreferrer'>StephenJLu.com</a> or on <a href="https://www.linkedin.com/in/stephenjlu/" target='_blank' rel='noopener noreferrer'>LinkedIn</a>.
          </p>
      </section>
      </section>
      )}

      {activeItem === 'About' && (
        <section>          
      <section className="storybook-page" id="about">
        <h2>Hi! This new website is still under construction. Check back soon!</h2>
        <p>
          In the meantime, you can find me at <a href="https://www.StephenJLu.com/" target='_blank' rel='noopener noreferrer'>StephenJLu.com</a> or on <a href="https://www.linkedin.com/in/stephenjlu/" target='_blank' rel='noopener noreferrer'>LinkedIn</a>.
          </p>
      </section>
      </section>
      )}

      {activeItem === 'Projects' && (
        <section>          
      <section className="storybook-page" id="projects">
        <h2>Hi! This new website is still under construction. Check back soon!</h2>
        <p>
          In the meantime, you can find me at <a href="https://www.StephenJLu.com/" target='_blank' rel='noopener noreferrer'>StephenJLu.com</a> or on <a href="https://www.linkedin.com/in/stephenjlu/" target='_blank' rel='noopener noreferrer'>LinkedIn</a>.
          </p>
      </section>
      </section>
      )}

      {activeItem === 'Contact' && (
        <section>          
      <section className="storybook-page" id="contact">
        <h2>Hi! This new website is still under construction. Check back soon!</h2>
        <p>
          In the meantime, you can find me at <a href="https://www.StephenJLu.com/" target='_blank' rel='noopener noreferrer'>StephenJLu.com</a> or on <a href="https://www.linkedin.com/in/stephenjlu/" target='_blank' rel='noopener noreferrer'>LinkedIn</a>.
          </p>
      </section>
      </section>
      )}
      <Footer />
      </div>      
    </div>
  );
};