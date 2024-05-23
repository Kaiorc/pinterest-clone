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
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Searchbar } from '../Searchbar/Searchbar';
import { Link } from 'react-router-dom';

export const MuiNavbar = () => {

  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignin, setShowSignin] = useState(false);

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

  const handleLoginOpen = () => {
    setShowLogin(true);
  };

  const handleLoginClose = () => {
    setShowLogin(false);
  };

  const handleSigninOpen = () => {
    setShowSignin(true);
  };

  const handleSigninClose = () => {
    setShowSignin(false);
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
            <Button variant="contained" color='secondary' size='large' sx={{ border: "none", borderRadius: 10, boxShadow: "none" }} onClick={handleLoginOpen}>
              Entrar
            </Button>
            <Button variant="contained" color='primary' size='large' sx={{ border: "none", borderRadius: 10, boxShadow: "none" }} onClick={handleSigninOpen}>
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
      <Dialog open={showLogin} onClose={handleLoginClose}>
        <DialogTitle align='center' marginTop={'1em'}>
          <Box display="flex" justifyContent="center" marginBottom={'1em'}>
            <img src="src\assets\pinterest.svg" width={"200px"} alt="Pinterest Logo" />
          </Box>
          Entre na sua conta
        </DialogTitle>
        <DialogContent>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email"
              type="email"
              fullWidth
              sx={{ marginBottom: 2, width: '50%'}}
            />
            <TextField
              margin="dense"
              id="password"
              label="Senha"
              type="password"
              sx={{ width: '50%' }}
            />
            <Typography variant='subtitle2' align='center' marginTop={'1em'} width={'70%'}>
            Ao continuar, você concorda com os Termos de Serviço do Pinterest e confirma que leu a Política de Privacidade. 
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', marginBottom: '1em' }}>
        <Button onClick={handleLoginClose} sx={{ border: "none", borderRadius: 10, boxShadow: "none" }}>
          Cancelar
        </Button>
        <Button variant="contained" color="primary" sx={{ border: "none", borderRadius: 10, boxShadow: "none" }}>
          Entrar
        </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={showSignin} onClose={handleSigninClose}>
        <DialogTitle align='center' marginTop={'1em'}>
          <Box display="flex" justifyContent="center" marginBottom={'1em'}>
            <img src="src\assets\pinterest.svg" width={"200px"} alt="Pinterest Logo" />
          </Box>
          Crie sua conta
        </DialogTitle>
        <DialogContent>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <TextField
              margin="dense"
              id="text"
              label="Nome"
              type="password"
              sx={{ marginBottom: 2, width: '70%' }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email"
              type="email"
              fullWidth
              sx={{ marginBottom: 2, width: '70%'}}
            />
            <TextField
              margin="dense"
              id="password"
              label="Senha"
              type="password"
              sx={{ marginBottom: 2, width: '70%' }}
            />
            <TextField
              margin="dense"
              id="password"
              label="Confirme sua senha"
              type="password"
              sx={{ width: '70%' }}
            />
            <Typography variant='subtitle2' align='center' marginTop={'1em'} width={'70%'}>
            Ao continuar, você concorda com os Termos de Serviço do Pinterest e confirma que leu a Política de Privacidade. 
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', marginBottom: '1em' }}>
          <Button onClick={handleSigninClose} sx={{ border: "none", borderRadius: 10, boxShadow: "none" }}>
            Cancelar
          </Button>
          <Button variant="contained" color="primary" sx={{ border: "none", borderRadius: 10, boxShadow: "none" }}>
            Entrar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
