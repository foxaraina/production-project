import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface useThemeInterface {
  theme?: Theme | undefined
  toggleTheme?: () => void
}
export const useTheme = (): useThemeInterface => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (): void => {
        const currentTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        if (setTheme) {
            setTheme(currentTheme);
        }
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, currentTheme);
    };

    return { theme, toggleTheme };
};
