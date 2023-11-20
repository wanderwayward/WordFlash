import { Grid, Avatar, Typography } from '@mui/joy';
import MenuDrawer from '../Menu/menu.component';    

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
      <Grid item>
        <MenuDrawer />
      </Grid>
      <Grid item >
        <Typography>
            WORD FLASH
        </Typography>
      </Grid>
      <Grid item>
        <Avatar color="warning" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </Grid>
    </Grid>
  );
};

export default Navbar;
