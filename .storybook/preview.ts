import '../styles/global.css';
import '../fonts/fonts.css';
import '../styles/bootstrap.min.css';
import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';
import { withThemeByDataAttribute } from '@storybook/addon-themes';

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'dark',
    attributeName: 'data-bs-theme',
  }),
];

const preview: Preview = {
  parameters: {
    docs: { theme: themes.dark },
    actions: { argTypesRegex: '^on[A-Z].*' },
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
