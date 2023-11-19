import { List, ListItem, Alert, Sheet, LinearProgress } from "@mui/joy";
import { StyledTypography } from "../../../utils/styledComponents";

const AnswerBox = ({ response, checks, isLoading }) => {
  
  const { isMobile, isTablet } = checks;
 
  return (
    isLoading ? (
      <LinearProgress 
      color="warning"
      variant="solid"
      sx={{ 
        width: isMobile ? '100%' : isTablet ? '80%' : '50%',
        height: '10px !important',
        marginTop: '98vh',
        marginBottom: 2, 
        alignItems: 'flex-end'}} />
    ) : (
      <Sheet 
        variant="solid" 
        color="primary" 
        sx={{ 
          height: '50vh', 
          borderRadius:5,
          padding: isMobile ? 1 : 2,
          marginX: isMobile ? 'null' : '', 
          width: isMobile ? '100%' : isTablet ? '80%' : '50%',
          margin:'auto',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
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
    )

  );
};

export default AnswerBox;
