import { Grid, Button } from "@mui/joy";
import { StyledTypography } from "../../utils/styledComponents";


const SearchError = ({response, handleSubmit, isMobile}) => {
    return (  
        <Grid container xs={12}>
            <Grid xs={12} sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', pt:2, px: 2}}>
            <StyledTypography color="danger">
                {response.errorMessage}
            </StyledTypography>
            </Grid>
            <Grid xs={12} sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', pt:2, px: 2}}>

            {response.alternativeWords.length > 0 ?
                 
                <>
                 <Grid xs={12} pb={3}>
                    <StyledTypography color="danger">
                        Did you mean? 
                    </StyledTypography>
                </Grid>
                 <Grid xs={12} py={1} sx={{display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
                    {response.alternativeWords.map((word, index) => (
                        <Button key={index} sx={{mx:1}} variant="solid" color="warning" size={isMobile? 'md' : 'lg'} onClick={() => handleSubmit(word)}>{word}</Button>
                    ))}
                </Grid>

                </>


            : null}            
            
            </Grid>
        </Grid>
      )
}

export default SearchError;