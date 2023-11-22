import { useContext } from "react";
import { ListItem, IconButton, Typography, Grid, Divider } from "@mui/joy";
import { MdDelete } from "react-icons/md";
import { ThemeValuesContext } from "../../../contexts/theme-values.context"
const Word = ({ word}) => {

    const { checks } = useContext(ThemeValuesContext);


    const { isDark } = checks;

    return (
        <ListItem sx={{ width: '100%', py: 1, m:'auto' }}> 
            <Grid container spacing={2} alignItems="center" sx={{ textAlign:'center', width: '100%' }}>
    <Grid item xs={4}>
        <Typography level="h6" sx={{ textAlign:'center', whiteSpace: 'nowrap' }}>
            {word.originalWord.toUpperCase()}
        </Typography>
        
    </Grid>

    <Grid item xs={4}> 
        <Typography level="h6" sx={{textAlign:'center', whiteSpace:'nowrap' }}>
            {word.englishTranslation.toUpperCase()}
        </Typography>
    </Grid>
    <Grid item xs={4} pl={5} sx={{ display: 'flex', justifyContent: 'center',  }}>
        <IconButton variant="outlined" color={isDark ? 
        "danger" : "warning"}>
            <MdDelete />
        </IconButton>
    </Grid>
</Grid>

        </ListItem>
    );
}

export default Word;


