import { Grid } from '@mui/joy';
import Word from '../word/word.component';

const ListWords = ({ words, style, checks, deleteWord, wordFontSize, theme, headerPadding }) => {
 return (
    <Grid container direction="column" sx={{ pt: '155px', mx:headerPadding }}>
        {words.map((word, index) => (
            <Word word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize} theme={theme} />    
        ))}
    </Grid>)
}

export default ListWords;