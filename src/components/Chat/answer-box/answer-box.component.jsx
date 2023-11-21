import { List, ListItem, Alert, Sheet, Box } from "@mui/joy";
import { StyledTypography } from "../../../utils/styledComponents";
import GeneralLoadingSpinner from "../../ui/loading/general-loading-spinner.component";
import FlashCard from "../../FlashCard/flash-card.component";

const AnswerBox = ({ response, checks, isLoading, isSearchInitiated }) => {
  

  return (
<Box
  sx={{ 
    backgroundColor: 'ffffff',
    display: 'flex',
    padding: 2,
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center', 
  }}
>
  {isLoading ? (
    <GeneralLoadingSpinner />
  ) : (
    <FlashCard response={response} checks={checks}  />
  )}
</Box>

  );
};

export default AnswerBox;
