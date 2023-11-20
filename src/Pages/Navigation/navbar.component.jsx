import { useContext } from 'react'; 
import { Grid, Typography, IconButton,Box } from '@mui/joy';
import MenuDrawer from '../Menu/menu.component';
import { TbBookFilled } from "react-icons/tb";
import { ThemeValuesContext } from '../../contexts/theme-values.context';



const Navbar = () => {

  const { theme, checks } = useContext(ThemeValuesContext);
  const {isDark}= checks;


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
        <Typography>
            WORD FLASH
        </Typography>
      </Grid>
      <Grid >
        <Typography>
            
        <IconButton size='lg' sx={{ 
          padding: '0px', 

        }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: isDark ? `0.5px solid ${theme.colorSchemes.dark.palette.neutral[700]}` : `0.5px solid ${theme.colorSchemes.light.palette.neutral[300]}`,
              borderRadius: '8px', 
              fontSize: 'inherit',
              width: 45, 
              height: 45,
            }}
          >
            <TbBookFilled style={{ fontSize: '20px' }} /> {/* Adjust the fontSize as needed */}
          </Box>
        </IconButton>


        </Typography>
      </Grid>
    </Grid>
  );
};

export default Navbar;
