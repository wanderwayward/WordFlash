import { useContext } from 'react';
import { WordsContext } from '../../contexts/words.context';
import { Box, Grid } from '@mui/joy';

import Words from '../../components/Words/words.component'
import WordsControl from '../../components/Words/words-control/words-control';

const Collection = () => {
    const { words, deleteWordFromCollection } = useContext(WordsContext);
    
    return (
        <Grid
        container
        sx={{
            width: "100%",
            height: "calc(100vh - 60px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "40px",
        }}>
            <Grid  sx={{ width: "100%" }}>
                <WordsControl />
            </Grid>
            <Grid  sx={{ width: "100%" }}>
                <Words words={words} deleteWord={deleteWordFromCollection} />
            </Grid>
        </Grid>
    )
}


export default Collection;