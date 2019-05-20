import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";

const styles = theme => ({
  Toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  h1: {
    color: "inherit"
  },
  banner: { textDecoration: "none", color: "inherit" }
});

export default withStyles(styles)(({ classes, onDrawerToggle }) => (
  <AppBar position="fixed">
    <Toolbar className={classes.Toolbar}>
      <IconButton
        onClick={() => onDrawerToggle(true)}
        // className={classes.menuButton}
        color="inherit"
        aria-label="Menu"
      >
        <Menu aria-label="Menu" />
      </IconButton>
      <Typography variant="title" component="h1" className={classes.h1}>
        <Link to="/" className={classes.banner}>
          Welcome <i className="fas fa-code" />
        </Link>
      </Typography>
      <Typography variant="subheading" color="inherit">
        Tobias Leinss
      </Typography>
    </Toolbar>
  </AppBar>
));
