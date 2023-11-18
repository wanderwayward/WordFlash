import React from "react";
import {lightTheme, darkTheme} from "../utils/theme";
import { useMediaQuery } from '@mui/material';
import { ThemeValuesContext } from "./theme-values.context";

const ThemeValuesProvider = ({ children }) => {

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = prefersDarkMode ? darkTheme : lightTheme;



    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
    const isLaptop = useMediaQuery(theme.breakpoints.up('xl'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('xxl'));

    return (
        <ThemeValuesContext.Provider value={{ theme, checks: { isMobile, isTablet, isLaptop, isDesktop } }}>
            {children}
        </ThemeValuesContext.Provider>
    );
};

export default ThemeValuesProvider;
