import {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { Box, Drawer, IconButton, List, ListItemButton, Typography, ModalClose } from '@mui/joy';

import { Link, useLocation } from "react-router-dom";

import { IoMenuSharp as Menu } from "react-icons/io5";
import {UserContext} from '../../contexts/user.context';


const MenuDrawer = () => {
  const [open, setOpen] = useState(false);
  const {user} = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate('/Auth');
  }




  return (
    <Box
    sx={{position: 'absolute', top: 8, left: 7, }}
    >
      <IconButton
      variant="outlined" 
      color="neutral" 
      onClick={() => setOpen(true)}
      >
        <Menu />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'left',
            gap: 0.5,
            ml: 'auto',
            mt: 1,
            mr: 2,
          }}
        >
          <Typography
            component="label"
            htmlFor="close-icon"
            fontSize="sm"
            fontWeight="lg"
            sx={{ cursor: 'pointer' }}
          >
          </Typography>
          <ModalClose id="close-icon" sx={{ position: 'initial' }} />
        </Box>

        <List
          size="lg"
          component="nav"
          sx={{
            flex: 'none',
            fontSize: 'xl',
            '& > div': { justifyContent: 'center' },
          }}
        >
          <ListItemButton sx={{ fontWeight: 'lg' }}>
          
          <Link to="/" state={{background: location}}>
          'Word Flash' 
          </Link>  
          </ListItemButton>
          <ListItemButton>Flashcard Collection</ListItemButton>
          
          <ListItemButton>
          {user ? 
          <Link onClick={{}}>
          Sign Out 
          </Link>
          
          : 
          <Link to="/Auth" state={{background: location}}>
          'Sign In' 
          </Link>
          }
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
}

export default MenuDrawer;