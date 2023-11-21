import React from "react";
import  theme from "../utils/theme";
import { useMedia } from 'react-use';
import { ThemeValuesContext } from "./theme-values.context";

const ThemeValuesProvider = ({ children }) => {

    const isDark = useMedia('(prefers-color-scheme: dark)');
    const isMobile = useMedia('(max-width: 767px)'); // Mobile devices
    const isTablet = useMedia('(min-width: 768px) and (max-width: 1024px)'); // Tablets
    const isLaptop = useMedia('(min-width: 1025px) and (max-width: 1440px)'); // Laptops
    const isDesktop = useMedia('(min-width: 1441px)'); // Desktops
    


    console.log( isMobile, isTablet, isLaptop, isDesktop)


    return (
        <ThemeValuesContext.Provider value={{ theme, checks: { isDark, isMobile, isTablet, isLaptop, isDesktop } }}>
            {children}
        </ThemeValuesContext.Provider>
    );
};

export default ThemeValuesProvider;
