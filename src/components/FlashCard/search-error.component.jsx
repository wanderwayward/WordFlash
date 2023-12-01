import { Grid, Button } from "@mui/joy";
import { StyledTypography } from "../../utils/styledComponents";


const SearchError = ({response}) => {
    return (  
        <Grid container xs={12}>
            <Grid xs={12} sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', pt:2, px: 2}}>
            <StyledTypography color="danger">
                {response.errorMessage}
            </StyledTypography>
            </Grid>
            <Grid xs={12} sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', pt:2, px: 2}}>
            <StyledTypography color="danger">
                {response.alternativeWords.length > 0 ? `Did you mean: ${response.alternativeWords.join(', ')}` : null}
            </StyledTypography>
            
            
            
            </Grid>
        </Grid>
      )
}

export default SearchError;