import '../styles/global.css';
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {    
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {      
      storySort: (a, b) =>
        a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
    controls: {
      expanded: true,
      hideNoControlsWarning: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
   
  },
};

export default preview;
