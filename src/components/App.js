import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import AppBar from "./partials/AppBar";
import Drawer from "./partials/Drawer";

import Home from "./home";
import Portfolio from "./portfolio";
import Impressum from "./impressum/";

class App extends Component {
  state = {
    open: false
  };

  onDrawerToggle = isOpen => this.setState({ open: isOpen });

  render() {
    return (
      <Fragment>
        <AppBar onDrawerToggle={this.onDrawerToggle} />
        <Drawer open={this.state.open} onDrawerToggle={this.onDrawerToggle} />
        <Route
          exact
          path="/"
          render={() => (
            <Home
              drawerOpen={this.state.open}
              onDrawerToggle={this.onDrawerToggle}
            />
          )}
        />
        <Route path="/impressum" component={Impressum} />
        <Route path="/portfolio" component={Portfolio} />
      </Fragment>
    );
  }
}

export default App;
