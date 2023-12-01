import { Box, Grid } from "@mui/joy"
import { StyledTypographyClassification, StyledDivider } from "../../../../utils/styledComponents"
import WordFlashcardView from "../word-flashcard-view/word-flashcard-view.component"

const ClassificationFlashcards = ({ isDark, words, style, checks, wordFontSize,  headerPadding, deleteWord, classificationFontsize, theme}) => {


    return (
        <Box sx={{ pt: '155px', px:headerPadding}}>


        {words.adjective.length > 0  ?
            <>
                <Grid container direction="column" >
                    <StyledTypographyClassification level="h4" color={isDark ? "danger" : "success"} variant="plain" sx={{fontSize: classificationFontsize}}> 
                    ADJECTIVES 
                    </StyledTypographyClassification>
                </Grid>
                <Grid container spacing={3}>
                    {words.adjective.map((word, index) => (
                        <Grid xs={12} sm={6} lg={3} key={index} sx={{margin:'auto'}}>
                            <WordFlashcardView word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize} theme={theme} />
                        </Grid>    
                    ))}
                </Grid> 
                <StyledDivider />
            </> 
        : null}


        {words.adverb.length > 0  ?
            <>
                <Grid container direction="column" >
                    <StyledTypographyClassification level="h4" color={isDark ? "danger" : "success"} variant="plain" sx={{fontSize: classificationFontsize}}> 
                        ADVERBS
                    </StyledTypographyClassification>
                </Grid>
                <Grid container spacing={3}>
                    {words.adverb.map((word, index) => (
                        <Grid xs={12} sm={6} lg={3} key={index} sx={{margin:'auto'}}>
                            <WordFlashcardView word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize} theme={theme} />
                        </Grid>    
                    ))}
                </Grid> 
                <StyledDivider />
            </>
        : null}

        {words.article.length > 0  ?
            <>
                <Grid container direction="column" >
                    <StyledTypographyClassification level="h4" color={isDark ? "danger" : "success"} variant="plain" sx={{fontSize: classificationFontsize}}> 
                        ARTICLES
                    </StyledTypographyClassification>
                </Grid>
                <Grid container spacing={3}>
                    {words.article.map((word, index) => (
                        <Grid xs={12} sm={6} lg={3} key={index} sx={{margin:'auto'}}>
                            <WordFlashcardView word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize} theme={theme} />
                        </Grid>    
                    ))}
                </Grid> 
                <StyledDivider />
            </> 
        : null}
            
        {words.conjunction.length > 0  ?
            <>
                <Grid container direction="column" >
                    <StyledTypographyClassification level="h4" color={isDark ? "danger" : "success"} variant="plain" sx={{fontSize: classificationFontsize}}> 
                        CONJUNCTIONS
                    </StyledTypographyClassification>
                </Grid>
                <Grid container spacing={3}>
                    {words.conjunction.map((word, index) => (
                        <Grid xs={12} sm={6} lg={3} key={index} sx={{margin:'auto'}}>
                            <WordFlashcardView word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize} theme={theme} />
                        </Grid>    
                    ))}
                </Grid> 
                <StyledDivider />
            </> 
        : null}

        {words.expression.length > 0  ?
            <>
                <Grid container direction="column" >
                    <StyledTypographyClassification level="h4" color={isDark ? "danger" : "success"} variant="plain" sx={{fontSize: classificationFontsize}}> 
                        EXPRESSIONS
                    </StyledTypographyClassification>
                </Grid>
                <Grid container spacing={3}>
                    {words.expression.map((word, index) => (
                        <Grid xs={12} sm={6} lg={3} key={index} sx={{margin:'auto'}}>
                            <WordFlashcardView word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize} theme={theme} />
                        </Grid>    
                    ))}
                </Grid> 
                <StyledDivider />
            </> 
        : null}

        {words.interjection.length > 0  ?
            <>
                <Grid container direction="column" >
                    <StyledTypographyClassification level="h4" color={isDark ? "danger" : "success"} variant="plain" sx={{fontSize: classificationFontsize}}> 
                        INTERJECTIONS
                    </StyledTypographyClassification>
                </Grid>
                <Grid container spacing={3}>
                    {words.interjection.map((word, index) => (
                        <Grid xs={12} sm={6} lg={3} key={index} sx={{margin:'auto'}}>
                            <WordFlashcardView word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize} theme={theme} />
                        </Grid>    
                    ))}
                </Grid> 
                <StyledDivider />
            </> 
        : null}

        {words.noun.length > 0  ?
            <>
                <Grid container direction="column" >
                    <StyledTypographyClassification level="h4" color={isDark ? "danger" : "success"} variant="plain" sx={{fontSize: classificationFontsize}}> 
                        NOUNS
                    </StyledTypographyClassification>
                </Grid>
                <Grid container spacing={3}>
                    {words.noun.map((word, index) => (
                        <Grid xs={12} sm={6} lg={3} key={index} sx={{margin:'auto'}}>
                            <WordFlashcardView word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize} theme={theme} />
                        </Grid>    
                    ))}
                </Grid> 
                <StyledDivider />
            </> 
        : null}

        {words.preposition.length > 0  ?
            <>
                <Grid container direction="column" >
                    <StyledTypographyClassification level="h4" color={isDark ? "danger" : "success"} variant="plain" sx={{fontSize: classificationFontsize}}> 
                        PREPOSITIONS
                    </StyledTypographyClassification>
                </Grid>
                <Grid container spacing={3}>
                    {words.preposition.map((word, index) => (
                        <Grid xs={12} sm={6} lg={3} key={index} sx={{margin:'auto'}}>
                            <WordFlashcardView word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize} theme={theme} />
                        </Grid>    
                    ))}
                </Grid> 
                <StyledDivider />
            </> 
        : null}

        {words.pronoun.length > 0  ?
            <>
                <Grid container direction="column" >
                    <StyledTypographyClassification level="h4" color={isDark ? "danger" : "success"} variant="plain" sx={{fontSize: classificationFontsize}}> 
                        PRONOUNS
                    </StyledTypographyClassification>
                </Grid>
                <Grid container spacing={3}>
                    {words.pronoun.map((word, index) => (
                        <Grid xs={12} sm={6} lg={3} key={index} sx={{margin:'auto'}}>
                            <WordFlashcardView word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize} theme={theme} />
                        </Grid>    
                    ))}
                </Grid> 
                <StyledDivider />
            </> 
        : null}
        {words.verb.length > 0  ?
            <>
                <Grid container direction="column" >
                    <StyledTypographyClassification level="h4" color={isDark ? "danger" : "success"} variant="plain" sx={{fontSize: classificationFontsize}}> 
                        VERBS
                    </StyledTypographyClassification>
                </Grid>
                <Grid container spacing={3}>
                    {words.ver.map((word, index) => (
                        <Grid xs={12} sm={6} lg={3} key={index} sx={{margin:'auto'}}>
                            <WordFlashcardView word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize} theme={theme} />
                        </Grid>    
                    ))}
                </Grid> 
                <StyledDivider />
            </> 
        : null}

        </Box>
    )
}

export default ClassificationFlashcards