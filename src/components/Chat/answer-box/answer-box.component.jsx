import { Box } from "@mui/joy";
import GeneralLoadingSpinner from "../../ui/loading/general-loading-spinner.component";
import FlashCard from "../../FlashCard/flash-card.component";
import Instructions from "../../FlashCard/instructions.component";

const AnswerBox = ({ response, checks, isLoading, isSearchInitiated }) => {
  

  return (
<Box sx={{ 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100%', 
    padding: 2,
  }}
>
  {!isSearchInitiated ? (
    <Instructions checks={checks}  />
  ) : isLoading ? (
    <GeneralLoadingSpinner checks={checks} />
  ) : (
    <FlashCard response={response} checks={checks}  />
  )}

</Box>

)};

export default AnswerBox;
