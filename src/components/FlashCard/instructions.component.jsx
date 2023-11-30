import {Sheet, Typography } from '@mui/joy';

import { StyledTypography } from '../../utils/styledComponents';

const Instructions = ({checks}) => {
    const { isDark, isMobile, isTablet, isLaptop } = checks;


    return (
        <Sheet
        variant="soft" 
        color="primary"
        sx={{
          borderRadius: 5,
          padding: 3,
          textAlign: 'center',
          width: isMobile ? '100%' : isTablet ? '80%' : isLaptop ? '60%' : '40%',
        }}>
            <Typography level="h5" sx={{fontSize: isMobile? '1rem' :'1.25rem', padding:2}}>
                Start by typing in any Spanish word or phrase, and Word Flash will instantly transform it into a custom flash card for you. 
            </Typography>
            <Typography level="h5" sx={{fontSize: isMobile? '1rem' :'1.25rem', padding:2}}>
                Explore your personalized flash card collection by clicking the icon in the top right corner. 
            </Typography>
        </Sheet>
    )
}

export default Instructions;