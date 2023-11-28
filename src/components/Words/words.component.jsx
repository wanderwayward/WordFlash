import { Grid, Typography, Divider} from '@mui/joy';
import Word from './word/word.component';
import GeneralLoadingSpinner from '../ui/loading/general-loading-spinner.component';

const Words = ({ words, deleteWord, style, theme, wordFontSize, headerFontSize, isDark, padding}) => {

    console.log('From words component','wordfontsize', wordFontSize, 'headerfontsize', headerFontSize)



    return (
        <>
            <Grid container sx={{height:'60px', position: 'fixed', top: 130, left: 0, right: 0, zIndex: 1100, backgroundColor: isDark ? theme.colorSchemes.dark.palette.neutral[800] : theme.colorSchemes.light.palette.neutral[100] }}>
                <Grid xs={4} sx={{...style}}>
                <Typography  variant='plain'color={isDark ? "danger" : "primary"} level='h2' sx={{fontSize: headerFontSize, ml:padding}}>SPANISH</Typography>
                </Grid>
                <Grid xs={4} sx={{...style}}>
                <Typography variant='plain'color={isDark ? "danger" : "primary"}  level='h2' sx={{fontSize: headerFontSize}}>ENGLISH</Typography>
                </Grid>
                <Grid xs={4} sx={style}>
                <Typography variant='plain'color={isDark ? "danger" : "primary"}  level='h2' sx={{fontSize: headerFontSize, mr:padding}}>MANAGE</Typography>
                </Grid>
            </Grid>
            <Divider sx={{backgroundColor:theme.colorSchemes.light.palette.primary}} />    
            
            { words ? 
            <Grid container direction="column" sx={{ pt: '140px' }}>
                {words.map((word, index) => (
                <Word word={word} key={index} style={style} isDark={isDark} deleteWord={deleteWord} fontSize={wordFontSize} padding={padding} />    
                ))}
            </Grid> :
            <GeneralLoadingSpinner style={{pt:'140px'}} />
            }	
        </>
    )
}

export default Words;
