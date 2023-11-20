import React from "react";
import  theme from "../utils/theme";
import { useMedia } from 'react-use';
import { ThemeValuesContext } from "./theme-values.context";

const ThemeValuesProvider = ({ children }) => {

    const isDark = useMedia('(prefers-color-scheme: dark)');
    const isMobile = useMedia('(max-width: 600px)');
    const isTablet = useMedia('(max-width: 1034px');
    const isLaptop = useMedia('(min-width: 1300px)');
    const isDesktop = useMedia('(min-width: 1500px)');


    console.log(isDark, isMobile, isTablet, isLaptop, isDesktop)


    return (
        <ThemeValuesContext.Provider value={{ theme, checks: { isDark, isMobile, isTablet, isLaptop, isDesktop } }}>
            {children}
        </ThemeValuesContext.Provider>
    );
};

export default ThemeValuesProvider;
