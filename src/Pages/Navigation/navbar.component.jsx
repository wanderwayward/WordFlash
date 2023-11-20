import { Grid, Button } from '@mui/joy';
import MenuDrawer from '../Menu/menu.component';    

const Navbar = () => {
  return (
    <Grid container justifyContent="flex-start" alignItems="center" sx={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0,
      zIndex: 1100, 
      width: '100%', 
      padding: '10px', 
    }}>
      <Grid item>
        <MenuDrawer />
      </Grid>
      <Grid item xs>
        {/* Additional navigation links or branding */}
      </Grid>
      <Grid item>
      </Grid>
    </Grid>
  );
};

export default Navbar;
