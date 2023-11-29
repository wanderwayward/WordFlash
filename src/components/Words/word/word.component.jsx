import { IconButton, Typography, Grid } from "@mui/joy";
import { MdDelete } from "react-icons/md";

const Word = ({ word, deleteWord, style, checks, fontSize, padding }) => {

    const {isMobile, isTablet, isLaptop, isDark} = checks;

    return (
        <Grid container alignItems="center" sx={{py:1}}>
            <Grid xs={4} sx={style}>
                <Typography variant="plain" color={isDark ? "primary" : "danger"} sx={{ml: padding, fontSize:fontSize, fontWeight:500, textAlign:'center', }}>
                    {word.originalWord.toUpperCase()}
                </Typography>
            </Grid>
            <Grid xs={4} sx={style}>
                <Typography variant="plain" color={isDark ? "primary" : "danger"} sx={{ml: padding, fontSize:fontSize, fontWeight:500, textAlign:'center', }}>
                    {word.englishTranslation.toUpperCase()}
                </Typography>
            </Grid>
            <Grid xs={4} sx={style}>
                <IconButton
                    variant="outlined"
                    color={isDark ? "danger" : "warning"}
                    onClick={() => deleteWord(word)}
                    sx={{
                        fontSize: '1em',
                        mr: isMobile ? '' : padding,
                    }}                
                >
                    <MdDelete/>
                </IconButton>
            </Grid>
        </Grid>
    );
}

export default Word;
