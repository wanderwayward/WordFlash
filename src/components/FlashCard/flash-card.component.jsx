import {Sheet, List, ListItem, Alert, Grid} from '@mui/joy'
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
        <Grid container spacing={2} >
          {/* Top Row */}
          <Grid xs>
            <StyledTypography level="h3">
              {response.word.toUpperCase()}
            </StyledTypography>
          </Grid>
          <Grid xs>
            <StyledTypography level="h3">
              {response.englishTranslation.toUpperCase()}
            </StyledTypography>
          </Grid>

          {/* Second Row */}
          <Grid xs={12}>
            <StyledTypography level="h5">
              Classification: {response.classification}
            </StyledTypography>
          </Grid>

          {/* Third Row */}
          <Grid xs={12}>
            <StyledTypography level="h4">Spanish Definitions:</StyledTypography>
            <List>
              {response.spanishDefinition.map((definition, index) => (
                <ListItem key={index}>
                  {definition}
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Fourth Row */}
          <Grid xs={12}>
            <StyledTypography level="h4">Example Sentences:</StyledTypography>
            <List>
              {response.exampleSentences.map((sentence, index) => (
                <ListItem key={index}>
                  {sentence}
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Fifth Row */}
          <Grid xs={12}>
            <StyledTypography level="h5">
              Nota: {response.note}
            </StyledTypography>
          </Grid>
        </Grid>
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