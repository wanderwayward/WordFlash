import { ListItem, IconButton, Typography, Grid } from "@mui/joy";
import { MdDelete } from "react-icons/md";

const Word = ({ word }) => {
    return (
        <ListItem sx={{ width: '80%', py: 1, m:'auto' }}> 
            <Grid lg={10} container spacing={2} alignItems="center" sx={{ width: '100%', m:'auto' }}>
                <Grid xs={3}>
                    <Typography level="h6" sx={{ whiteSpace: 'nowrap' }}>
                        {word.originalWord.toUpperCase()}
                    </Typography>
                </Grid>
                <Grid xs={3}>
                    <Typography level="h6" sx={{ whiteSpace: 'nowrap' }}>
                        {word.englishTranslation.toUpperCase()}
                    </Typography>
                </Grid>
                <Grid xs={6} sx={{ display: 'flex', justifyContent: 'flex-end',  }}>
                    <IconButton>
                        <MdDelete />
                    </IconButton>
                </Grid>
            </Grid>
        </ListItem>
    );
}

export default Word;
