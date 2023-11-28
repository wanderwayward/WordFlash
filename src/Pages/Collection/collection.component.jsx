import { useContext } from 'react';
import { WordsContext } from '../../contexts/words.context';
import { ThemeValuesContext } from '../../contexts/theme-values.context';
import { MdDelete } from "react-icons/md";

import { Grid, Button, IconButton, Typography, Sheet  } from '@mui/joy';

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
            {/* Fixed header for SORT and FLASH CARD VIEW */}
            <Grid container sx={{height:'60px', position: 'fixed', top: 70, left: 0, right: 0, zIndex: 1100, backgroundColor: isDark ? theme.colorSchemes.dark.palette.neutral[800] : theme.colorSchemes.light.palette.neutral[100] }}>
                <Grid xs={6} sx={style}>
                <Button
                    variant='soft'
                    color='neutral'>
                    SORT
                </Button>
                </Grid>
                <Grid xs={6} sx={style}>
                <Button
                variant='soft'
                color='neutral'>
                    FLASH CARD VIEW
                </Button>
                </Grid>
            </Grid>
            {/* Fixed header for SPANISH, ENGLISH, and MANAGE */}
            <Grid container sx={{height:'60px', position: 'fixed', top: 130, left: 0, right: 0, zIndex: 1100, backgroundColor: isDark ? theme.colorSchemes.dark.palette.neutral[800] : theme.colorSchemes.light.palette.neutral[100] }}>
                    <Grid xs={4} sx={style}>
                    <Typography>SPANISH</Typography>
                    </Grid>
                    <Grid xs={4} sx={style}>
                    <Typography>ENGLISH</Typography>
                    </Grid>
                    <Grid xs={4} sx={style}>
                    <Typography>MANAGE</Typography>
                    </Grid>
                </Grid>    
              {/* Word list starts below the fixed headers */}
            <Grid container direction="column" sx={{ pt: '140px', px: 2 }}>
                {words.map((word, index) => (
                <>
                <Grid container key={index} spacing={2} alignItems="center">
                    <Grid xs={4} sx={style}>
                    <Typography>{word.word}</Typography>
                    </Grid>
                    <Grid xs={4} sx={style}>
                    <Typography>{word.englishTranslation}</Typography>
                    </Grid>
                    <Grid xs={4} sx={{ ...style, justifyContent: 'flex-end' }}>
                    <IconButton
                        variant="outlined"
                        color={isDark ? "danger" : "warning"}
                        onClick={() => deleteWordFromCollection(word)}
                    >
                        <MdDelete />
                    </IconButton>
                    </Grid>
                </Grid>

                <Grid container key={index} spacing={2} alignItems="center">
                    <Grid xs={4} sx={style}>
                    <Typography>{word.word}</Typography>
                    </Grid>
                    <Grid xs={4} sx={style}>
                    <Typography>{word.englishTranslation}</Typography>
                    </Grid>
                    <Grid xs={4} sx={{ ...style, justifyContent: 'flex-end' }}>
                    <IconButton
                        variant="outlined"
                        color={isDark ? "danger" : "warning"}
                        onClick={() => deleteWordFromCollection(word)}
                    >
                        <MdDelete />
                    </IconButton>
                    </Grid>
                </Grid>
                <Grid container key={index} spacing={2} alignItems="center">
                    <Grid xs={4} sx={style}>
                    <Typography>{word.word}</Typography>
                    </Grid>
                    <Grid xs={4} sx={style}>
                    <Typography>{word.englishTranslation}</Typography>
                    </Grid>
                    <Grid xs={4} sx={{ ...style, justifyContent: 'flex-end' }}>
                    <IconButton
                        variant="outlined"
                        color={isDark ? "danger" : "warning"}
                        onClick={() => deleteWordFromCollection(word)}
                    >
                        <MdDelete />
                    </IconButton>
                    </Grid>
                </Grid>
                <Grid container key={index} spacing={2} alignItems="center">
                    <Grid xs={4} sx={style}>
                    <Typography>{word.word}</Typography>
                    </Grid>
                    <Grid xs={4} sx={style}>
                    <Typography>{word.englishTranslation}</Typography>
                    </Grid>
                    <Grid xs={4} sx={{ ...style, justifyContent: 'flex-end' }}>
                    <IconButton
                        variant="outlined"
                        color={isDark ? "danger" : "warning"}
                        onClick={() => deleteWordFromCollection(word)}
                    >
                        <MdDelete />
                    </IconButton>
                    </Grid>
                </Grid>


                </>
                ))}
            </Grid>
          
        </Sheet>
      );
    }
    
    
    export default Collection;