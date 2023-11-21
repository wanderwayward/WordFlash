import {Sheet, List, ListItem, Alert} from '@mui/joy'
import { StyledTypography } from '../../utils/styledComponents';

const FlashCard = ({ response, checks }) => {

  const { isMobile, isTablet, isLaptop } = checks;

    return (
        <Sheet
        variant="solid" 
        color="primary"
        sx={{
          borderRadius: 5,
          padding: 3,
          width: isMobile ? '100%' : isTablet ? '80%' : isLaptop ? '60%' : '40%',
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

          <StyledTypography level="h5">Spanish Definitions:
          </StyledTypography>

          <List>
            {response.spanishDefinition.map((definition, index) => (
              <ListItem key={index} aria-label={`Spanish definition ${index + 1}`}>{definition}</ListItem>
            ))}
          </List>
          
          <StyledTypography level="h5">Example Sentences:
          </StyledTypography>
          <List>
            {response.exampleSentences.map((sentence, index) => (
              <ListItem key={index} aria-label={`Example sentence ${index + 1}`}>{sentence}</ListItem>
            ))}
          </List>
          <StyledTypography level="h5">
            Note: {response.note}
          </StyledTypography>
        
          </>

      ) : 
      (
      <Alert 
        role="alert"
        severity="error"
        color="danger"
        sx={{ textAlign: 'center' }}
      >
        {response.errorMessage}
      </Alert>

      )}

      </Sheet>
    )
}

export default FlashCard;