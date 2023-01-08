import {
  Scheme,
  applyTheme,
  argbFromHex,
  hexFromArgb,
  themeFromSourceColor,
} from '@material/material-color-utilities';
import { ReactNode, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { kebabize } from '../../helpers';

interface TailwindYouProviderProps {
  children: ReactNode;
  sourceColor?: string;
}

const getCssVariables = (scheme: Scheme, prefix: string) => {
  const variables: string[] = [];
  const json = scheme.toJSON();

  type SchemeKey = keyof typeof json;

  Object.keys(json).forEach((key) => {
    variables.push(
      `--${prefix}-${kebabize(key)}: ${hexFromArgb(json[key as SchemeKey])};`,
    );
  });

  return variables;
};

export const TailwindYouProvider = ({
  children,
  sourceColor,
}: TailwindYouProviderProps) => {
  const defaultColor = '#1814eb';
  const theme = themeFromSourceColor(argbFromHex(sourceColor || defaultColor));
  // const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const { light, dark } = theme.schemes;
  const lightVariables = getCssVariables(light, 'ty-light');
  const darkVariables = getCssVariables(dark, 'ty-dark');
  const variables = lightVariables.concat(darkVariables);
  const cssVariables = variables.join(' ');
  const css = `:root { ${cssVariables} }`;

  useEffect(() => {
    applyTheme(theme, { target: document.body, dark: false });
  }, [theme]);

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Flex:wght,GRAD@100..1000,-200..150&display=swap"
          rel="stylesheet"
        />
        <style type="text/css">{css}</style>
      </Helmet>
      {children}
    </>
  );
};
