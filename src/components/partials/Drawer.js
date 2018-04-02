import React from 'react';

import SwipeableDrawer from 'material-ui/SwipeableDrawer';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import InboxIcon from 'material-ui-icons/Inbox';

const sideList = (
  <div>
    <List>
      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
      <Divider />
    </List>
  </div>
);

export default ({ onDrawerToggle, drawerOpen }) => (
  <div>
    <Button style={{ textAlign: 'right' }} onClick={() => onDrawerToggle(true)}>
      Open Drawer
    </Button>
    <SwipeableDrawer
      open={drawerOpen}
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
