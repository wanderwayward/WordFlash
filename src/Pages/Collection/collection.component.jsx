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
    const {isMobile, isTablet, isLaptop, isDark} = checks;
    const { words, deleteWordFromCollection } = useContext(WordsContext);

    const controlFontSize = isMobile ? '1rem' : isTablet ? '1.3rem' : isLaptop ? '1.3rem' : '1.8rem';
    const controlMarginL = isMobile ? '' : isTablet ? '6.8rem' : isLaptop ? '11rem' : '17rem';
    const controlMarginR = isMobile ? '3.8rem' : isTablet ? '8.5rem' : isLaptop ? '11.2rem' : '17rem';
    const headerFontSize = isMobile ? '.9rem' : isTablet ? '1.1rem' : isLaptop ? '1.2rem' : '1.5rem';
    const wordFontSize = isMobile ? '.5rem' : isTablet ? '1rem' : isLaptop ? '1.2rem' : '1.3rem';
    const wordsPadding = isMobile ? '.2rem' : ''
    
    const style = {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
      };

    const handleSort = () => {
        console.log('sort');
    }

    const handleView = () => {
        console.log('view');
    }

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
            <WordsControl checks={checks} theme={theme} style={style} fontSize={controlFontSize} handleSort={handleSort} handleView={handleView} />

            <Words words={words} deleteWord={deleteWordFromCollection} style={style} checks={checks} theme={theme} headerFontSize={headerFontSize} wordFontSize={wordFontSize} padding={wordsPadding}/>
         
        </Sheet>
      );
    }
    
    
    export default Collection;