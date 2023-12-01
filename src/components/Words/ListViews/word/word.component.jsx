import { useState, forwardRef } from "react";
import { IconButton, Grid, Modal, Box } from "@mui/joy";
import { MdDelete } from "react-icons/md";
import WordModal from "../../word-modal/word-modal.component";
import { StyledTypographyWord } from "../../../../utils/styledComponents";


const Word = forwardRef(({ word, deleteWord, style, checks, theme, fontSize,  }, ref) => {

    const { isDark} = checks;

    const [open, setOpen] = useState(false);

    const handleModal = () => {
        open ? setOpen(false) :
        setOpen(true);
    }



    return (
        <Grid
        ref={ref}
        container 
        py={1}
        onClick={handleModal}
        sx={{
            alignItems: 'center',
            '&:hover': {
            cursor: 'pointer',    
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
                    onClick={(e) => {
                        e.stopPropagation();
                        deleteWord(word)}}
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
});

export default Word;
