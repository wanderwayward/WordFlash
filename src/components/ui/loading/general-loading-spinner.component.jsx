import { CircularProgress, Box } from "@mui/joy";


const GeneralLoadingSpinner = () => {
    return (
      <Box 
      aria-label="Loading content, please wait."
      sx={{
        display:'flex', 
        justifyContent:'center', 
        alignItems:'center', 
        height:'100vh'}}>
        <CircularProgress />
      </Box>
    );
}


export default GeneralLoadingSpinner;