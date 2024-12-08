import '../styles/global.css';
import type { Preview } from "@storybook/react";
import stephenjlu from "./stephenjlu"

const preview: Preview = {
  parameters: {    
    docs: {
      theme: stephenjlu,
    },
    actions: { },
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
