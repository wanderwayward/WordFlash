import { Grid, Typography, Divider } from '@mui/joy';
import ClassificationWords from './classification-words/classification-words.component';
import Word from './word/word.component';

import GeneralLoadingSpinner from '../ui/loading/general-loading-spinner.component';
import { StyledDivider } from '../../utils/styledComponents';

const Words = ({ words, deleteWord, style, theme, wordFontSize, headerFontSize, checks, classificationFontsize, headerPadding, sort, open, handleModal}) => {

    const {isMobile, isTablet, isLaptop, isDark} = checks;


3


    return (
        <>
            <Grid container sx={{height:'48px', position: 'fixed', top: isMobile?  153 : 128, left: 0, right: 0, zIndex: 1100, backgroundColor: isDark ? theme.colorSchemes.dark.palette.neutral[800] : theme.colorSchemes.light.palette.neutral[100], px: headerPadding }}>
                <Grid xs={4} sx={{...style}}>
                <Typography color={isDark ? "danger" : "primary"} level='h2'  sx={{fontSize: headerFontSize,}}>SPANISH</Typography>
                </Grid>
                <Grid xs={4} sx={{...style}}>
                <Typography  color={isDark ? "danger" : "primary"}  level='h2' sx={{fontSize: headerFontSize,   }}>ENGLISH</Typography>
                </Grid>
                <Grid xs={4} sx={style}>
                <Typography color={isDark ? "danger" : "primary"}  level='h2' sx={{fontSize: headerFontSize, }}>MANAGE</Typography>
                </Grid>
            </Grid>
            
            { words && sort === 'Alphabetical' ? 
            <Grid container direction="column" sx={{ pt: '155px', mx:headerPadding }}>
                {words.map((word, index) => (
                <Word word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize} theme={theme} open={open} handleModal={handleModal}  />    
                ))}
            </Grid> : sort === 'Classification' ?
            <ClassificationWords isDark={isDark} words={words} style={style} checks={checks} theme={theme}  wordFontSize={wordFontSize} headerPadding={headerPadding} deleteWord={deleteWord} classificationFontsize={classificationFontsize}/>
            :
            <GeneralLoadingSpinner style={{pt:'175px'}} />
            }	
        </>
    )
}

export default Words;
