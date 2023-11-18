import { CircularProgress, Box } from "@mui/joy";


const GeneralLoadingSpinner = () => {
    return (
      <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
        <CircularProgress color="warning" />
      </Box>
    );
}


export default GeneralLoadingSpinner;