import { useState } from "react";
import { Modal, Sheet,IconButton } from "@mui/joy";
import { StyledTypography, StyledDivider } from "../../../../utils/styledComponents";
import { MdDelete } from "react-icons/md";
import WordModal from "../../word-modal/word-modal.component";

const WordFlashcardView = ({  word, deleteWord, style, checks, theme,   }) => {

    console.log('WFV', word);  
    
    const { isDark} = checks;

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
            height: '6em',
            width: '10em',
            border: 'none',
            boxShadow: 'none',
            borderRadius: '0.5em',
            p: 0,
        }}
        >
            <StyledTypography variant="plain" color="primary" sx={{fontSize: '1em', }}>
                {word.originalWord.toUpperCase()}
            </StyledTypography>
            <StyledDivider  sx={{width: '50%', my: 1, }}/>
            <StyledTypography variant="plain" color="primary" sx={{fontSize: '1em', }}>
                {word.englishTranslation.toUpperCase()}
            </StyledTypography>
            
            <IconButton
            onClick={(e) => {
                e.stopPropagation();
                deleteWord(word)}
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