import React, { useState } from "react";
import { Route } from "react-router-dom";
import AppBar from "./partials/AppBar";
import Drawer from "./partials/Drawer";
import Home from "./home/Home";
import Portfolio from "./portfolio/Portfolio";
import Impressum from "./impressum/Impressum";

const App = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);

  return (
    <>
      <AppBar onDrawerToggle={toggleDrawer} />
      <Drawer open={open} onDrawerToggle={toggleDrawer} />
      <Route
        exact
        path="/"
        render={() => (
          <Home drawerOpen={open} onDrawerToggle={toggleDrawer} />
        )}
      />
      <Route path="/impressum" component={Impressum} />
      <Route path="/portfolio" component={Portfolio} />
    </>
  );
};

export default App;
