import {useState} from 'react';
import { Box, Input, Drawer, IconButton, List, ListItemButton, Typography, ModalClose } from '@mui/joy';
import { IoMenuSharp as Menu } from "react-icons/io5";



const MenuDrawer = () => {
  const [open, setOpen] = useState(false);

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
          <ListItemButton sx={{ fontWeight: 'lg' }}>Word Flash</ListItemButton>
          <ListItemButton>Flashcard Collection</ListItemButton>
          <ListItemButton>Sign Out</ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
}

export default MenuDrawer;