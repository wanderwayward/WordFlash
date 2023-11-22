import { CircularProgress, Box } from "@mui/joy";


const GeneralLoadingSpinner = ({checks}) => {
  const {isDark} = checks;

    return (
      <Box 
      aria-label="Loading content, please wait."
      sx={{
        display:'flex', 
        justifyContent:'center', 
        alignItems:'center', 
        height:'100vh'}}>
        <CircularProgress
        variant="soft"
        color={isDark ? "success" : "danger"}        
        />
      </Box>
    );
}


export default GeneralLoadingSpinner;