import { Grid, Typography, Divider, Sheet } from "@mui/joy";

const WordsControl = ({theme, checks}) => {

    const { isDark, isMobile, isTablet, isLaptop } = checks;

    
    const firstRowFontSize = isMobile ? '22px' : isTablet ? '30px' : isLaptop ? '35px' :  '38px';
    const secondRowFontSize = isMobile ? '16px' : isTablet ? '25px' : isLaptop ? '29px' :  '28px';
    const answerPadding = isMobile ? 2 : isTablet ? 4 : isLaptop ? 6 : 8;


    return (
        <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{
            backgroundColor: isDark ? theme.colorSchemes.dark.palette.neutral[800] : theme.colorSchemes.light.palette.neutral[100], 
            width: "100%",
            position: "fixed",
            top: 80, 
            zIndex: 10, 
            p: 0,
        }}>
            
        {/* First Row */}
            <Grid container sx={{ width: '100%', display:'flex', alignItems:'center', textAlign: 'center', justifyContent: 'space-around',   }}>  
                <Typography level="h3" sx={{fontSize:firstRowFontSize}}>
                    Sort 
                </Typography>        
                <Typography level="h3" sx={{fontSize:firstRowFontSize}}>
                    Flash Card View
                </Typography>
            </Grid>

            {/* Headers Row */}
            <Grid container spacing={2} alignItems="center" sx={{ textAlign:'center', width: '100%', pt:2, px:2 }}>
                <Grid  xs={4}> 
                    <Typography level="h2" sx={{ textAlign:'center', whiteSpace: 'nowrap', fontSize: secondRowFontSize }}>
                        SPANISH
                    </Typography>
                </Grid>
                <Grid  xs={4}> 
                    <Typography level="h2" sx={{textAlign:'center',  whiteSpace: 'nowrap', fontSize: secondRowFontSize }}>
                        ENGLISH
                    </Typography>
                </Grid>
                <Grid  xs={4}>
                    <Typography level="h2" sx={{ textAlign:'center', whiteSpace: 'nowrap', fontSize: secondRowFontSize }}>
                        MANAGE
                    </Typography>
                </Grid>
            </Grid>
            <Divider sx={{ width: '100%', mt: 1 }} />   

        </Grid>
        
    );
}

export default WordsControl;
    