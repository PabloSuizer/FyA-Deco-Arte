import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from "react-router-dom";
import "./Appbar.css";

/* const pages = ['Productos', 'about', 'adminPanel']; */
const pages = [{ name: 'Inicio', path: '*' }, { name: 'Nosotros', path: 'about' }, { name: 'Mates', path: 'Mates' }, { name: 'Mayorista', path: 'Mayorista' }, { name: 'Cotiza tu producto', path: 'Cotizatuproducto' }];
const settings = [{ name: 'Iniciar sesión', path: 'signin' }, { name: 'Registrarse', path: 'signup' },];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const navigate = useNavigate();

    return (<>
        <div className='appBar-container'>
            <AppBar position='static' color='inherit' style={{ background: 'transparent', boxShadow: 'none', zIndex: '999', paddingTop: '30px' }}>

                <Container maxWidth='x1'>
                    <Toolbar disableGutters>
                        <Typography
                            variant='h6'
                            noWrap
                            component='a'
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'Black',
                                textDecoration: 'none',
                            }}
                        >
                            <div onClick={() => navigate(`/`)}>
                            </div>
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', justifyContent: 'end' } }}>
                            <IconButton
                                size='large'
                                aria-label='account of current user'
                                aria-controls='menu-appbar'
                                aria-haspopup='true'
                                onClick={handleOpenNavMenu}
                                color='inherit'
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id='menu-appbar'
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page.path}>
                                        <Typography textAlign='center' onClick={() => navigate(`/${page.path}`)}>
                                            {page.name}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}


                        <Box sx={{ flexGrow: 4, display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }} >
                            {pages.map((page) => (
                                <Button
                                    key={page.path}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >

                                    <Link
                                        style={{ textDecoration: 'none', color: '#383B4E', fontFamily: 'Inter', fontSize: '16px', fontWeight: '600' }}
                                        to={`/${page.path}`}
                                    >
                                        {page.name}
                                    </Link>
                                </Button>
                            ))}
                        </Box>

                        {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.path} >
                  <Typography textAlign='center'  onClick={() => navigate(`/${setting.path}`)}>
                    
                     
                      {setting.name}
                    
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
                    </Toolbar>
                </Container>
            </AppBar>
            <div className="wave"><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}><path d="M1.41,70.56 C224.88,150.50 258.17,38.98 503.10,50.83 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#fff' }}></path></svg></div>
        </div>
    </>
    );
}
export default ResponsiveAppBar;