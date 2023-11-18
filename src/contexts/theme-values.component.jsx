import React from "react";
import { lightTheme, darkTheme } from "../utils/theme";
import { useMedia } from 'react-use';
import { ThemeValuesContext } from "./theme-values.context";

const ThemeValuesProvider = ({ children }) => {
    // Detects if the user has a preference for dark mode
    const prefersDarkMode = useMedia('(prefers-color-scheme: dark)');
    const theme = prefersDarkMode ? darkTheme : lightTheme;

    // Media queries matching your specified breakpoints
    const isMobile = useMedia(`(max-width: ${theme.breakpoints.values.md}px)`);
    const isTablet = useMedia(`(max-width: ${theme.breakpoints.values.lg}px)`);
    const isLaptop = useMedia(`(min-width: ${theme.breakpoints.values.xl}px)`);
    const isDesktop = useMedia(`(min-width: ${theme.breakpoints.values.xxl}px)`);

    return (
        <ThemeValuesContext.Provider value={{ theme, checks: { isMobile, isTablet, isLaptop, isDesktop } }}>
            {children}
        </ThemeValuesContext.Provider>
    );
};

export default ThemeValuesProvider;
