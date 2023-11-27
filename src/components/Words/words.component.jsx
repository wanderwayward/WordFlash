import { Grid, Typography, Divider, IconButton} from '@mui/joy';
import Word from './word/word.component';
import { MdDelete } from "react-icons/md";

const Words = ({ words, deleteWord, checks }) => {

    const {isMobile, isTablet, isLaptop, isDark} = checks;
    const secondRowFontSize = isMobile ? '16px' : isTablet ? '25px' : isLaptop ? '29px' :  '28px';


    return (
        <Grid container
        sx={{
            width: "100%",
            height: "calc(100vh - 120px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>  
            <Grid 
            sx={{
                position: 'fixed',
                zIndex: 10,
                top: 130,
                height: '60px', 
                width: '100%',
                display:'flex',
                alignItems:'center',
                textAlign: 'center', justifyContent: 'space-around',
            }}>  

                <Grid  xs={4}> 
                    <Typography level="h3" sx={{ textAlign:'center',  fontSize: secondRowFontSize }}>
                        SPANISH
                    </Typography>
                </Grid>
                <Grid  xs={4}> 
                    <Typography level="h3" sx={{textAlign:'center',  fontSize: secondRowFontSize }}>
                        ENGLISH
                    </Typography>
                </Grid>
                <Grid  xs={4}>
                    <Typography level="h3" sx={{ textAlign:'center', fontSize: secondRowFontSize }}>
                        MANAGE
                    </Typography>
                </Grid>
            </Grid>
            <Divider sx={{ width: '100%', mt: 1, mb:3 }} />  
            <Grid container mt={12} sx={{
                overflowY: 'auto', 
                overflowX: 'hidden', 
                width: '100%', 
                paddingTop: '60px' 
            }}>
            {/* Mapping through the words */}
                {words.map((word, index) => (
                        <Grid 
                        key={index}
                        sx={{ 
                            width: '100%', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'space-around' 
                        }}>  
                            <Grid  xs={4}> 
                                <Typography level="h3" sx={{ textAlign:'center',   }}>
                                    {word.word.toUpperCase()}
                                </Typography>
                            </Grid>
                            <Grid  xs={4}> 
                                <Typography level="h3" sx={{textAlign:'center',   }}>
                                {word.englishTranslation.toUpperCase()}
                                </Typography>
                            </Grid>
                            <Grid  xs={4}>
                                <Typography level="h3" sx={{ textAlign:'center',alignContent: 'center', alignItems:'center', justifyContent:'center' }}>
                                <IconButton 
                                        variant="outlined" 
                                        color={isDark ? "danger" : "warning"}
                                        onClick={() => deleteWord(word)}
                                    >
                                        <MdDelete />
                                    </IconButton>
                                </Typography>
                            </Grid>
                        </Grid>

                    ))}                
                
            </Grid>
        </Grid>
    )
}

export default Words;

{/* <Word key={`${index}-${duplicateIndex}`} word={word} deleteWord={deleteWord} /> */}