import { ListItem, IconButton, Typography, Grid } from "@mui/joy";
import { MdDelete } from "react-icons/md";

const Word = ({ word }) => {
    return (
        <ListItem sx={{ width: '100%', py: 1, m:'auto' }}> 
            <Grid container spacing={2} alignItems="center" sx={{ textAlign:'center', width: '100%' }}>
    <Grid item xs={3}> {/* Adjust to xs={4} if you've changed the header to xs={4} */}
        <Typography level="h6" sx={{ textAlign:'center', whiteSpace: 'nowrap' }}>
            {word.originalWord.toUpperCase()}
        </Typography>
    </Grid>
    <Grid item xs={3}> {/* Adjust to xs={4} if you've changed the header to xs={4} */}
        <Typography level="h6" sx={{textAlign:'center', whiteSpace:'nowrap' }}>
            {word.englishTranslation.toUpperCase()}
        </Typography>
    </Grid>
    <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
        <IconButton>
            <MdDelete />
        </IconButton>
    </Grid>
</Grid>

        </ListItem>
    );
}

export default Word;
