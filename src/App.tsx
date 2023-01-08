import {
  applyTheme,
  argbFromHex,
  themeFromSourceColor,
} from '@material/material-color-utilities';

import { Button } from './components/button';

const theme = themeFromSourceColor(argbFromHex('#6750A4'));
// const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(theme, { target: document.body, dark: false });

export const App = () => (
  <div className="bg-background flex h-screen w-full items-center justify-center gap-40">
    <div className="flex flex-col gap-3">
      <span className="text-headline-lg text-primary mb-8">Typography</span>
      <span className="text-display-lg">Display large</span>
      <span className="text-display-md">Display medium</span>
      <span className="text-display-sm">Display small</span>
      <span className="text-headline-lg">Headline large</span>
      <span className="text-headline-md">Headline medium</span>
      <span className="text-headline-sm">Headline small</span>
      <span className="text-title-lg">Title large</span>
      <span className="text-title-md">Title medium</span>
      <span className="text-title-sm">Title small</span>
      <span className="text-label-lg">Label large</span>
      <span className="text-label-md">Label medium</span>
      <span className="text-label-sm">Label small</span>
      <span className="text-body-lg">Body large</span>
      <span className="text-body-md">Body medium</span>
      <span className="text-body-sm">Body small</span>
    </div>
    <div className="flex flex-col gap-10">
      <span className="text-headline-lg text-primary">Buttons</span>
      <div className="flex gap-10">
        <div className="flex flex-col gap-5">
          <span className="text-title-lg">Filled</span>
          <Button variant="filled">Enabled</Button>
          <Button variant="filled" disabled>
            Disabled
          </Button>
        </div>
        <div className="flex flex-col gap-5">
          <span className="text-title-lg">Outlined</span>
          <Button variant="outlined">Enabled</Button>
          <Button variant="outlined" disabled>
            Disabled
          </Button>
        </div>
        <div className="flex flex-col gap-5">
          <span className="text-title-lg">Tonal</span>
          <Button variant="tonal">Enabled</Button>
          <Button variant="tonal" disabled>
            Disabled
          </Button>
        </div>
      </div>
    </div>
  </div>
);
