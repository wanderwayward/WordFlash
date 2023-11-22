import { useContext } from "react";
import { IconButton, Typography, Grid } from "@mui/joy";
import { MdDelete } from "react-icons/md";
import { ThemeValuesContext } from "../../../contexts/theme-values.context";

const Word = ({ word, deleteWord }) => {
    const { checks } = useContext(ThemeValuesContext);
    const { isDark } = checks;

    return (
        <Grid container spacing={2} alignItems="center" sx={{ textAlign: 'center', width: '100%', py: 1 }}>
            <Grid xs={4}>
                <Typography level="h6" sx={{ textAlign: 'center', whiteSpace: 'nowrap' }}>
                    {word.originalWord.toUpperCase()}
                </Typography>
            </Grid>

            <Grid xs={4}> 
                <Typography level="h6" sx={{ textAlign: 'center', whiteSpace: 'nowrap' }}>
                    {word.englishTranslation.toUpperCase()}
                </Typography>
            </Grid>

            <Grid xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
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
