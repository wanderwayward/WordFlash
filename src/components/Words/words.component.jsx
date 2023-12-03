import { Grid, Typography } from '@mui/joy';
import GeneralLoadingSpinner from '../ui/loading/general-loading-spinner.component';


//list views
import ClassificationWords from './ListViews/classification-words/classification-words.component';
import ListWords from './ListViews/list-words/list-words.component';

//flashcard views
import AlphabeticalFlashCards from './FlashCardViews/alphabetical-flashcards/alphabetical-flashcards.component';
import ClassificationFlashcards from './FlashCardViews/classification-flashcards/classification-flashcards.component';




const Words = ({ words, deleteWord, style, theme, wordFontSize, headerFontSize, checks, classificationFontsize, headerPadding, sort, view}) => {

    console.log(sort, view)

    const {isMobile, isTablet, isLaptop, isDark} = checks;

    const renderWords = () => {
        if (words) {
            switch (`${sort}-${view}`) {
                case 'Alphabetical-List':
                    return <ListWords words={words} style={style} checks={checks} deleteWord={deleteWord} wordFontSize={wordFontSize} theme={theme} headerPadding={headerPadding}/>;
                case 'Classification-List':
                    return  <ClassificationWords isDark={isDark} words={words} style={style} checks={checks} theme={theme}  wordFontSize={wordFontSize} headerPadding={headerPadding} deleteWord={deleteWord} classificationFontsize={classificationFontsize}/>
                case 'Alphabetical-Flashcard':
                    return <AlphabeticalFlashCards words={words} style={style} checks={checks} deleteWord={deleteWord} wordFontSize={wordFontSize} theme={theme} headerPadding={headerPadding}/>;
                case 'Classification-Flashcard':
                    return <ClassificationFlashcards  words={words} style={style} checks={checks} theme={theme}  wordFontSize={wordFontSize} headerPadding={headerPadding} deleteWord={deleteWord} classificationFontsize={classificationFontsize} />;
                default:
                    return <GeneralLoadingSpinner style={{ pt: '175px' }} />;
            }
        }
    };


    


    return (
        <>
            <Grid container sx={{height:'48px', position: 'fixed', top: isMobile?  148 : 128, left: 0, right: 0, zIndex: 1100, backgroundColor: isDark ? theme.colorSchemes.dark.palette.neutral[800] : theme.colorSchemes.light.palette.neutral[100], px: headerPadding }}>
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
            {renderWords()}
        </>
    )
}

export default Words;
