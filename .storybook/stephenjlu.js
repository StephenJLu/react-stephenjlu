import { create } from '@storybook/theming/create';
import '../styles/global.css';

export default create({ 
  base: 'light', 
  brandTitle: 'Stephen J. Lu',
  brandUrl: 'https://www.StephenJLu.com',
  brandImage: 'https://www.stephenjlu.com/images/SJL-logo.svg',
  brandTarget: '_blank',

  fontBase: '"AtlasGroteskLC", sans-serif',
  fontCode: 'monospace',
});