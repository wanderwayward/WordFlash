import { IconButton, Grid } from "@mui/joy";
import { MdDelete } from "react-icons/md";

import { StyledTypographyWord } from "../../../utils/styledComponents";

const Word = ({ word, deleteWord, style, checks, theme, fontSize }) => {

    const { isDark} = checks;

    return (
        <Grid container alignItems="center" sx={{py:1, '&:hover': {
            backgroundColor: isDark ? theme.colorSchemes.dark.palette.success[800] : theme.colorSchemes.light.palette.primary[100]  
        },}}>
            <Grid xs={4} sx={style}>
                <StyledTypographyWord variant="plain" color={isDark ? "primary" : "danger"} sx={{fontSize:fontSize, }}>
                    {word.originalWord.toUpperCase()}
                </StyledTypographyWord>
            </Grid>
            <Grid xs={4} sx={style}>
                <StyledTypographyWord variant="plain" color={isDark ? "primary" : "danger"} sx={{fontSize:fontSize, }}>
                    {word.englishTranslation.toUpperCase()}
                </StyledTypographyWord>
            </Grid>
            <Grid xs={4} sx={style}>
                <IconButton
                    variant="outlined"
                    color={isDark ? "danger" : "warning"}
                    onClick={() => deleteWord(word)}
                    sx={{
                        height: '40px',
                        width: '40px',
                        fontSize: '1em',
                    }}                
                >
                    <MdDelete/>
                </IconButton>
            </Grid>
        </Grid>
    );
}

export default Word;
