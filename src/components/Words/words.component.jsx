import { Grid } from '@mui/joy';
import Word from './word/word.component';

const Words = ({ words, deleteWord, checks }) => {

    const {isMobile} = checks;

    return (
        <Grid container sx={{display:'flex', flexDirection:'row'}}>
        {/* Mapping through the words */}
            {words.map((word, index) => (
                <Word key={index} word={word} deleteWord={deleteWord} />
            ))}
        </Grid>
    )
}

export default Words;
