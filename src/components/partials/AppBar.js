import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton } from 'material-ui';
import { Menu } from '@material-ui/icons';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  Toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  h1: {
    color: 'inherit'
  },
  banner: { textDecoration: 'none', color: 'inherit' }
});

export default withStyles(styles)(({ classes, onDrawerToggle }) => (
  <AppBar position="fixed">
    <Toolbar className={classes.Toolbar}>
      <IconButton
        // className={classes.menuButton}
        color="inherit"
        aria-label="Menu"
      >
        <Menu aria-label="Menu" onClick={() => onDrawerToggle(true)} />
      </IconButton>
      <Typography variant="title" component="h1" className={classes.h1}>
        <Link to="/" className={classes.banner}>
          traveltobi
        </Link>
      </Typography>
      <Typography variant="subheading" color="inherit">
        Travel and Work
      </Typography>
    </Toolbar>
  </AppBar>
));
