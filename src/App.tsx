import { Button, TailwindYouProvider, useTailwindYouContext } from 'components';

const ToggleThemeSection = () => {
  const { isDarkClass, toggleDarkClass } = useTailwindYouContext();

  return (
    <Button onClick={toggleDarkClass}>
      Toggle {isDarkClass ? 'light' : 'dark'}
    </Button>
  );
};

export const App = () => (
  <TailwindYouProvider sourceColor="#8158da">
    <div className="bg-background-light dark:bg-background-dark flex min-h-screen flex-col items-center gap-20">
      <span className="text-display-lg text-primary-light dark:text-primary-dark mt-20">
        Tailwind You
      </span>
      <ToggleThemeSection />
      <div className="flex gap-40">
        <div className="flex flex-col gap-3">
          <span className="text-headline-lg text-primary-light dark:text-primary-dark mb-8">
            Typography
          </span>
          <span className="text-display-lg text-on-background-light dark:text-on-background-dark">
            Display large
          </span>
          <span className="text-display-md text-on-background-light dark:text-on-background-dark">
            Display medium
          </span>
          <span className="text-display-sm text-on-background-light dark:text-on-background-dark">
            Display small
          </span>
          <span className="text-headline-lg text-on-background-light dark:text-on-background-dark">
            Headline large
          </span>
          <span className="text-headline-md text-on-background-light dark:text-on-background-dark">
            Headline medium
          </span>
          <span className="text-headline-sm text-on-background-light dark:text-on-background-dark">
            Headline small
          </span>
          <span className="text-title-lg text-on-background-light dark:text-on-background-dark">
            Title large
          </span>
          <span className="text-title-md text-on-background-light dark:text-on-background-dark">
            Title medium
          </span>
          <span className="text-title-sm text-on-background-light dark:text-on-background-dark">
            Title small
          </span>
          <span className="text-label-lg text-on-background-light dark:text-on-background-dark">
            Label large
          </span>
          <span className="text-label-md text-on-background-light dark:text-on-background-dark">
            Label medium
          </span>
          <span className="text-label-sm text-on-background-light dark:text-on-background-dark">
            Label small
          </span>
          <span className="text-body-lg text-on-background-light dark:text-on-background-dark">
            Body large
          </span>
          <span className="text-body-md text-on-background-light dark:text-on-background-dark">
            Body medium
          </span>
          <span className="text-body-sm text-on-background-light dark:text-on-background-dark">
            Body small
          </span>
        </div>
        <div className="flex flex-col gap-10">
          <span className="text-headline-lg text-primary-light dark:text-primary-dark">
            Buttons
          </span>
          <div className="flex gap-10">
            <div className="flex flex-col gap-5">
              <span className="text-title-md text-on-background-light dark:text-on-background-dark">
                Filled
              </span>
              <Button variant="filled">Enabled</Button>
              <Button variant="filled" disabled>
                Disabled
              </Button>
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-title-md text-on-background-light dark:text-on-background-dark">
                Outlined
              </span>
              <Button variant="outlined">Enabled</Button>
              <Button variant="outlined" disabled>
                Disabled
              </Button>
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-title-md text-on-background-light dark:text-on-background-dark">
                Text
              </span>
              <Button variant="text">Enabled</Button>
              <Button variant="text" disabled>
                Disabled
              </Button>
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-title-md text-on-background-light dark:text-on-background-dark">
                Elevated
              </span>
              <Button variant="elevated">Enabled</Button>
              <Button variant="elevated" disabled>
                Disabled
              </Button>
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-title-md text-on-background-light dark:text-on-background-dark">
                Tonal
              </span>
              <Button variant="tonal">Enabled</Button>
              <Button variant="tonal" disabled>
                Disabled
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </TailwindYouProvider>
);
