import { Theme, themes } from '$types';
import { parse } from 'cookie';

export type ThemeState = {
  theme: Theme;
  toggleTheme: () => void;
};

const isValidTheme = (theme: string): theme is Theme => {
  return themes.includes(theme as Theme);
};

export const themeFromCookie = (cookie?: string): Theme | null => {
  if (!cookie) return null;

  const { theme } = parse(cookie) as {
    theme: string | undefined;
  };

  if (!theme) return null;

  if (isValidTheme(theme)) return theme;

  return null;
};
