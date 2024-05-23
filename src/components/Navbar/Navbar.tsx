import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Stack,
  Menu,
  MenuItem,
  Box,
  useTheme
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Searchbar } from '../Searchbar/Searchbar';
import { Link } from 'react-router-dom';

export const MuiNavbar = () => {

  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleImageClick = () => {
    console.log('Image clicked');
  };

  return (
    <Box sx={{ width:"100%", height:"fit-content", maxWidth:"5000px", maxHeight:"150px", marginBottom:'4em' }}>
      <AppBar position='sticky' sx={{ backgroundColor: theme.palette.background.default, }}>
        <Toolbar>
          <Box display="flex" justifyContent={"space-between"} alignItems={"center"}>
              <Link to='/ideas' style={{ textDecoration: 'none' }}>
                <IconButton onClick={handleImageClick} sx={{ padding: 0 }}>
                    <img src="src\assets\pinterest.svg" width={"140px"} />
                </IconButton>
              </Link>
            <Button
              color='secondary'
              variant='contained'
              endIcon={<KeyboardArrowDownIcon />}
              onClick={handleClick}
              sx={{ border: "none", borderRadius: 10, marginLeft: '10px', boxShadow: "none" }}
            >
              Explorar
            </Button>
          </Box>
          <Searchbar />
          <Stack direction='row' spacing={2} >
            <Button variant="contained" color='secondary' size='large' sx={{ border: "none", borderRadius: 10, boxShadow: "none" }}>
              Entrar
            </Button>
            <Button variant="contained" color='primary' size='large' sx={{ border: "none", borderRadius: 10, boxShadow: "none" }}>
              Criar Conta
            </Button>
          </Stack>
          <Menu
            id='options-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            MenuListProps={{
              'aria-labelledby': 'options-button',
            }}
          >
            <Link to='/ideas' style={{ textDecoration: 'none', color:'inherit' }}>
              <MenuItem onClick={handleClose}>
                Explorar
              </MenuItem>
            </Link>
            <Link to='/today' style={{ textDecoration: 'none', color:'inherit' }}>
              <MenuItem onClick={handleClose}>
                Hoje
              </MenuItem>
            </Link>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
