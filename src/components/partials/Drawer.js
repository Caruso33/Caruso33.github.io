import React from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import { Home, Gavel, Dashboard } from "@material-ui/icons";

const sideList = (
  <div>
    <List style={{ width: 250 }}>
      <Link to="/">
        <ListItem button>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>

      <Divider />

      <Link to="/portfolio">
        <ListItem button>
          <ListItemText primary="Portfolio" />
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
        </ListItem>
      </Link>

      <Divider />

      <Link to="/impressum">
        <ListItem button>
          <ListItemText primary="Legal Notice" />
          <ListItemIcon>
            <Gavel />
          </ListItemIcon>
        </ListItem>
      </Link>
      <Divider />
    </List>
  </div>
);

export default ({ onDrawerToggle, open }) => (
  <div>
    <SwipeableDrawer
      open={open}
      onClose={() => onDrawerToggle(false)}
      onOpen={() => onDrawerToggle(true)}
    >
      <div
        tabIndex={0}
        role="button"
        onClick={() => onDrawerToggle(false)}
        onKeyDown={() => onDrawerToggle(false)}
      >
        {sideList}
      </div>
    </SwipeableDrawer>
  </div>
);
