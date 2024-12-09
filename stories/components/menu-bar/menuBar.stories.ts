import type { Meta, StoryObj } from '@storybook/react';
import { MenuBar } from './MenuBar';
import { fn } from '@storybook/test';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Menu Bar',
  component: MenuBar,  
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    activeItem: { 
      control: 'select',
    options: ['Home', 'About', 'Services', 'Contact'],
  },
},

} satisfies Meta<typeof MenuBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', onClick: fn() },
      { label: 'About', onClick: fn() },
      { label: 'Services', onClick: fn() },
      { label: 'Contact', onClick: fn() },
    ], 
  backgroundColor: '#000',    
},

};

export const Active: Story = {
  args: {
    items: [
      { label: 'Home', onClick: fn() },
      { label: 'About', onClick: fn() },
      { label: 'Services', onClick: fn() },
      { label: 'Contact', onClick: fn() },
    ],
    backgroundColor: "#000",
    activeItem: "Home",      
},
};