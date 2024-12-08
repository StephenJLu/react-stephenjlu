import { addons } from '@storybook/manager-api';
import stephenjlu from './stephenjlu';
import { themes } from '@storybook/theming';

addons.setConfig({

  theme: stephenjlu,
  theme: themes.dark,

});