import React from 'react';

import { AppBar, Toolbar, Typography, Button } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  Toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  h1: {
    color: 'inherit'
  }
});

export default withStyles(styles)(({ classes, onDrawerToggle }) => (
  <AppBar position="fixed">
    <Toolbar className={classes.Toolbar}>
      <IconButton
        // className={classes.menuButton}
        color="inherit"
        aria-label="Menu"
      >
        <MenuIcon onClick={() => onDrawerToggle(true)} />
      </IconButton>
      <Typography variant="display1" component="h1" className={classes.h1}>
        traveltobi.de
      </Typography>
      <Button color="inherit">Travel and Work</Button>
    </Toolbar>
  </AppBar>
));
