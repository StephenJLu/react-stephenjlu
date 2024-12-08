import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import { Page } from './Page';

const meta = {
  title: 'Pages',
  component: Page,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
    argTypes: {    
    activeItem: { 
      control: 'select',
    options: ['Home', 'About', 'Services', 'Contact'],
  },
},
  
  
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HomePage: Story = {
  args: {    
    activeItem: "Home",      
},
};


