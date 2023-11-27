import { useContext } from "react";
import { IconButton, Typography, Grid } from "@mui/joy";
import { MdDelete } from "react-icons/md";
import { ThemeValuesContext } from "../../../contexts/theme-values.context";

const Word = ({ word, deleteWord }) => {
    const { checks } = useContext(ThemeValuesContext);
    const { isDark } = checks;

    return (
        
        <Grid sx={{ width: '100%', display:'flex', alignItems:'center', textAlign: 'center', justifyContent: 'space-around' }}>  
            <Grid  xs={4}> 
                <Typography level="h3" sx={{ textAlign:'center',   }}>
                    {word.word.toUpperCase()}
                </Typography>
            </Grid>
            <Grid  xs={4}> 
                <Typography level="h3" sx={{textAlign:'center',   }}>
                {word.englishTranslation.toUpperCase()}
                </Typography>
            </Grid>
            <Grid  xs={4}>
                <Typography level="h3" sx={{ textAlign:'center', }}>
                <IconButton 
                        variant="outlined" 
                        color={isDark ? "danger" : "warning"}
                        onClick={() => deleteWord(word)}
                    >
                        <MdDelete />
                    </IconButton>
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Word;
