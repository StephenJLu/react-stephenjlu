import type { Meta, StoryObj } from '@storybook/react';
import { DecoderText } from './decoder-text';

const meta = {
  title: 'Decoder Text',
  component: DecoderText,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'], 


} satisfies Meta<typeof DecoderText>;


export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    text: 'This is some 1337 hacker decoding',    
},
};


