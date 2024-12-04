import type { Meta, StoryObj } from '@storybook/react';
import { MenuBar, MenuBarProps } from './MenuBar';
import { fn } from '@storybook/test';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Menu Bar',
  component: MenuBar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },  
} satisfies Meta<typeof MenuBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {

    args:  {
    items: [
    { label: 'Home', onClick: fn() },
    { label: 'About', onClick: fn() },
    { label: 'Services', onClick: fn() },
    { label: 'Contact', onClick: fn() },
  ],  
  backgroundColor: '#000',
    onSelect: (item) => console.log(`Selected: ${item.label}`),
},

};