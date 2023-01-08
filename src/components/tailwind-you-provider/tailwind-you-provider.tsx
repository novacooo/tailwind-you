/* eslint-disable react/jsx-no-constructed-context-values */
import {
  Scheme,
  argbFromHex,
  hexFromArgb,
  themeFromSourceColor,
} from '@material/material-color-utilities';
import { ReactNode, createContext, useContext, useState } from 'react';
import { Helmet } from 'react-helmet';

import { kebabize } from 'helpers';

interface TailwindYouContextValues {
  isDarkClass: boolean;
  toggleDarkClass: () => void;
}

interface TailwindYouProviderProps {
  children: ReactNode;
  sourceColor?: string;
}

const initialValues: TailwindYouContextValues = {
  isDarkClass: false,
  toggleDarkClass: () => {},
};

const TailwindYouContext =
  createContext<TailwindYouContextValues>(initialValues);

export const useTailwindYouContext = () => useContext(TailwindYouContext);

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
  const [isDarkClass, setIsDarkClass] = useState<boolean>(false);

  const defaultColor = '#1814eb';
  const theme = themeFromSourceColor(argbFromHex(sourceColor || defaultColor));
  // const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const { light, dark } = theme.schemes;
  const lightVariables = getCssVariables(light, 'ty-light');
  const darkVariables = getCssVariables(dark, 'ty-dark');
  const variables = lightVariables.concat(darkVariables);
  const cssVariables = variables.join(' ');
  const css = `:root { ${cssVariables} }`;

  const toggleDarkClass = () => {
    document.documentElement.classList.toggle('dark');
    setIsDarkClass((prevIsDarkClass) => !prevIsDarkClass);
  };

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Flex:wght,GRAD@100..1000,-200..150&display=swap"
          rel="stylesheet"
        />
        <style type="text/css">{css}</style>
      </Helmet>
      <TailwindYouContext.Provider value={{ isDarkClass, toggleDarkClass }}>
        {children}
      </TailwindYouContext.Provider>
    </>
  );
};
