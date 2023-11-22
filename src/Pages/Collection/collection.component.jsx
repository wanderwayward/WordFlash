import { useContext } from 'react';
import { WordsContext } from '../../contexts/words.context';
import { Box, Typography, List, ListItem } from '@mui/joy';

import Words from '../../components/Words/words.component'
import WordsControl from '../../components/Words/words-control/words-control';
import GeneralLoadingSpinner from '../../components/ui/loading/general-loading-spinner.component';

const Collection = () => {

    const { words } = useContext(WordsContext); 

    
    return (
        <Box
        sx={{
          width: "100%",
          height: "calc(100vh - 60px)", 
          display: "flex",
          marginTop: "60px",
          flexDirection: "column",
          alignItems: "center",
        }}>
            <WordsControl />
            <Words words={words} /> 
        </Box>
    )
}

export default Collection;