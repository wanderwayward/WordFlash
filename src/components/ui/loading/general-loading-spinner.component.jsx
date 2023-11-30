import { useContext } from "react";
import { CircularProgress, Sheet } from "@mui/joy";
import { ThemeValuesContext } from "../../../contexts/theme-values.context";

const GeneralLoadingSpinner = () => {
    const { checks, theme } = useContext(ThemeValuesContext);
    const { isDark } = checks;
    return (
      <Sheet 
      color="neutral"
      variant="soft"
      aria-label="Loading content, please wait."
      sx={{
        backgroundColor: isDark? theme.colorSchemes.dark.palette.neutral[800] : theme.colorSchemes.light.palette.neutral[100],
        width:'100vw',
        margin: '0',
        display:'flex', 
        justifyContent:'center', 
        alignItems:'center', 
        height:'100vh'}}>
        <CircularProgress
        variant="soft"
        color={isDark ? "success" : "danger"}        
        />
      </Sheet>
    );
}


export default GeneralLoadingSpinner;