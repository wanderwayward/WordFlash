import {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { Box, Drawer, IconButton, List, ListItemButton, Typography, ModalClose, Button, Link } from '@mui/joy';

import { useLocation } from "react-router-dom";

import { IoMenuSharp as Menu } from "react-icons/io5";
import {UserContext} from '../../contexts/user.context';

import { signOutUser } from '../../utils/firebase-utils';


const MenuDrawer = () => {
  const [open, setOpen] = useState(false);
  const {user} = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();


  return (
    <Box margin={1}>
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
          
          <Link 
          href="/" 
          state={{background: location}}
          sx={{ textDecoration: 'none !important', color: 'inherit' }}
          >
          'Word Flash' 
          </Link>  
          </ListItemButton>
          <ListItemButton>Flashcard Collection</ListItemButton>
          
          <ListItemButton>
            {user ? 
              <Button
                variant="soft"  
                onClick={signOutUser}>
                  Sign Out
              </Button>
            : 
              <Button
                variant="soft"
                component={Link}
                href="/Auth"
                state={{ background: location }}
              >
                Sign In
              </Button>
            }
          </ListItemButton>

        </List>
      </Drawer>
    </Box>
  );
}

export default MenuDrawer;