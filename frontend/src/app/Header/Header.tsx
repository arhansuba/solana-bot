import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme } from '../Themes/useTheme';

const Header: React.FC = () => {
  const { toggleTheme, currentTheme } = useTheme();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Application
        </Typography>
        <Button color="inherit" onClick={toggleTheme}>
          {currentTheme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
