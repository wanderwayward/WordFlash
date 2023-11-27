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
    
    const headerStyle = {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '40px',
      };
      const contentCellStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
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
            <Grid container sx={{ position: 'fixed', top: 60, left: 0, right: 0, zIndex: 1100 }}>
                <Grid xs={6} sx={headerStyle}>
                <Button>SORT</Button>
                </Grid>
                <Grid xs={6} sx={headerStyle}>
                <Button>FLASH CARD VIEW</Button>
                </Grid>
            </Grid>
            {/* Fixed header for SPANISH, ENGLISH, and MANAGE */}
            <Grid container sx={{ position: 'fixed', top: 100, left: 0, right: 0, zIndex: 1100 }}>
                    <Grid xs={4} sx={headerStyle}>
                    <Typography>SPANISH</Typography>
                    </Grid>
                    <Grid xs={4} sx={headerStyle}>
                    <Typography>ENGLISH</Typography>
                    </Grid>
                    <Grid xs={4} sx={headerStyle}>
                    <Typography>MANAGE</Typography>
                    </Grid>
                </Grid>    
              {/* Word list starts below the fixed headers */}
            <Grid container direction="column" sx={{ pt: '140px', px: 2 }}>
                {words.map((word, index) => (
                <>
                <Grid container key={index} spacing={2} alignItems="center">
                    <Grid xs={4} sx={contentCellStyle}>
                    <Typography>{word.word}</Typography>
                    </Grid>
                    <Grid xs={4} sx={contentCellStyle}>
                    <Typography>{word.englishTranslation}</Typography>
                    </Grid>
                    <Grid xs={4} sx={{ ...contentCellStyle, justifyContent: 'flex-end' }}>
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
                    <Grid xs={4} sx={contentCellStyle}>
                    <Typography>{word.word}</Typography>
                    </Grid>
                    <Grid xs={4} sx={contentCellStyle}>
                    <Typography>{word.englishTranslation}</Typography>
                    </Grid>
                    <Grid xs={4} sx={{ ...contentCellStyle, justifyContent: 'flex-end' }}>
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
                    <Grid xs={4} sx={contentCellStyle}>
                    <Typography>{word.word}</Typography>
                    </Grid>
                    <Grid xs={4} sx={contentCellStyle}>
                    <Typography>{word.englishTranslation}</Typography>
                    </Grid>
                    <Grid xs={4} sx={{ ...contentCellStyle, justifyContent: 'flex-end' }}>
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
                    <Grid xs={4} sx={contentCellStyle}>
                    <Typography>{word.word}</Typography>
                    </Grid>
                    <Grid xs={4} sx={contentCellStyle}>
                    <Typography>{word.englishTranslation}</Typography>
                    </Grid>
                    <Grid xs={4} sx={{ ...contentCellStyle, justifyContent: 'flex-end' }}>
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