import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Stack,
  Menu,
  MenuItem,
  TextField,
  Box,
  InputAdornment,
  styled,
  useTheme
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Searchbar } from '../Searchbar/Searchbar';

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
    <AppBar position='sticky' sx={{ backgroundColor: theme.palette.background.default, padding:"1em 0 1.2em 0"}}>
      <Toolbar>
        <Box display="flex" justifyContent={"space-between"} alignItems={"center"}>
            <IconButton onClick={handleImageClick} sx={{ padding: 0 }}>
                <img src="src\assets\pinterest.svg" width={"140px"} />
            </IconButton>
          <Button
            color='secondary'
            variant='contained'
            endIcon={<KeyboardArrowDownIcon />}
            onClick={handleClick}
            sx={{ marginLeft: '10px', boxShadow: "none" }}
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
          <MenuItem onClick={handleClose}>Hoje</MenuItem>
          <MenuItem onClick={handleClose}>Explorar</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
