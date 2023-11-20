import { Grid, Button } from '@mui/joy';
import MenuDrawer from '../Menu/menu.component';    

const Navbar = () => {
  return (
    <Grid container justifyContent="flex-start" alignItems="center" sx={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0,
      zIndex: 1100, // Ensure it's above other content
      width: '100%', 
      padding: '10px', 
      backgroundColor: '#f5f5f5',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <Grid item>
        <MenuDrawer />
      </Grid>
      <Grid item xs>
        {/* Additional navigation links or branding */}
      </Grid>
      <Grid item>
        <Button>User Profile</Button>
      </Grid>
    </Grid>
  );
};

export default Navbar;
