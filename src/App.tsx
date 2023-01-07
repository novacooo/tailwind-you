import {
  applyTheme,
  argbFromHex,
  themeFromSourceColor,
} from '@material/material-color-utilities';

import { Button } from './components/button';

const theme = themeFromSourceColor(argbFromHex('#d8919d'));
// const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(theme, { target: document.body, dark: false });

export const App = () => (
  <div className="bg-background flex h-screen w-full flex-col items-center justify-center gap-6">
    {/* <h1 className="text-display-lg">Display large</h1>
    <h1 className="text-display-md">Display medium</h1>
    <h1 className="text-display-sm">Display small</h1>
    <h1 className="text-headline-lg">Headline large</h1>
    <h1 className="text-headline-md">Headline medium</h1>
    <h1 className="text-headline-sm">Headline small</h1>
    <h1 className="text-title-lg">Title large</h1>
    <h1 className="text-title-md">Title medium</h1>
    <h1 className="text-title-sm">Title small</h1>
    <h1 className="text-label-lg">Label large</h1>
    <h1 className="text-label-md">Label medium</h1>
    <h1 className="text-label-sm">Label small</h1>
    <h1 className="text-body-lg">Body large</h1>
    <h1 className="text-body-md">Body medium</h1>
    <h1 className="text-body-sm">Body small</h1> */}
    <Button>Enabled</Button>
    <Button disabled>Disabled</Button>
  </div>
);
