import { IconButton, Typography, Grid } from "@mui/joy";
import { MdDelete } from "react-icons/md";

const Word = ({ word, deleteWord, style, isDark }) => {
    return (
        <Grid container spacing={2} alignItems="center">
            <Grid xs={4} sx={style}>
            <Typography>{word.word.toUpperCase()}</Typography>
            </Grid>
            <Grid xs={4} sx={style}>
            <Typography>{word.englishTranslation.toUpperCase()}</Typography>
            </Grid>
            <Grid xs={4} sx={style}>
            <IconButton
                variant="outlined"
                color={isDark ? "danger" : "warning"}
                onClick={() => deleteWord(word)}
            >
                <MdDelete />
            </IconButton>
            </Grid>
        </Grid>
    );
}

export default Word;
