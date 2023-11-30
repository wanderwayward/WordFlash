import { useContext } from "react";
import { CircularProgress, Sheet } from "@mui/joy";
import { ThemeValuesContext } from "../../../contexts/theme-values.context";

const GeneralLoadingSpinner = () => {
    const { checks, theme } = useContext(ThemeValuesContext);
    console.log("Spinner Theme Context:", { checks, theme });

    const { isDark } = checks;
    return (
      <Sheet 
      color="neutral"
      variant="soft"
      aria-label="Loading content, please wait."
      sx={{
        backgroundColor: isDark? theme.colorSchemes.dark.palette.neutral[800] : theme.colorSchemes.light.palette.neutral[100],
        width:'100%',
        margin: 'auto',
        display:'flex', 
        justifyContent:'center', 
        alignItems:'center', 
        overflow:'hidden',
        height:'100vh'}}>
        <CircularProgress
        variant="soft"
        color={isDark ? "success" : "danger"}        
        />
      </Sheet>
    );
}


export default GeneralLoadingSpinner;