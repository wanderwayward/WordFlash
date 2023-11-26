import { Grid, Typography, Divider, Sheet } from "@mui/joy";

const WordsControl = ({theme}) => {
    return (
        <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{
            backgroundColor: theme.colorSchemes.light.palette.neutral[100], 
            width: "100%",
            position: "fixed",
            top: 80, 
            zIndex: 10, 
            p: 0,
        }}>
            
        {/* First Row */}
            <Grid container justifyContent="center" sx={{ width: '100%' }}>
                <Grid  xs={6} sx={{ textAlign: 'center' }}>
                    <Typography level="h3">
                        Sort 
                    </Typography>
                </Grid>
                <Grid  xs={6} sx={{ textAlign: 'center', paddingRight:15}}>
                    <Typography level="h3">
                        Flash Card View
                    </Typography>
                </Grid>
            </Grid>

            {/* Headers Row */}
            <Grid container spacing={2} alignItems="center" sx={{ textAlign:'center', width: '100%', pt:2, px:2 }}>
                <Grid  xs={4}> 
                    <Typography level="h2" sx={{ textAlign:'center', whiteSpace: 'nowrap', fontSize: '20px' }}>
                        SPANISH
                    </Typography>
                </Grid>
                <Grid  xs={4}> 
                    <Typography level="h2" sx={{textAlign:'center',  whiteSpace: 'nowrap', fontSize: '20px' }}>
                        ENGLISH
                    </Typography>
                </Grid>
                <Grid  xs={4}>
                    <Typography level="h2" sx={{ textAlign:'center', whiteSpace: 'nowrap', fontSize: '20px' }}>
                        MANAGE
                    </Typography>
                </Grid>
            </Grid>
            <Divider sx={{ width: '100%', mt: 1 }} />   

        </Grid>
        
    );
}

export default WordsControl;
    