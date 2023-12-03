import { useState } from "react";
import { Modal, Sheet,IconButton } from "@mui/joy";
import { StyledTypography, StyledDivider } from "../../../../utils/styledComponents";
import { MdDelete } from "react-icons/md";
import WordModal from "../../word-modal/word-modal.component";

const WordFlashcardView = ({  word, deleteWord, style, checks, theme,   }) => {

   
    const { isMobile,  isDark} = checks;

    const [open, setOpen] = useState(false);

    const handleModal = () => {
        open ? setOpen(false) :
        setOpen(true);
    }

    return (
        <Sheet
        color="warning"
        variant="soft"
        mt={12}
        onClick={handleModal}
        sx={{
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: isMobile ? '4em' :'6em',
            width: isMobile ? '8em':'10em',
            border: 'none',
            boxShadow: 'none',
            borderRadius: '0.5em',
            p: 0,
        }}
        >
            <StyledTypography variant="plain" color="primary" sx={{fontSize: isMobile ? '.5rem': '1em', }}>
                {word.originalWord.toUpperCase()}
            </StyledTypography>
            <StyledDivider  sx={{width: '50%', my: 1, }}/>
            <StyledTypography variant="plain" color="primary" sx={{fontSize: isMobile ? '.5rem': '1em', }}>
                {word.englishTranslation.toUpperCase()}
            </StyledTypography>
            
            <IconButton
            onClick={(e) => {
                e.stopPropagation();
                deleteWord(word)
            }}
            sx={{
                position: 'absolute',
                top: '-.2em',
                right: '-.3em',
                color: isDark ? theme.colorSchemes.dark.palette.danger[300] :theme.colorSchemes.light.palette.warning[700],
                '&:hover': {
                    color: isDark ? theme.palette.danger.dark : theme.palette.success.dark,
            }}
            }
            >
                <MdDelete />
            </IconButton>
            <Modal
            open={open}
            onClose={handleModal}
            sx={{display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center'}}
            >
              <WordModal word={word} checks={checks} />
            </Modal>
        </Sheet>
    );
}

export default WordFlashcardView;