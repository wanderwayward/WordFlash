import {Sheet, List, ListItem, Alert, Grid, Typography} from '@mui/joy'
import { StyledTypography, StyledTypographyResponseWord } from '../../utils/styledComponents';

import SearchError from './search-error.component';

const FlashCard = ({ response, checks, handleSubmit }) => {

  const { isMobile, isTablet, isLaptop } = checks;

  const answerTitleFontSize = isMobile ? '19px' : isTablet ? '27px' : isLaptop ? '30px' :  '32px';
  const answerFontSize = isMobile ? '16px' : isTablet ? '25px' : isLaptop ? '29px' :  '28px';
  const answerPadding = isMobile ? 2 : isTablet ? 4 : isLaptop ? 6 : 8;

    return (
        <Sheet
        variant="soft" 
        color="primary"
        sx={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          marginTop: isMobile ? 10 : 2,
          borderRadius: 10,
          py:2,
          width: isMobile ? '100%' : isTablet ? '95%' : isLaptop ? '70%' : '40%',
        }}>

      {!response.errorMessage ? (
        <Grid container   >
                    
          {/* Top Row */}
          <Grid xs={12} sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent: isMobile ? 'space-around' : 'center', paddingTop:2, px: 2}}>
            <Grid xs={5} >
              <StyledTypographyResponseWord checks={checks} color='danger' level="h3" >
                {response.word.toUpperCase()}
              </StyledTypographyResponseWord>
            </Grid>
            <Grid xs={2}>
              <StyledTypography checks={checks}  color='danger' level="h3" sx={{flexShrink:2, px: isMobile ? 0 : 5}}>
                -            
              </StyledTypography>
            </Grid>
            <Grid xs={5}>
              <StyledTypographyResponseWord checks={checks}  color='danger' level="h3" >
                {response.englishTranslation.toUpperCase()}
              </StyledTypographyResponseWord>
            </Grid>
          </Grid>

          {/* Second Row */}
          <Grid xs={12} sx={{mb:2, display:'flex', justifyContent:'center'}} >
            <StyledTypography level="h5" color="danger" variant='soft' sx={{fontSize:'1rem', width:'80%'}}>
              Classification: {response.classification}
            </StyledTypography>
          </Grid>

          {/* Third Row */}
          <Grid xs={12} sx={{px:answerPadding, display:'flex', flexDirection:'column', m:'auto', textAlign: isMobile ?  'center' : 'left'}}>
            <StyledTypography color="error" level="h4" sx={{fontSize: answerTitleFontSize}}>Spanish Definitions:</StyledTypography>
            <List >
              {response.spanishDefinition.map((definition, index) => (
                <ListItem color="neutral" key={index} sx={{fontSize: answerFontSize, justifyContent: isMobile ? 'center' :'left'}}>
                  {!isMobile ? `${index + 1} -`: null} {definition}
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Fourth Row */}
          <Grid xs={12} sx={{px:answerPadding, display:'flex', flexDirection:'column', m:'auto', textAlign: isMobile ?  'center' : 'left'}}>
            <StyledTypography color="error" level="h4" sx={{fontSize: answerTitleFontSize}}>Example Sentences:</StyledTypography>
            <List >
              {response.exampleSentences.map((sentence, index) => (
                <ListItem color="neutral" key={index} sx={{fontSize: answerFontSize, justifyContent: isMobile ? 'center' :'left'}}>  
                  {!isMobile ? `${index + 1} -`: null} {sentence}
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Fifth Row */}
          { response.note ? (
          <Grid xs={12} sx={{mt:-2, display:'flex', justifyContent:'center'}} >
          <StyledTypography level="h5" color="warning" variant='soft' sx={{fontSize:'1rem', width:'80%', mt:2}}>
              Nota: {response.note}
            </StyledTypography>
          </Grid> ) : null }
          
        </Grid>
      ) : 
      (
       <SearchError response={response} handleSubmit={handleSubmit} isMobile={isMobile} />
      )}

      </Sheet>
    )
}

export default FlashCard;