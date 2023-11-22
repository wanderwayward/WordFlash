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
            <Grid container justifyContent="space-around" sx={{ width: '100%' }}>
                <Grid xs={6}>
                    <Typography level="h2">
                        Sort 
                    </Typography>
                </Grid>
                <Grid xs={6}>
                    <Typography level="h2">
                        Flash Card View
                    </Typography>
                </Grid>
            </Grid>

            {/* Divider */}
            <Divider sx={{ width: '100%', my: 2 }} />

            {/* Headers Row */}
            <Grid lg={10} container spacing={2} alignItems="center" sx={{ textAlign:'center', width: '100%', m:'auto' }}>
                <Grid xs={3}>
                    <Typography level="h2" sx={{ whiteSpace: 'nowrap', fontSize: '20px' }}>
                        SPANISH
                    </Typography>
                </Grid>
                <Grid xs={3}>
                    <Typography level="h2" sx={{ whiteSpace: 'nowrap', fontSize: '20px' }}>
                        ENGLISH
                    </Typography>
                </Grid>
                <Grid xs={6}>
                    <Typography level="h2" sx={{ whiteSpace: 'nowrap', fontSize: '20px' }}>
                        MANAGE
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default WordsControl;
