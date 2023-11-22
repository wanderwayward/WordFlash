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
                width: "100%", // Ensure full width
                margin: "auto",
            }}
        >
            {/* First Row */}
            <Grid container justifyContent="center" sx={{ width: '100%' }}>
                <Grid item xs={6} sx={{ textAlign: 'center' }}>
                    <Typography level="h2">
                        Sort 
                    </Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'center' }}>
                    <Typography level="h2">
                        Flash Card View
                    </Typography>
                </Grid>
            </Grid>

            {/* Divider */}
            <Divider sx={{ width: '100%', my: 2 }} />

            {/* Headers Row */}
            <Grid container spacing={2} alignItems="center" sx={{ textAlign:'center', width: '100%' }}>
    <Grid item xs={3}> {/* Adjust to xs={4} if you want equal widths */}
        <Typography level="h2" sx={{ textAlign:'center', whiteSpace: 'nowrap', fontSize: '20px' }}>
            SPANISH
        </Typography>
    </Grid>
    <Grid item xs={3}> {/* Adjust to xs={4} if you want equal widths */}
        <Typography level="h2" sx={{textAlign:'center',  whiteSpace: 'nowrap', fontSize: '20px' }}>
            ENGLISH
        </Typography>
    </Grid>
    <Grid item xs={6}>
        <Typography level="h2" sx={{ textAlign:'center', whiteSpace: 'nowrap', fontSize: '20px' }}>
            MANAGE
        </Typography>
    </Grid>
</Grid>

        </Grid>
    );
}

export default WordsControl;
    