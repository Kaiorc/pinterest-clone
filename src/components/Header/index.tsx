import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import PinterestIcon from '@mui/icons-material/Pinterest';
import IconButtonGroup from '../IconButtonGroup';
import SearchIcon from '@mui/icons-material/Search';
import TextButtonGroup from '../TextButtonGroup';

const Header: React.FC = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#fff', color: '#000', flexGrow: 1 }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <IconButton edge="start" color="inherit" aria-label="logo" >
            <PinterestIcon fontSize="large" sx={{ color: '#FF0000' }} />
          </IconButton>
          <TextButtonGroup />
        </Box>
        <Box
          sx={{
            position: 'relative',
            borderRadius: 1,
            backgroundColor: '#f1f3f4',
            '&:hover': {
              backgroundColor: '#e8e8e8',
            },
            marginRight: 2,
            marginLeft: 2,
            flexGrow: 1,
            width: '100%',
            maxWidth: '900px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box sx={{ padding: '0 16px', height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <SearchIcon />
          </Box>
          <InputBase
            placeholder="Search…"
            sx={{
              color: 'inherit',
              paddingLeft: `calc(1em + 32px)`,
              width: '100%',
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', alignContent: 'space-between', flexShrink: 0 }}>
          <IconButtonGroup />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
