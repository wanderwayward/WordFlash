import { Grid, Box, Divider } from "@mui/joy"
import Word from "../word/word.component"
import { StyledTypography, StyledDivider } from "../../../utils/styledComponents"

const ClassificationWords = ({ words, style, checks, wordFontSize, padding, deleteWord }) => {

    console.log("words", words)

    return (
        <Box sx={{ pt: '155px'}}>


        {words.adjective.length > 0  ?
            <>
                <Grid container direction="column" >
                    <StyledTypography level="h4"> Adjectives </StyledTypography>
                </Grid>
                <Grid container direction="column">
                    {words.adjective.map((word, index) => (
                    <Word word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize} padding={padding} />    
                    ))}
                </Grid>
                <StyledDivider />
            </> 
        : null}


        {words.adverb.length > 0  ?
            <>
                <Grid container direction="column" >
                    <StyledTypography level="h4"> Adverbs </StyledTypography>
                </Grid>
                <Grid container direction="column">
                    {words.adverb.map((word, index) => (
                    <Word word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize} padding={padding} />    
                    ))}
                </Grid>
                <StyledDivider />
            </>
        : null}

        {words.article.length > 0  ?
            <>
                <Grid container direction="column" >
                    <StyledTypography level="h4"> Articles </StyledTypography>
                </Grid>
                <Grid container direction="column">
                    {words.article.map((word, index) => (
                    <Word word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize} padding={padding} />    
                    ))}
                </Grid>
                <StyledDivider />
            </> 
        : null}
            
        {words.conjunction.length > 0  ?
            <>
                <Grid container direction="column" >
                    <StyledTypography level="h4"> Conjunctions </StyledTypography>
                </Grid>
                <Grid container direction="column">
                    {words.conjunction.map((word, index) => (
                    <Word word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize} padding={padding} />    
                    ))}
                </Grid>
                <StyledDivider />
            </> 
        : null}

        {words.interjection.length > 0  ?
            <>
                <Grid container direction="column" >
                    <StyledTypography level="h4"> Interjections </StyledTypography>
                </Grid>
                <Grid container direction="column">
                    {words.interjection.map((word, index) => (
                    <Word word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize} padding={padding} />    
                    ))}
                </Grid>
                <StyledDivider />
            </> 
        : null}

        {words.noun.length > 0  ?
            <>
                <Grid container direction="column" >
                    <StyledTypography level="h4"> Nouns </StyledTypography>
                </Grid>
                <Grid container direction="column">
                    {words.noun.map((word, index) => (
                    <Word word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize} padding={padding} />    
                    ))}
                </Grid>
                <StyledDivider />
            </> 
        : null}

        {words.preposition.length > 0  ?
            <>
                <Grid container direction="column" >
                    <StyledTypography level="h4"> Prepositions </StyledTypography>
                </Grid>
                <Grid container direction="column">
                    {words.preposition.map((word, index) => (
                    <Word word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize} padding={padding} />    
                    ))}
                </Grid>
                <StyledDivider />
            </> 
        : null}

        {words.pronoun.length > 0  ?
            <>
                <Grid container direction="column" >
                    <StyledTypography level="h4"> Pronouns </StyledTypography>
                </Grid>
                <Grid container direction="column">
                    {words.pronoun.map((word, index) => (
                    <Word word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize} padding={padding} />    
                    ))}
                </Grid>
                <StyledDivider />
            </> 
        : null}
        {words.verb.length > 0  ?
            <>
                <Grid container direction="column" >
                    <StyledTypography level="h4"> Verbs </StyledTypography>
                </Grid>
                <Grid container direction="column">
                    {words.verb.map((word, index) => (
                    <Word word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize} padding={padding} />    
                    ))}
                </Grid>
                <StyledDivider />
            </> 
        : null}
        
        {words.uncertain.length > 0  ?
            <>
                <Grid container direction="column" >
                    <StyledTypography level="h4"> Uncertain </StyledTypography>
                </Grid>
                <Grid container direction="column">
                    {words.uncertain.map((word, index) => (
                    <Word word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize} padding={padding} />    
                    ))}
                </Grid>
                <StyledDivider />
            </> 
        : null}
        </Box>
    )
}

export default ClassificationWords;