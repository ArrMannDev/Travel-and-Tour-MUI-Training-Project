import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../assets/image/logo.svg';
import { Link } from 'react-router-dom';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function NavBarComponent({pages}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  return (
    <AppBar AppBar position="sticky" elevation={4} sx={{
      padding:"4px"
    }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <img src={logo} alt="logo" width={50} />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h4" noWrap>
                True Treasure
              </Typography>
              <Typography variant="h6" noWrap>
                Travel & Tour
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              gap: 2,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.path}
                component={Link}
                to={page.path}
                sx={{ color: 'white' }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={(e) => setAnchorElNav(e.currentTarget)}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.path}
                  component={Link}
                  to={page.path}
                  onClick={() => setAnchorElNav(null)}
                >
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={(e) => setAnchorElUser(e.currentTarget)}>
                <Avatar alt="User" />
              </IconButton>
            </Tooltip>

            <Menu
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={() => setAnchorElUser(null)}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => setAnchorElUser(null)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
