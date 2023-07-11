import { type FC } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import ThemeIconLight from 'shared/assets/icons/theme-light-icon.svg';
import ThemeIconDark from 'shared/assets/icons/theme-dark-icon.svg';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { useTheme } from 'app/providers/ThemeProvider';

export const ThemeSwitcher: FC = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button theme={ButtonTheme.CLEAR} onClick={toggleTheme}>
            {theme === Theme.DARK ? <ThemeIconDark /> : <ThemeIconLight />}
        </Button>
    );
};
