import { useState, useContext } from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { Box, Drawer, IconButton, List, ListItemButton, ModalClose, Button, Link } from '@mui/joy';
import { IoMenuSharp as Menu } from "react-icons/io5";
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase-utils';

const MenuDrawer = ({theme, checks}) => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(UserContext);

  const {isDark, isMobile, isTablet, isLaptop}= checks;


  return (
    <Box margin={1}>
      <IconButton
        variant="outlined" 
        color="neutral" 
        onClick={() => setOpen(true)}
        sx={{
          overflow: 'hidden',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: isDark ? `0.5px solid ${theme.colorSchemes.dark.palette.neutral[700]}` : `0.5px solid ${theme.colorSchemes.light.palette.neutral[300]}`,
          borderRadius: '8px', 
          fontSize: isMobile ? '20px' : '30px',
          minWidth: isMobile? '45px !important': '60px !important', 
          minHeight: isMobile? '45px !important': '60px !important', 
      }}
      >
        <Menu sx={{ fontSize: isMobile ? '20px' : '30px' }} />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          {/* Close Icon at the top-right corner */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              p: 1,
            }}
          >
            <ModalClose onClick={() => setOpen(false)} />
          </Box>

          {/* Main List Items */}
          <List
            size="lg"
            component="nav"
            sx={{
              '& > div': { justifyContent: 'center' },
            }}
          >
            <ListItemButton sx={{ fontWeight: 'lg' }}>
              <Link component={RouterLink} to="/" sx={{ textDecoration: 'none !important', color: 'inherit' }}>
                WORD FLASH
              </Link>  
            </ListItemButton>
            <ListItemButton>
              <Link component={RouterLink} to="Collection" sx={{ textDecoration: 'none !important', color: 'inherit' }}>
                COLLECTION
              </Link>  
            </ListItemButton>
          </List>

          {/* Sign In/Out Button at the bottom */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              p: 1,
            }}
          >
            <ListItemButton>
              {user ? 
                <Button
                  color="danger"
                  variant="soft"  
                  onClick={signOutUser}>
                    Sign Out
                </Button>
              : 
                <Button
                  color="success"
                  variant="soft"
                  href="/Auth"
                  sx={{ textDecoration: 'none !important', color: 'inherit' }}
                >
                  Sign In
                </Button>
              }
            </ListItemButton>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}

export default MenuDrawer;
