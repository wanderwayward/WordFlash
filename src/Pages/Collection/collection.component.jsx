import { useContext } from 'react';
import { WordsContext } from '../../contexts/words.context';
import { ThemeValuesContext } from '../../contexts/theme-values.context';

import { Grid } from '@mui/joy';

import Words from '../../components/Words/words.component'
import WordsControl from '../../components/Words/words-control/words-control';

const Collection = () => {

    const { theme, checks } = useContext(ThemeValuesContext);
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
            paddingTop: "100px",
        }}>
                <WordsControl theme={theme} />
                <Words checks={checks} words={words} deleteWord={deleteWordFromCollection} />
        </Grid>
    )
}


export default Collection;