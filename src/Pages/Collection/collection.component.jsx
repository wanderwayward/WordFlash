import { useContext } from 'react';
import { WordsContext } from '../../contexts/words.context';
import { ThemeValuesContext } from '../../contexts/theme-values.context';
import { MdDelete } from "react-icons/md";

import { Grid, Button, IconButton, Typography, Sheet  } from '@mui/joy';

import Word from '../../components/Words/word/word.component';
import Words from '../../components/Words/words.component'
import WordsControl from '../../components/Words/words-control/words-control';

const Collection = () => {

    const { theme, checks } = useContext(ThemeValuesContext);
    const { isDark } = checks;
    const { words, deleteWordFromCollection } = useContext(WordsContext);
    
    const style = {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
      };

      return (
            <Sheet
            variant="soft"
            color="neutral"
            sx={{
                width: "100%",
                height: `calc(100vh - 60px)`,
                display: "flex",
                flexDirection: "column",
                position: 'relative',
                overflowY: 'auto', 
                overflowX: 'hidden', 
            }}
            >
            <WordsControl isDark={isDark} theme={theme} style={style} />
            <Words words={words} deleteWord={deleteWordFromCollection} style={style} checks={checks} theme={theme}/>
         
        </Sheet>
      );
    }
    
    
    export default Collection;