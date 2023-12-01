import { Grid, Sheet } from "@mui/joy";
import { StyledTypography } from "../../../utils/styledComponents";

const WordFlashcardView = ({ word }) => {
    return (
        <Sheet
        color="danger"
        variant="soft"
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '2em',
            width: '2em',
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none',
            borderRadius: '0px',
            p: 0,
            m: 0,
        }}
        >
            <StyledTypography variant="plain" color="primary" sx={{fontSize: '1em', }}>`
                {word.originalWord.toUpperCase()}
            </StyledTypography>
            <StyledTypography variant="plain" color="primary" sx={{fontSize: '1em', }}>
                -
            </StyledTypography>
            <StyledTypography variant="plain" color="primary" sx={{fontSize: '1em', }}>
                {word.englishTranslation.toUpperCase()}
            </StyledTypography>
        </Sheet>
    );
}

export default WordFlashcardView;