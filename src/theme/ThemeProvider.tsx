import {FC, useMemo, useState} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

const themeDefault = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT
export const ThemeProvider:FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(themeDefault)
    const defaultProps = useMemo(() => {
        return {
            theme: theme,
            setTheme: setTheme
        }
    }, [theme])
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ ThemeContext.Provider>
    )
}