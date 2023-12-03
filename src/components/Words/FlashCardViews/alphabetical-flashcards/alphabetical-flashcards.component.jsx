import { Grid, Box} from "@mui/joy";
import WordFlashcardView from "../word-flashcard-view/word-flashcard-view.component";

const AlphabeticalFlashCards = ({ words, style, checks, deleteWord, wordFontSize, theme}) => {

    const {isMobile, isTablet, isLaptop} = checks;

    return (
        <Grid container spacing={3} sx={{ pt: '155px', mx: isMobile ? '.5rem' : isTablet ? '2.5rem' : isLaptop ? '4rem' : '7.8em' }}>
            {words.map((word, index) => (
                <Grid xs={6} sm={4} md={3} lg={2} key={index} sx={{margin:'auto'}}>
                    <WordFlashcardView word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize} theme={theme} />
                </Grid>    
            ))}
        </Grid> 
    )
}

export default AlphabeticalFlashCards;