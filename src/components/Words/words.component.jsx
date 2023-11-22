import { Grid } from '@mui/joy';
import Word from './word/word.component';

const Words = ({ words, deleteWord, checks }) => {

    const {isMobile} = checks;

    return (
        <Grid
        container
        direction="column"
        alignItems="center"
        sx={{
            marginTop: isMobile ?  "30px" : "0px",
            pl:2,
            width: "100%",
        }}>
        {/* Mapping through the words */}
            {words.map((word, index) => (
            <Grid  key={index} sx={{ width: '100%' }}>
                <Word word={word} deleteWord={deleteWord} />
            </Grid>
            ))}
        </Grid>
    )
}

export default Words;
