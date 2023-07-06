import {useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

interface useThemeInterface {
    theme: Theme
    toggleTheme: () => void
}
export const useTheme = (): useThemeInterface => {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const currentTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme(currentTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, currentTheme)
    }
    return {theme, toggleTheme}
}