import React from 'react';

import { AppBar, Toolbar, Typography, Button } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

export default ({ onDrawerToggle }) => (
  <AppBar position="static">
    <Toolbar>
      <IconButton
        // className={classes.menuButton}
        color="inherit"
        aria-label="Menu"
      >
        <MenuIcon onClick={() => onDrawerToggle(true)} />
      </IconButton>
      <Typography
        variant="title"
        color="inherit"
        // className={classes.flex}
        style={{ flex: 1 }}
      >
        traveltobi.de
      </Typography>
      <Button color="inherit" onClick={() => onDrawerToggle(true)}>
        Login
      </Button>
    </Toolbar>
  </AppBar>
);
