import React from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import {
  Home,
  Gavel,
  ContactMail,
  Collections,
  Face,
  Assignment,
  Dashboard,
  TrendingUp,
  BusinessCenter,
  SentimentVerySatisfied
} from "@material-ui/icons";

const sideList = (
  <div>
    <List
      style={{
        width: 250
      }}
    >
      <Link to="/">
        <ListItem button>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>
      <Divider />
      <ListItem button>
        <ListItemText primary="Business" />
        <ListItemIcon>
          <BusinessCenter />
        </ListItemIcon>
      </ListItem>{" "}
      <Link to="/portfolio">
        <ListItem button>
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Portfolio" />
        </ListItem>
      </Link>
      <ListItem button>
        <ListItemIcon>
          <ContactMail />
        </ListItemIcon>
        <ListItemText primary="Kontakt" />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="Privat" />
        <ListItemIcon>
          <SentimentVerySatisfied />
        </ListItemIcon>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Assignment />
        </ListItemIcon>
        <ListItemText primary="Blog" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Face />
        </ListItemIcon>
        <ListItemText primary="Ueber mich" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <TrendingUp />
        </ListItemIcon>
        <ListItemText primary="Themen" />
      </ListItem>
      <Link to="/bilder">
        <ListItem button>
          <ListItemIcon>
            <Collections />
          </ListItemIcon>
          <ListItemText primary="Reisephotos" />
        </ListItem>
      </Link>
      <Divider />
      <Link to="/impressum">
        <ListItem button>
          <ListItemIcon>
            <Gavel />
          </ListItemIcon>
          <ListItemText primary="Legal Notice" />
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
