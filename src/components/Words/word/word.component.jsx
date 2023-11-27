import { useContext } from "react";
import { IconButton, Typography, Grid } from "@mui/joy";
import { MdDelete } from "react-icons/md";
import { ThemeValuesContext } from "../../../contexts/theme-values.context";

const Word = ({ word, deleteWord }) => {
    const { checks } = useContext(ThemeValuesContext);
    const { isDark } = checks;

    return (
        <>
            <Grid xs={8} sx={{display:'flex', justifyContent:'space-around', alignItems:'center', px:5}}>
                <Typography level="h6" >
                    {word.word.toUpperCase()}
                </Typography>

                <Typography level="h6">
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
        </>
    );
}

export default Word;
