import { Grid } from "@mui/joy"
import Word from "../word/word.component"

const ClassificationWords = ({ words }) => {
    return (
        <Grid container direction="column" sx={{ pt: '155px' }}>
            {words.map((word, index) => (
            <Word word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize} padding={padding} />    
            ))}
        </Grid>
    )
}