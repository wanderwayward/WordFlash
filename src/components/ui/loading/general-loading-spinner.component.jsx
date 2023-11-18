import { CircularProgress, Box } from "@mui/material";

const GeneralLoadingSpinner = () => {
    return (
      <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
        <CircularProgress color="secondary" />
      </Box>
    );
}


export default GeneralLoadingSpinner;