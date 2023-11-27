import { Grid, Typography, Divider, Sheet } from "@mui/joy";

const WordsControl = ({theme, checks}) => {

    const { isDark, isMobile, isTablet, isLaptop } = checks;
    const firstRowFontSize = isMobile ? '22px' : isTablet ? '30px' : isLaptop ? '35px' :  '38px';

    return (
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: isDark ? theme.colorSchemes.dark.palette.neutral[800] : theme.colorSchemes.light.palette.neutral[100], 
                width: "100%",
                position: "fixed",
                top: 80, 
                zIndex: 10, 
                height: '60px',
                alignItems: 'center',
                justifyContent: 'space-around'
            }}
        >
            <Grid xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography level="h2" sx={{ fontSize: firstRowFontSize }}>
                    Sort 
                </Typography>
            </Grid>
            <Grid xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography level="h2" sx={{ fontSize: firstRowFontSize }}>
                    Flash Card View
                </Typography>
            </Grid>            
        </Grid>  
    );
}

export default WordsControl;
    