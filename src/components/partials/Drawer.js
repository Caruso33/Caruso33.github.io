import React from 'react';

import SwipeableDrawer from 'material-ui/SwipeableDrawer';
import List from 'material-ui/List';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import { Home, Inbox, ContactMail, InsertPhoto } from 'material-ui-icons';

const sideList = (
  <div>
    <List
      style={{
        width: 250
      }}
    >
      <ListItem button>
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Inbox />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ContactMail />
        </ListItemIcon>
        <ListItemText primary="Contact" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <InsertPhoto />
        </ListItemIcon>
        <ListItemText primary="Reisephotos" />
      </ListItem>
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
