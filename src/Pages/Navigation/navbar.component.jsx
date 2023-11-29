import { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Typography, Link } from '@mui/joy';
import MenuDrawer from '../Menu/menu.component';
import CollectionsButton from '../../components/Navigation/collections-button.component'

import { ThemeValuesContext } from '../../contexts/theme-values.context';

const Navbar = () => {

  const {theme, checks} = useContext(ThemeValuesContext);
  const {isMobile, isDark} = checks;


  return (
    <Grid container justifyContent="space-between" alignItems="center" sx={{
      backgroundColor: isDark ? theme.colorSchemes.dark.palette.neutral[800] : theme.colorSchemes.light.palette.neutral[100], 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0,
      zIndex: 1100, 
      width: '100%', 
    }}>
      <Grid >
        <MenuDrawer theme={theme} checks={checks} />
      </Grid>
      <Grid  >
      <Link component={RouterLink} to="/" sx={{ textDecoration: 'none !important', color: 'inherit' }}>
        <Typography color="warning" level="title-lg" variant='plain' sx={{fontSize:isMobile ? '1.5rem': '2.2rem'}}>
            WORD FLASH
        </Typography>
      </Link>
      </Grid>
      <Grid >
        <CollectionsButton theme={theme} checks={checks} />
      </Grid>
    </Grid>
  );
};

export default Navbar;
