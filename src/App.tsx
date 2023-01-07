import {
  applyTheme,
  argbFromHex,
  themeFromSourceColor,
} from '@material/material-color-utilities';

// material theme apply
const theme = themeFromSourceColor(argbFromHex('#9c1aff'));
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(theme, { target: document.body, dark: systemDark });

export const App = () => (
  <div>
    <h1 className="text-3xl font-bold underline">App</h1>
  </div>
);
