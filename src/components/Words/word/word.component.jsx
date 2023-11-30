import { IconButton, Grid } from "@mui/joy";
import { MdDelete } from "react-icons/md";

import { StyledTypographyWord } from "../../../utils/styledComponents";

const Word = ({ word, deleteWord, style, checks, fontSize }) => {

    const {isMobile, isTablet, isLaptop, isDark} = checks;

    return (
        <Grid container alignItems="center" sx={{py:1, '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)', 
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
