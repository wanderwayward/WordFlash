import { Grid, Button } from "@mui/joy";

const WordsControl = ({theme, isDark, style}) => {

    return (
        <Grid container sx={{height:'60px', position: 'fixed', top: 70, left: 0, right: 0, zIndex: 1100, backgroundColor: isDark ? theme.colorSchemes.dark.palette.neutral[800] : theme.colorSchemes.light.palette.neutral[100] }}>
            <Grid xs={6} sx={style}>
            <Button
            variant='soft'
            color='neutral'>
                SORT
            </Button>
            </Grid>
            <Grid xs={6} sx={style}>
            <Button
            variant='soft'
            color='neutral'>
                FLASH CARD VIEW
            </Button>
            </Grid>
        </Grid>
    );
}

export default WordsControl;
    