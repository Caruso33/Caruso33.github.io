import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles({
  Toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  h1: {
    color: "inherit"
  },
  banner: { textDecoration: "none", color: "inherit" }
});

export default ({ onDrawerToggle }) => {
  const classes = useStyles();

  return (
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
        <Typography variant="h4" component="h1" className={classes.h1}>
          <Link to="/" className={classes.banner}>
            Welcome <i className="fas fa-code" />
          </Link>
        </Typography>
        <Typography variant="h6" color="inherit">
          Tobias Leinss
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
