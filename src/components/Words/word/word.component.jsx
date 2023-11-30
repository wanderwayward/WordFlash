import { IconButton, Grid, Modal } from "@mui/joy";
import { MdDelete } from "react-icons/md";
import WordModal from "../word-modal/word-modal.component";

import { StyledTypographyWord } from "../../../utils/styledComponents";

const Word = ({ word, deleteWord, style, checks, theme, fontSize, open, handleModal }) => {

    const { isDark} = checks;

    return (
        <Grid container 
        alignItems="center" 
        py={1}
        onClick={handleModal}
        sx={{
            '&:hover': {
            backgroundColor: isDark ? theme.colorSchemes.dark.palette.success[800] : theme.colorSchemes.light.palette.primary[100]  
        },}}>
            <Grid xs={4} sx={style}>
                <StyledTypographyWord variant="plain" color={isDark ? "primary" : "danger"} sx={{fontSize:fontSize, }}>
                    {word.originalWord.toUpperCase()}
                </StyledTypographyWord>
            </Grid>
            <Grid xs={4} sx={style}>
                <StyledTypographyWord variant="plain" color={isDark ? "primary" : "danger"} sx={{fontSize:fontSize, }}>
                    {word.englishTranslation.toUpperCase()}
                </StyledTypographyWord>
            </Grid>
            <Grid xs={4} sx={style}>
                <IconButton
                    variant="outlined"
                    color={isDark ? "danger" : "warning"}
                    onClick={() => deleteWord(word)}
                    sx={{
                        fontSize: '1em',
                    }}                
                >
                    <MdDelete />
                </IconButton>
            </Grid>
            <Modal
            open={open}
            onClose={handleModal}
            sx={{display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center'}}
            >
              <WordModal word={word} checks={checks} />
            </Modal>
        </Grid>
    );
}

export default Word;
