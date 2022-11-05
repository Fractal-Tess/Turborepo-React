import { createContext, PropsWithChildren, useState } from 'react';
import Cookies from 'js-cookie';

import { defaultTheme, type Theme } from '$types';

type ThemeContext = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContext | null>(null);

const ONE_YEAR = 1000 * 86400 * 365;

type Props = {
  cookieTheme: Theme | null;
} & PropsWithChildren;

export default function ThemeProvider({ children, cookieTheme }: Props) {
  const [theme, setTheme] = useState<Theme>(cookieTheme || defaultTheme);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme(nextTheme);

    Cookies.set('theme', nextTheme, {
      path: '/',
      expires: new Date(new Date().getTime() + ONE_YEAR)
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme} data-theme={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
