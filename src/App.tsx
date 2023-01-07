import {
  applyTheme,
  argbFromHex,
  themeFromSourceColor,
} from '@material/material-color-utilities';

import { Button } from './components/button';

const theme = themeFromSourceColor(argbFromHex('#e0e783'));
// const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(theme, { target: document.body, dark: false });

export const App = () => (
  <div className="flex h-screen w-full items-center justify-center">
    <Button>Example button</Button>
  </div>
);
