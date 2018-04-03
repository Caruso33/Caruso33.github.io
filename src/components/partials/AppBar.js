import React from 'react';

import { AppBar, Toolbar, Typography, Button } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

export default ({ onDrawerToggle }) => (
  <AppBar position="fixed">
    <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
      <IconButton
        // className={classes.menuButton}
        color="inherit"
        aria-label="Menu"
      >
        <MenuIcon onClick={() => onDrawerToggle(true)} />
      </IconButton>
      <Typography variant="display1" component="h1" style={{ color: 'white' }}>
        traveltobi.de
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
);

// <Typography
//  variant="title"
//  color="inherit"
//  // className={classes.flex}
// >
// </Typography>
