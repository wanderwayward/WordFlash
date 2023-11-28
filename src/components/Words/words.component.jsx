import { Grid, Typography, Divider, IconButton} from '@mui/joy';
import Word from './word/word.component';

const Words = ({ words, deleteWord, checks, style, theme }) => {

    const {isMobile, isTablet, isLaptop, isDark} = checks;

    return (
        <>
            <Grid container sx={{height:'60px', position: 'fixed', top: 130, left: 0, right: 0, zIndex: 1100, backgroundColor: isDark ? theme.colorSchemes.dark.palette.neutral[800] : theme.colorSchemes.light.palette.neutral[100] }}>
                <Grid xs={4} sx={style}>
                <Typography>SPANISH</Typography>
                </Grid>
                <Grid xs={4} sx={style}>
                <Typography>ENGLISH</Typography>
                </Grid>
                <Grid xs={4} sx={style}>
                <Typography>MANAGE</Typography>
                </Grid>
            </Grid>    
            
            <Grid container direction="column" sx={{ pt: '140px', px: 2 }}>
                {words.map((word, index) => (
                <Word word={word} key={index} style={style} isDark={isDark} deleteWord={deleteWord} />    
                ))}
            </Grid>
        </>
    )
}

export default Words;
