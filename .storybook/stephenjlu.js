import { create } from '@storybook/theming/create';
import '../styles/global.css';

export default create({
  base: 'dark',    
  brandTitle: 'Stephen J. Lu',
  brandUrl: 'https://www.StephenJLu.com',
  brandImage: 'https://www.stephenjlu.com/images/SJL-logo.svg',
  brandTarget: '_blank',
  fontBase: '"AtlasGroteskLC", sans-serif',
  fontCode: 'monospace',

  //
  colorPrimary: '#FFFFFF',
  colorSecondary: '#222222',
 
  // UI
  appBg: '#000000',
  appContentBg: '#000000',
  appPreviewBg: '#000000',
  appBorderColor: '#222222',
  appBorderRadius: 2,
 
  // Text colors
  textColor: '#ffffff',
  textInverseColor: '#000000',
 
  // Toolbar default and active colors
  barTextColor: '#ffffff',
  barSelectedColor: '#ffde21',
  barHoverColor: '#ffde21',
  barBg: '#000000', 
  
});