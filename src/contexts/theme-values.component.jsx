import React from "react";
import  theme from "../utils/theme";
import { useMedia } from 'react-use';
import { ThemeValuesContext } from "./theme-values.context";

const ThemeValuesProvider = ({ children }) => {

    // Media queries matching your specified breakpoints
    const isMobile = useMedia('(max-width: 600px)');
    const isTablet = useMedia('(max-width: 900px');
    const isLaptop = useMedia('(min-width: 1300px)');
    const isDesktop = useMedia('(min-width: 1500px)');


    return (
        <ThemeValuesContext.Provider value={{ theme, checks: { isMobile, isTablet, isLaptop, isDesktop } }}>
            {children}
        </ThemeValuesContext.Provider>
    );
};

export default ThemeValuesProvider;
