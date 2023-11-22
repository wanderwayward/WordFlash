import { Grid, Typography, IconButton,Box } from '@mui/joy';
import MenuDrawer from '../Menu/menu.component';
import CollectionsButton from '../../components/Navigation/collections-button.component'
const Navbar = () => {



  return (
    <Grid container justifyContent="space-between" alignItems="center" sx={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0,
      zIndex: 1100, 
      width: '100%', 
      padding: '10px', 
    }}>
      <Grid >
        <MenuDrawer />
      </Grid>
      <Grid  >
        <Typography level="title-lg" variant='soft' sx={{fontSize:'30px'}}>
            WORD FLASH
        </Typography>
      </Grid>
      <Grid >
        <CollectionsButton />
      </Grid>
    </Grid>
  );
};

export default Navbar;
