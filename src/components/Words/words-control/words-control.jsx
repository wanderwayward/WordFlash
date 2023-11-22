import { Grid, Typography, Divider } from "@mui/joy";

const WordsControl = () => {
    return (
    <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{
            width: "100%",
            zIndex: 10,
            margin: "auto",
            position: "sticky",
            top: 0
        }}>
        {/* First Row */}
            <Grid container justifyContent="center" sx={{ width: '100%' }}>
                <Grid  xs={6} sx={{ textAlign: 'center' }}>
                    <Typography level="h2">
                        Sort 
                    </Typography>
                </Grid>
                <Grid  xs={6} sx={{ textAlign: 'center' }}>
                    <Typography level="h2">
                        Flash Card View
                    </Typography>
                </Grid>
            </Grid>

            {/* Headers Row */}
            <Grid container spacing={2} alignItems="center" sx={{ textAlign:'center', width: '100%' }}>
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
            <Divider sx={{ width: '100%', my: 2 }} />

        </Grid>
    );
}

export default WordsControl;
    