import { ThemeProvider } from 'styled-components';
import React, { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import basic, * as T from './src/global/styles/theme';

interface IThemeContext {
  theme: number;
  setTheme: (v: number) => void;
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(0);

  const selectTheme = (number: number) => {
    switch (number) {
      default:
        return basic;
      case 1:
        return T.dark;
      case 2:
        return T.blue;
      case 3:
        return T.purple;
      case 4:
        return T.red;
      case 5:
        return T.green;
      case 6:
        return T.lightBlue;
    }
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme
    }}>
      <ThemeProvider theme={selectTheme(theme)}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>

  );
};