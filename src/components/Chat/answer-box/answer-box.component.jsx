import { List, ListItem, Alert, Sheet, LinearProgress, Box } from "@mui/joy";
import { StyledTypography } from "../../../utils/styledComponents";

const AnswerBox = ({ response, checks, isLoading }) => {
  
  const { isMobile, isTablet } = checks;
 
  return (
    <Box
    sx={{ 
      height: '60vh', 
      borderRadius:5,
      width: isMobile ? '100%' : isTablet ? '80%' : '50%',
      margin:'auto',
      marginTop: isMobile ? 8 : 12,
      padding: isMobile ? 1 : 2,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      }}>
    {isLoading ? (
      <LinearProgress 
      color="warning"
      variant="solid"
      sx={{ 
        width: '100%',
        height: '10px !important',
        marginTop: '94vh',
        marginBottom: 2, 
        alignItems: 'flex-end'}} />
    ) : (
      <Sheet 
        variant="solid" 
        color="primary"
        sx={{
          borderRadius: 5,
          padding: 3,
          width: '90%',
          marginBotton: 2,
        }}>

      {!response.errorMessage ? (
           <>
          <StyledTypography level="h4">
            Original Word: {response.originalWord}
          </StyledTypography>
        
          <StyledTypography level="h4">
            English Translation: {response.englishTranslation}
          </StyledTypography>
        
          <StyledTypography level="h5">
            Classification: {response.classification}
          </StyledTypography>
        
          <StyledTypography level="h5">Spanish Definitions:</StyledTypography>

          <List>
            {response.spanishDefinition.map((definition, index) => (
              <ListItem key={index}>{definition}</ListItem>
            ))}
          </List>
          
          <StyledTypography level="h5">Example Sentences:</StyledTypography>
            <List>
              {response.exampleSentences.map((sentence, index) => (
                <ListItem key={index}>{sentence}</ListItem>
              ))}
            </List>
          </>

      ) : 
      (
        <Alert 
        severity="error"
        color="danger"
        sx={{
          textAlign: 'center',
        }}  
        >
          {response.errorMessage}
        </Alert>
      )}

      </Sheet>
    )}
    </Box>

  );
};

export default AnswerBox;
