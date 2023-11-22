import { useContext } from "react";
import { CircularProgress, Sheet } from "@mui/joy";
import { ThemeValuesContext } from "../../../contexts/theme-values.context";

const GeneralLoadingSpinner = () => {
    const { checks } = useContext(ThemeValuesContext);
    const { isDark } = checks;
    return (
      <Sheet 
      color="neutral"
      variant="soft"
      aria-label="Loading content, please wait."
      sx={{
        width:'100vw',
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