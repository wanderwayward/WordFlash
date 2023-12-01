import { Grid, Box} from "@mui/joy";
import WordFlashcardView from "../word-flashcard-view/word-flashcard-view.component";

const AlphabeticalFlashCards = ({ words, style, checks, deleteWord, wordFontSize, theme}) => {
    return (
        <Grid container spacing={3}>
            {words.map((word, index) => (
                <Grid xs={12} sm={6} lg={3} key={index} sx={{margin:'auto'}}>
                    <WordFlashcardView word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize} theme={theme} />
                </Grid>    
            ))}
        </Grid> 
    )
}

export default AlphabeticalFlashCards;