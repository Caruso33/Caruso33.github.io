import React, { Fragment } from 'react';

import Drawer from './partials/Drawer';

export default ({ drawerOpen, onDrawerToggle }) => (
  <Fragment>
    <Drawer drawerOpen={drawerOpen} onDrawerToggle={onDrawerToggle} />
  </Fragment>
);
