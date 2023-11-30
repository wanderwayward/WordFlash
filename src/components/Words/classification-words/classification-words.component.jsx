import { Grid, Box, Divider } from "@mui/joy"
import Word from "../word/word.component"
import { StyledTypographyClassification, StyledDivider } from "../../../utils/styledComponents"

const ClassificationWords = ({ isDark, words, style, checks, wordFontSize,  headerPadding, deleteWord, classificationFontsize, theme}) => {


    return (
        <Box sx={{ pt: '155px', px:headerPadding}}>


        {words.adjective.length > 0  ?
            <>
                <Grid container direction="column" >
                    <StyledTypographyClassification level="h4" color={isDark ? "danger" : "success"} variant="plain" sx={{fontSize: classificationFontsize}}> 
                    ADJECTIVES 
                    </StyledTypographyClassification>
                </Grid>
                <Grid container direction="column">
                    {words.adjective.map((word, index) => (
                    <Word word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize} />    
                    ))}
                </Grid>
                <StyledDivider />
            </> 
        : null}


        {words.adverb.length > 0  ?
            <>
                <Grid container direction="column" >
                    <StyledTypographyClassification level="h4" color={isDark ? "danger" : "success"} variant="plain" sx={{fontSize: classificationFontsize}}> 
                        Adverbs
                    </StyledTypographyClassification>
                </Grid>
                <Grid container direction="column">
                    {words.adverb.map((word, index) => (
                    <Word word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize} theme={theme}/>    
                    ))}
                </Grid>
                <StyledDivider />
            </>
        : null}

        {words.article.length > 0  ?
            <>
                <Grid container direction="column" >
                    <StyledTypographyClassification level="h4" color={isDark ? "danger" : "success"} variant="plain" sx={{fontSize: classificationFontsize}}> 
                        Articles
                    </StyledTypographyClassification>
                </Grid>
                <Grid container direction="column">
                    {words.article.map((word, index) => (
                    <Word word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize}  />    
                    ))}
                </Grid>
                <StyledDivider />
            </> 
        : null}
            
        {words.conjunction.length > 0  ?
            <>
                <Grid container direction="column" >
                    <StyledTypographyClassification level="h4" color={isDark ? "danger" : "success"} variant="plain" sx={{fontSize: classificationFontsize}}> 
                        Conjunctions
                    </StyledTypographyClassification>
                </Grid>
                <Grid container direction="column">
                    {words.conjunction.map((word, index) => (
                    <Word word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize} />    
                    ))}
                </Grid>
                <StyledDivider />
            </> 
        : null}

        {words.interjection.length > 0  ?
            <>
                <Grid container direction="column" >
                    <StyledTypographyClassification level="h4" color={isDark ? "danger" : "success"} variant="plain" sx={{fontSize: classificationFontsize}}> 
                        Interjections
                    </StyledTypographyClassification>
                </Grid>
                <Grid container direction="column">
                    {words.interjection.map((word, index) => (
                    <Word word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize} />    
                    ))}
                </Grid>
                <StyledDivider />
            </> 
        : null}

        {words.noun.length > 0  ?
            <>
                <Grid container direction="column" >
                    <StyledTypographyClassification level="h4" color={isDark ? "danger" : "success"} variant="plain" sx={{fontSize: classificationFontsize}}> 
                        Nouns
                    </StyledTypographyClassification>
                </Grid>
                <Grid container direction="column">
                    {words.noun.map((word, index) => (
                    <Word word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize}  />    
                    ))}
                </Grid>
                <StyledDivider />
            </> 
        : null}

        {words.preposition.length > 0  ?
            <>
                <Grid container direction="column" >
                    <StyledTypographyClassification level="h4" color={isDark ? "danger" : "success"} variant="plain" sx={{fontSize: classificationFontsize}}> 
                        Prepositions
                    </StyledTypographyClassification>
                </Grid>
                <Grid container direction="column">
                    {words.preposition.map((word, index) => (
                    <Word word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize}  />    
                    ))}
                </Grid>
                <StyledDivider />
            </> 
        : null}

        {words.pronoun.length > 0  ?
            <>
                <Grid container direction="column" >
                    <StyledTypographyClassification level="h4" color={isDark ? "danger" : "success"} variant="plain" sx={{fontSize: classificationFontsize}}> 
                        Pronouns
                    </StyledTypographyClassification>
                </Grid>
                <Grid container direction="column">
                    {words.pronoun.map((word, index) => (
                    <Word word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize}  />    
                    ))}
                </Grid>
                <StyledDivider />
            </> 
        : null}
        {words.verb.length > 0  ?
            <>
                <Grid container direction="column" >
                    <StyledTypographyClassification level="h4" color={isDark ? "danger" : "success"} variant="plain" sx={{fontSize: classificationFontsize}}> 
                        Verbs
                    </StyledTypographyClassification>
                </Grid>
                <Grid container direction="column">
                    {words.verb.map((word, index) => (
                    <Word word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize}  />    
                    ))}
                </Grid>
                <StyledDivider />
            </> 
        : null}
        
        {words.uncertain.length > 0  ?
            <>
                <Grid container direction="column" >
                    <StyledTypographyClassification level="h4" color={isDark ? "danger" : "success"} variant="plain" sx={{fontSize: classificationFontsize}}> 
                        Uncertain
                    </StyledTypographyClassification>
                </Grid>
                <Grid container direction="column">
                    {words.uncertain.map((word, index) => (
                    <Word word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize} />    
                    ))}
                </Grid>
                <StyledDivider />
            </> 
        : null}
        </Box>
    )
}

export default ClassificationWords;